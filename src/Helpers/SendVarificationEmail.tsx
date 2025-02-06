import resend from "@/lib/Resend";

import VarificationEmail from "../../Emails/VarifcationEmail";

import { SignupResponseAPI } from "@/Types/SignipResponseAPI";


export const sendVarificationEmail = async (name: string, OTP: string, email: string) : Promise<SignupResponseAPI> => {

    try {
        
        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: email,
            subject: "Verify your email",
            react: <VarificationEmail name={name} OTP={OTP} />,
        });


        return {
            success: true,
            message: "sending verification email Completed",
        }

        
    } catch (error) {
        console.error("Error sending verification email:", error);
        return {
            success: false,
            message: "Error sending verification email",
        }
    }

}


// in this promis always need sothing as the return
