const mongoose = require ('mongoose')
const connection_string = process.env.DB_CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB connected successfully with CC_Server");
}).catch((err)=>{
    console.log(err);
})