import { NextAuthOptions } from "next-auth";
import bcrypt from 'bcryptjs';
import dbConnect from "@/lib/dbConnects";
import UserModel from "@/model/User";
import { any } from "zod";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions= {
    providers:[
        CredentialsProvider({
            id:'credentials',
            name:'Credentials',
            credentials:{
                email:{label: "email", type: "text"},
                password:{ label: "Password", type: "password"}
            },
            async authorize(credentials:any):Promise<any>{
                console.log('try se pehle',credentials)
                await dbConnect();
                console.log('db conncet k bad',credentials)
                try {
                    const user = await UserModel.findOne({
                        $or:[
                            {email: credentials.identifier},
                            {username:credentials.identifier},
                        ],
                    });
                    console.log('ye user he',user)
                    if(!user){  
                        throw new Error('No User found with this email and username')
                    }

                    if(!user.isVerified){
                        throw new Error('No user found with this email')
                    }

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if(isPasswordCorrect){
                        return user;
                    }else{
                        throw new Error('Incorrect Password')
                    }

                } catch (err:any) {
                    throw new Error(err)
                }
            }
        }) 
    ],
    callbacks:{
        async jwt ({token, user}){
            if(user){
                token._id = user._id?.toString();
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username;
            }
            return token;
        },

        async session({session, token}){
            if(token){
                session.user._id = token._id?.toString();
                session.user.isVerified = token.isVerified;
                session.user.isAcceptingMessages =token.isAcceptingMessages;
                session.user.username = token.username;
            }
            return session;
        }
    },
    pages:{
        signIn:'/sign-in'
    },
    session:{
        strategy:"jwt"
    },

    secret:process.env.NEXTAUTH_SECRET,

}