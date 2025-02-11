import connectDB from "@/lib/ConnectDB";
import SignupUser from "@/Models/Singup";
import bcrypt from "bcrypt";

import { sendVarificationEmail } from "@/Helpers/SendVarificationEmail";

export async function POST(req: Request) {
    await connectDB();

    try {
        const { name, email, password } = await req.json();
        const existingUser = await SignupUser.findOne({ email });
        const UserNameTaken = await SignupUser.findOne({ name });

        if (existingUser) {
            return Response.json({ message: "User already exists" }, { status: 400 });
        }

        if (UserNameTaken) {
            return Response.json({ message: "Username already taken" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const expirationTime = new Date();
        expirationTime.setHours(expirationTime.getHours() + 1);
        const OTP = Math.floor(100000 + Math.random() * 900000).toString();

        const newUser = new SignupUser({
            name,
            email,
            password: hashedPassword,
            OTP: OTP,
            OTPExpiration: expirationTime,
        })

        await newUser.save();

        const emailResponse = await sendVarificationEmail(name, OTP, email);

        if (emailResponse.success) {
            return Response.json({ message: "Signup successful, please verify your email" }, { status: 200 });
        } else {
            return Response.json({ message: "Failed to send verification email" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error in Signup API", error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
}





