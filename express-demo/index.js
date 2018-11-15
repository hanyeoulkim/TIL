const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("HappyHacking");
});

app.get("/api", (req, res) => {
    const data ={
        ceo: "Han",
        director: "Kim",
        intern: "Yeoul",
        partner: "Joe",
    };
    res.send(data);
});

app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id);
});

app.get("/api/posts/:year", (req, res) => {
    res.send(req.query);
});

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));