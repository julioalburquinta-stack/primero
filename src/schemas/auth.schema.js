import {z} from "zod";

export const registerSchema = z.object({
username: z.string({
    requiered_error: 'Username is required',
}),
email: z.string({
    requiered_error: 'Email is requiered',
}).email({
    message: 'invalid email',
}),
password: z.string({
    requiered_error: 'Password is required',
}).min(6, {
    message:'Password must be at least 6 characters',
}),
});

export const loginSchema = z.object({
    email: z
        .string({
            requiered_error: 'Email is requiered',
        })
        .email({
            message: "invalid email",
        }),
        password: z
        .string({
            requiered_error: 'Password is requiered',    
        })
        .min(6, {
            message: "Password must be at least 6 characters",
        }),
});