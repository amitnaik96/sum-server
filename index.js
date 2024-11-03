//Deploying in AWS ec2
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors());

const todos = [{
    id : 1,
    title : "Go to gym",
    description : "hit the gym mate"
},{
    id : 2,
    title : "Drink water",
    description : "drink water mate"
},{
    id : 3,
    title : "Study",
    description : "study mate"
},{
    id : 4,
    title : "learn backend",
    description : "learn backend mate"
},{
    id : 5,
    title : "AWS",
    description : "learn AWS mate"
}];

app.get("/todos", (req, res) => {
    const len = Math.floor((Math.random()*5));
    const filtredTodos = todos.slice(0, len);
    res.json({
        todos : filtredTodos
    });
})

// http://localhost:8080/sum?a=2&b=3
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.json({
        sum
    })
});

app.listen(8080);