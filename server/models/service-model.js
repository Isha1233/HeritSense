const {Schema,model}=require("mongoose");


    const serviceSchema = new Schema({
        name: { type: String, required: true },
        picture: { type: String, required: true },
        growth_time: {
          months: { type: Number, required: true },
          weeks: { type: Number, required: true }
        }
      });
      
const Service= new model("Service", serviceSchema);

module.exports=Service;
