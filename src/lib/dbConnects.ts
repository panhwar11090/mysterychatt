import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> { 
    // check if we have connection to the database or if its currently connecting
    if(connection.isConnected){
        console.log('Already connected to the database');
        return;
    }

    try {
        // Atempt to connect to the database
        const db = await mongoose.connect(process.env.MONGODB_URI || '');
        
        connection.isConnected = db.connections[0].readyState;
        console.log('database connected succesfully')
        
    } catch (error) {
        console.log('Database connection failed',error)
        process.exit(1);
    }
}

export default dbConnect;