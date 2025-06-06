import express from "express"

const app = express()
app.use(express.json())
app.get("/main" , (req , res)=>{
        res.status(200).json({
                msge:'deployement succesfull'
        })
})
module.exports = app