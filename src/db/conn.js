const mongoose = require('mongoose');
//creating database
mongoose.connect('mongodb://localhost:27017/mydynamic', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection successful");
}).catch(error=>{
    console.log(error);
});
mongoose.volunteer=mongoose.createConnection('mongodb://localhost:27017/volunteers',{
     useNewUrlParser: true, 
    useUnifiedTopology: true
})
module.exports=mongoose;
