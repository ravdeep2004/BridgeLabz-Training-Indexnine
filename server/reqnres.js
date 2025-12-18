const express = require("express");
const app = express();

app.get("/user/:id", (req,res) => {
    res.send(req.params.id);
});

app.get("/search", (req,res) => {
    res.send(req.query);
});

app.post("/login", (req,res) => {
    res.send(req.body);
});
// res methods
res.send("Hello");
res.json({success : true});
res.status(201).send("Created");

app.get("/product/:id", (res,req) => {
    const id = req.params.id;
    const category = req.query.category;



res.json({
    productId : id,
    category : category
});

});