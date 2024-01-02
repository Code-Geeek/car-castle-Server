require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./Routes/router')
require('./DB/connection')


const cc_Server = express()
// Increase the limit for JSON payloads
cc_Server.use(express.json({ limit: '10mb' }));

// Increase the limit for URL-encoded payloads (form data)
cc_Server.use(express.urlencoded({ extended: true, limit: '10mb' }));

cc_Server.use(cors())
cc_Server.use(express.json())

cc_Server.use(routes)

const PORT = 3000 || process.env.PORT

cc_Server.listen(PORT,()=>{
    console.log(`Car Castle server started at port ${PORT}  and waiting for client request!`);
})

cc_Server.get('/',(req,res)=>{
    res.send(`<h1>car castle server started and waiting for client request!!</h1>`)
})