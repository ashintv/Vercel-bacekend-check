import express from "express"

const app = express()
app.use(express.json())
app.get("/main" , (req , res)=>{
        res.status(200).json({
                msge:'deployement succesfull'
        })
})



app.get("/", (req, res) => {res.send("Express on Vercel")});

// Don't call app.listen() yourself
module.exports =app