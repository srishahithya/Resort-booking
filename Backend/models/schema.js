const mongoose=require('mongoose')


const BeachSchema=new mongoose.Schema({
    image : String,
    name : String,
    description :String,
    price: String  
    

})


const BeachModel=mongoose.model("beaches",BeachSchema)

const LakeSchema = new mongoose.Schema({
   image: String,
   name: String,
   description: String,
   type: String,
   price: String
});

const LakeModel = mongoose.model("lakes", LakeSchema);
const IconicCitySchema = new mongoose.Schema({
   image: String,
   name: String,
   description: String,
   price: String
});

const IconicCityModel = mongoose.model("iconicCities", IconicCitySchema);


const HillsideSchema = new mongoose.Schema({
   image: String,
   name: String,
   description: String,
   price: String
});

const HillsideResortModel = mongoose.model("hillside",HillsideSchema);



const DateSchema=new mongoose.Schema({
   date: String    

});

const DateModel=mongoose.model("dates",DateSchema)
const BookSchema=new mongoose.Schema({
   firstName: String,
    lastName: String,
    email: String,
    roomType: String,
    checkInDate:Date,
    checkOutDate:Date,
    checkInTime:String,
    checkOutTime: String,
    guests: String
     
 
 })
 


const BookModel=mongoose.model("books",BookSchema)

module.exports={BeachModel:BeachModel,
LakeModel:LakeModel,
 IconicCityModel:IconicCityModel,
DateModel:DateModel,
HillsideResortModel:HillsideResortModel,
BookModel:BookModel
};  