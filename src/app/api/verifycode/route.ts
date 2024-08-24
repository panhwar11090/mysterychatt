import dbConnect from "@/lib/dbConnects";
import UserModel from "@/model/User";
import { date } from "zod";


export async function POST(request:Request) {

    await dbConnect()

    try {
        const {username,code} = await request.json();
        const decodedUsername = decodeURIComponent(username);
        console.log('decode username for verify',decodedUsername)
        const user = await UserModel.findOne({username:decodedUsername});

        console.log('user ka console ', user)

        if(!user){
            return Response.json(
                {
                    success:false,
                    message:'User not found vvv'
                },{status:404}
            );
        }

        //check the code is correct and not expired
        
        const isCodeValid = user.verifyCode === code;
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

        if(isCodeNotExpired && isCodeValid){
            console.log(isCodeNotExpired,isCodeValid)
            user.isVerified = true,
            await user?.save()

            return Response.json(
                {
                    success:true,
                    message :"Account verified succesfully"
                },{status:200}
            )
        }else if (!isCodeNotExpired){
            //code has expired
            return Response.json(
                {
                  success: false,
                  message:
                    'Verification code has expired. Please sign up again to get a new code.',
                },
                { status: 400 }
              );
        } else {
            //code is correct
            return Response.json(
                {
                    success: false, message: 'Error verification code' 
                },
                {status:500}
            )
        }
        
    } catch (error) {
        console.error('Error verifying user:', error);
        return Response.json(
            {
                success:false,
                message:'Error verifying user'
            },{status:500}
        );
    }
    
}