const {Schema,model}=require('mongoose');

const profileSchema= new Schema({
    email:{
        type:String,
        require:true,
},
    password:{
        type:String,
        require:true,
},
    crop:{
             type:String,
             require:true,
    },
    day:{
        type:String,
        require:true,

    },
    month:{
        type:String,
        require:true,
    },
    year:{
        type:String,
        require:true,
    },
})
const Profile=new model("Profile",profileSchema);
module.exports=Profile;