const express    =  require("express"),
      bodyParser =  require("body-parser"),
        app      =  express(),
     nodeMailer  =  require("nodemailer");

     require("dotenv").config();

     const transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
          user:"shubhamdogra076@gmail.com",
          pass:"jup!ter110"
        }


     })
    
    //  app configurations

      app.use(express.static("public"));
      app.use(bodyParser.urlencoded({extended:true}))
      app.set("view engine","ejs");


      // all routes

      app.get("/",(req,res)=>res.render("index"));
      app.get("/about-us",(req,res)=>res.render("aboutUs"));
      app.get("/services",(req,res)=>res.render("services"));
      app.get("/our-partners",(req,res)=>res.render("partners"));
      app.get("/contact-us",(req,res)=>res.render("contact"));
      app.get("/networking-infrastructure-and-security",(req,res)=>res.render("networking-infrastructure-and-security"))
      app.get("/voice-solutions",(req,res)=>res.render("voice-solutions"));
      app.get("/av-integration-and-boardroom-solutions",(req,res)=>res.render("av-integration-and-boardroom-solutions"))
      app.get("/wireless-solutions",(req,res)=>res.render("wireless-solutions"));



      app.post("/contact",(req,res)=>{

        let name=req.body.name;
        let email=req.body.emailid;
        let no = req.body.mobile;
        let query=req.body.comments;

        res.redirect("/contact-us");

        transporter.sendMail({
          to:"shubhamdogra112@gmail.com",
          from:"shubhamdogra076@gmail.com",
          subject:"Testing ",
          html:"<h3>"+name+"</h3>"+"<h2>"+email+"</h2>"+"<h2>"+no+"</h2>"+"<p>"+query+"</p>"



        },(err,res)=>{
          if(err){
            console.log("Something Went wrong")
            console.log(err)
            
          }
          else console.log(res);
        })



      })

      
    // listening of port

        const Port=process.env.PORT||3000
      app.listen(Port,()=>console.log("Server is running"));


      