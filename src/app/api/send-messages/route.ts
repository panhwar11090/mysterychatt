import dbConnect from '@/lib/dbConnects';
import MessageModel, { Message } from '@/model/Message';
import UserModel from '@/model/User';


export async function POST(request: Request) {
    await dbConnect()

    const {username, content} = await request.json();

    try {

        const user = await UserModel.findOne({username}).exec();
        if(!user){
            return Response.json(
                { message: 'User Not found', success: false },
                { status: 404 }
            );
        }

        // check user is accepting message
        if(!user.isAcceptMessages){
            return Response.json(
                { 
                    message: 'User is not accepting messages', 
                    success: false 
                },
                { status: 403 }
                );
        }

        const newMessage = {content,createdAt:new Date()};
        // push the new message to the user message array
        user.messages.push(newMessage as Message);

        await user.save();

        return Response.json(
            { message: 'Message sent successfully', success: true },
            { status: 201 }
            );
        
    } catch (error) {
        console.error('Error adding message:', error);
        return Response.json(
        { message: 'Internal server error', success: false },
        { status: 500 }
        );
    }
}