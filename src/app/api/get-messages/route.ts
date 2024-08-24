import dbConnect from "@/lib/dbConnects";
import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import {User} from 'next-auth'
import MessageModel from "@/model/Message";
import UserModel from "@/model/User";


export async function GET(request: Request) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const _user: User = session?.user as User;

    if( !session && !_user){
        return Response.json({
            success:false,
            message:"Not Authenticated",
        },{status:401})
    }

    const userId = new mongoose.Types.ObjectId(_user._id);
    console.log(userId);
    try {

        const user = await UserModel.aggregate([
            {$match:{_id:userId}},
            {$unwind:'$messages'},
            {$sort:{'messages.createdAt':-1}},
            {$group:{_id:'$_id', messages:{$push:'$messages'}}}
        ]).exec();

        console.log('ye user he',user)
        if(!user || user.length === 0){
            return Response.json({
                success:false,
                message:"userNot found",
            },{status:404})
        }

        return Response.json({
           
            messages:user[0].messages,
        },{status:200})

        
    } catch (error) {
        console.error('An unexpected error occurs',error);

          return Response.json({
            success:false,
            message:"Internal server error",
        },{status:500})
    }
  
  }