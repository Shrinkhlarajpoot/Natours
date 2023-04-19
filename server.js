const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    // useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB connection successful');
    const tourSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,"A tour must have a name"],
            unique:true
        },
        rating:{
            type:Number,
            default:4.5
        },
        price:{
            type:Number,
            required:[true,"A tour must have a price"]
        }
    
    });
    const Tour = mongoose.model('Tour',tourSchema);
    
    const testTour = new Tour({
        name:"The Part Camper-2",
        price:500
    })
    testTour.save().then(doc=>{
        console.log(doc)
    }).catch(err=>{
        console.log(`Error occured ${err}`)
    })
  });


//Server starting
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App start running successfully 😁');
});


