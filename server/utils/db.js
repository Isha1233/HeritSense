
const mongoose =require('mongoose');
 
const URI= process.env.MONGO_URI;

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connction successful to DB");
    }catch(error){
        console.error("database conncetion failed");
        process.exit(0);
    }
};

module.exports = connectDb;


//ishac182003
//WatchMe@98*
//mongodb+srv://ishac182003:WatchMe@98*@cluster0.iedyisv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

