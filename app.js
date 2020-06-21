var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended : true}));
var order =[
		{ item : "Paneer-Tikka", customer : "Azad" },
		{ item : "Chicken", customer : "Thushar" },
		{ item : "Tandoori", customer : "Banu" },
		{ item : "Vodka", customer : "Harshit" }
	];
app.use(express.static("public"));
app.get("/",function(req,res){
	res.render("home.ejs");
})
app.get("/thushar",function(req,res){
	res.send("This is my new route hope you like it!!");
})
app.post("/addOrder",function(req,res){
	var neworder = req.body.newOrder;
	var newcustomer = req.body.newCustomer;
	var obj = {item : neworder,customer : newcustomer};
	order.push(obj);
	res.redirect("/register");
})
app.get("/order/:item",function(req,res){
	var food = req.params.item;
	res.render("comments.ejs",{food : food});
})

app.get("/register",function(req,res){
	res.render("register.ejs",{register : order});
})

app.get("*",function(req,res){
	res.send("Get out of my restaurent!!");
})

app.listen(process.env.PORT,process.env.ID, function(){
	console.log("The website is running!!");
})