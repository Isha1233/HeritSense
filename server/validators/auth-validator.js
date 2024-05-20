const {z} = require('zod');

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be at least of 3 charecters"})
    .max(255,{message: "Name must not be at most of 255 charecters"}),

    
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message: "email  must be at least of 3 charecters"})
    .max(255,{message: "email must not be at most of 255 charecters"}),
    

    phone: z
    .string({required_error: "phone is required"})
    .trim()
    .min(10,{message: "phone must be at least of 3 charecters"})
    .max(20,{message: "phone must not be at most of 255 charecters"}),

    
    password: z
    .string({required_error: "password is required"})
    .min(7,{message: "password must be at least of 3 charecters"})
    .max(1024,{message: "password must not be at most of 255 charecters"}),

});

const signinSchema = z.object({
   
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message: "email  must be at least of 3 charecters"})
    .max(255,{message: "email must not be at most of 255 charecters"}),
    
    password: z
    .string({required_error: "password is required"})
    .min(7,{message: "password must be at least of 3 charecters"})
    .max(1024,{message: "password must not be at most of 255 charecters"}),

});



module.exports= {signupSchema,signinSchema};
 