const express=require('express')
const mongoose=require('mongoose') 
const cors=require('cors')
const { BeachModel,LakeModel,IconicCityModel, HillsideResortModel,DateModel,BookModel} = require('./models/schema');



const app = express()
app.use(express.json())
app.use(cors())
async function connectdb(){
  try{
await mongoose.connect("mongodb+srv://srishahithya:shahi@cluster0.omj1ghz.mongodb.net/Booking?retryWrites=true&w=majority&appName=Cluster0");
console.log("db connnection success")
         const x= 4000;
         app.listen(x,function(){
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();


app.post('/addbeaches', async (req, res) => {
  try {
      const { image, name, description, price } = req.body;
      
      const beach = new BeachModel({
          image,
          name,
          description,
          price
      });
      await beach.save();
      res.status(201).json({ message: "Beaches added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/getallbeaches', async (req, res) => {
    try {
      const beaches = await BeachModel.find();
      res.json(beaches);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post('/addlakeplaces', async (req, res) => {
    try {
        const { image, name, description, type, price } = req.body;
        
        const lakePlace = new LakeModel({
            image,
            name,
            description,
            type,
            price
        });
        await lakePlace.save();
        res.status(201).json({ message: "Lake place added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  app.get('/getalllakeplaces', async (req, res) => {
    try {
      const lakePlaces = await LakeModel.find();
      res.json(lakePlaces);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.post('/addiconiccity', async (req, res) => {
  try {
      const { image, name, description, price } = req.body;
      const iconicCity = new IconicCityModel({ image, name, description, price });
      await iconicCity.save();
      res.status(201).json({ message: "Iconic city added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Get all iconic cities
app.get('/getalliconiccities', async (req, res) => {
  try {
      const iconicCities = await IconicCityModel.find();
      res.json(iconicCities);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
app.post('/addhillsideresort', async (req, res) => {
  try {
    const { image, name, location, price } = req.body;
    const hillsideResort = new HillsideResortModel({ image, name, location, price });
    await hillsideResort.save();
    res.status(201).json({ message: "Hillside resort added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all hillside resorts
app.get('/getallhillsideresorts', async (req, res) => {
  try {
    const hillsideResorts = await HillsideResortModel.find();
    res.json(hillsideResorts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





  app.post('/adddates', async (req, res) => {
    try {
        const { date } = req.body;
        
        if (!date) {
            return res.status(400).json({ message: "Date is required" });
        }

        const newDate = new DateModel({ date });
        await newDate.save();
        res.status(201).json({ message: "Date added successfully" });
    } catch (error) {
        console.error('Error adding date:', error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.get('/getalldates', async (req, res) => {
  try {
    const dates = await DateModel.find();
    res.json(dates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/addbookings', async (req, res) => {
  try {
      const { firstName, lastName, email, roomType, checkInDate, checkOutDate, checkInTime, checkOutTime, guests } = req.body;
      
      const booking = new BookModel({
        firstName,
        lastName,
        email,
        roomType,
        checkInDate,
        checkOutDate,
        checkInTime,
        checkOutTime,
        guests
      });
      await booking.save();
      res.status(201).json({ message: "Booking added successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
  }
});  

