import { z } from "zod";


export const SignUpSchema = z.object({
    username: z.string().min(3,"Username must be at least 3 characters").max(10,"Username must be less than 10 characters").regex(/^[a-zA-Z0-9]+$/,"Username must contain only letters and numbers"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6,"Password must be at least 6 characters").max(12,"Password must be less than 12 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"),
});



