const mongoose= require("mongoose");
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    username:{
       type:String,
        require:true,
    },
    email:{
        type:String,
         require:true,
     },
     phone:{
        type:String,
         require:true,
     },
     password:{
        type:String,
         require:true,
     },
     isAdmin:{
        type: Boolean,
         require:false,
     },

});
//secure password with bcrypt  
//before saving the data taken by user and pass througn this function bcrypting is happeng here befor save data
userSchema.pre('save',async function(next){
 console.log("pre methood", this);

 const user=this;


 if(!user.isModified('password')){
    next();
 }

 try{
  const saltRound = await bcrypt.genSalt(10);
  const hash_password =await bcrypt.hash(user.password, saltRound);        
  user.password=hash_password;
}catch(error){
    next(error);
 }
});


//compare password
userSchema.methods.comparePassword=async function(password){
    return  bcrypt.compare(password, this.password);
}


//json web token :many no of fun and methods can be created by userSchema
userSchema.methods.generateToken= async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SELECT_KEY,
        {
            expiresIn:"30d",
        }
        );

    }catch(error){
        console.log(error);
    }
};


const User = new mongoose.model("User",userSchema);
module.exports=User;