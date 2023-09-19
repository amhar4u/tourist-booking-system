const mongoose = require('mongoose');

const dburi = "mongodb+srv://amhar:WlI1TceAQMvjCr3s@atlascluster.e0kzux8.mongodb.net/";

mongoose.connect(dburi, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("connection success");
});