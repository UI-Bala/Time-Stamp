let express=require("express");
let fs=require("fs");
let path=require("path");
let pathDir=path.join(__dirname,"timestamp");

let app=express();

app.get("/time-sample",(req,res)=>{
    let date=new Date();
    const timeStamp=date.toUTCString().slice(0,-3);
    fs.writeFileSync(`${pathDir}/time-stamp.txt`,timeStamp,(err)=>{
        if(err){
            res.send("Error")
        }
       
    })
    

    res.sendFile(path.join(pathDir,"time-stamp.txt"))
})

app.listen(9090,(()=>console.log("The App is Starting")))

