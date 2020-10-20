const express=require("express")
const helmet=require("helmet")
//const welcomeRouter=require("./welcome/welcome-Router")
const carRouter=require("./car/car-Router")
const server=express()
const port=process.env.PORT||5000
server.use(helmet())
server.use(express.json())
//server.use(welcomeRouter)
server.use(carRouter)
server.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({
        message:"something went wrong"
    })
})
server.listen(port,()=>{
    console.log(`Running at http://localhost:${port}`)
})