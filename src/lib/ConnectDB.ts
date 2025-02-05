import mongoose from "mongoose";


type DBConfig = {
    uri: string;
    options?: mongoose.ConnectOptions;
}


async function ConnectDB(): Promise<void> {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to the database");
        return;
    }

    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Re-throw the error to handle it in the calling code
    }
}



export default ConnectDB;
