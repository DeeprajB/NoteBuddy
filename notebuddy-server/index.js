const express = require("express");

if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

const connectToDb = require("./db/mongoose");

const noteRouter = require("./routers/note-routers.js");

const app = express();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

connectToDb();

app.use(noteRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`NoteBuddy Server running on port ${port}`);
});