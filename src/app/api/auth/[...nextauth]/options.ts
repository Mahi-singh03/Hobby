import NextAuth, { NextAuthOptions } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import SignupUser from "@/Models/Singup";
import connectDB from "@/lib/ConnectDB";


export const options: NextAuthOptions = {
    providers: [
        credentialsProvider({
            id: "credentials",
            name: "Credentials",
            //  credentials are the fields that are required to login
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" },
            },
            async authorize(credentials: any): Promise<any> {
                await connectDB();
                try {
                    const user = await SignupUser.findOne({
                        $or: [{ email: credentials.email }, {
                            name: credentials.name
                        }]
                    });

                    if (!user) {
                        throw new Error("User not found");
                    }
                    
                    //  compare the password
                    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                    if (isPasswordValid) {
                        return user;
                    }else  {
                        throw new Error("Invalid password");
                    }



                } catch (error) {
                    console.log(error);
                }



            }
        }),   
    ],


    pages:{
        signIn: "/login"
    },



    session:{
        strategy: "jwt",
    },


    secret: process.env.NEXTAUTH_SECRET,


    callbacks: {


        async session({ session, token }) {
          if(token){
            session.user._id = token._id;
          }
          return session 
        },



        async jwt({ token, user }) {
        if(user){
            token._id = user._id;
        }
        return token;
        }


    }
}



