import mongoose , {Schema, Document} from "mongoose";


export interface ISignupUser extends Document {
    username: string;
    email: string;
    password: string;
    Vcode: string;
    VcodeExpiry: Date;
    isVerified: boolean;
}


const SignupUserSchema: Schema<ISignupUser> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
         nique: true
        },
    email: {
        type: String, 
        required: [true, "Email is required"],
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ],
        unique: true
        },

    password: {
        type: String, 
        required: [true, "Password is required"],
        },

    Vcode: {    
        type: String,
        required: [true, "Vcode is required"],
        },

    VcodeExpiry: {
        type: Date,
        required: [true, "VcodeExpiry is required"],
        },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
        },
}); 


const SignupUser = (mongoose.models.SignupUser as mongoose.Model<ISignupUser> || mongoose.model<ISignupUser>("SignupUser", SignupUserSchema));

export default SignupUser;



// create a interface and then create a model from the interface and the schema
// mongoose.models.SignupUser as mongoose.Model<ISignupUser> this is used to avoid the error of the model already exists
//  mongoose.model<ISignupUser>("SignupUser", SignupUserSchema) this is used to create a model from the interface and the schema    



