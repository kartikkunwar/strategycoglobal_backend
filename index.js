const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const PORT=7600;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async(req, res) => {
    const searchquery=req.query.q
    console.log(searchquery)
    try{
        const response=await fetch(`https://www.omdbapi.com/?apikey=3f8a2d27&s=${searchquery}`)
        const data=await response.json()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
  });

  app.get("/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)
    try{
        const single=await fetch(`https://www.omdbapi.com/?apikey=3f8a2d27&i=${id}`)
        const singledata=await single.json()
        res.send(singledata)
    }   
    catch(err){
        console.log(err)
    }  
  })

  app.listen(PORT, async () => {
    try {
      console.log("Welcome inside the backend zone of assignment");
    } catch (e) {
      console.log("Are you a Bot.");
  
      console.log(e.message);
    }
    console.log(`YOUR PORT IS WORKING PROPERLY`);
  });
