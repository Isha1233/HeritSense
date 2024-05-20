const User=require("../models/user-model");
const bcrypt = require('bcryptjs');


//route for home
const home = async(req,res)=>{
    try{
            res.status(200).json("welcom to the controllers home page")
        }
    catch(error){
        console.log(error);
    }
};

//route for register
    const register = async (req,res)=>{
        try{ 
            console.log(req.body);
            const {username, email, phone, password}=req.body;
            
            const userExist=await User.findOne({email:email});

            if(userExist){
                return res.status(400).json({message:"email already exists"});
            }
 //hash pass
//  const saltRound =10;
//  const hash_password =await bcrypt.hash(password, saltRound);        

         const userCreated=await User.create({
            username,
            email,
            phone,
            password,
        });

            res.status(201).json({
                msg: "registration sucessfull",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });
            }
        catch(error){
            res.status(500).json("internal server");
        }
    };


    //login
    const login =async(req,res)=>{
        try{
          const {email, password}=req.body;
          const userExist =await User.findOne({email});
          console.log(userExist);
          if(!userExist){
            return res.status(400).json({message:"Invalid credential"})
          }

        //  const user =await bcrypt.compare(password, userExist.password);
        const user =await userExist.comparePassword(password);
        
        if(user){
            res.status(200).json({
                msg: "login sucessfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({message:"invalid email or passeord"})
        }
          
        }catch(error){
            res.status(500).json("intenal server error");
        }
    } 

    //to send data

    const user = async(req,res)=>{
        try{
            const userData=req.user;
            console.log(userData);
       return res.status(200).json({userData});
       
        }catch(error){
            console.log(`error from the user root ${error}`)
        }
    }


module.exports = { home, register, login, user};
    
