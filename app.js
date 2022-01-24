const express = require ("express");
const connectDB = require ("./config/db");
const cors = require("cors")
const books = require("./routes/api/books")

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true}))

app.use(express.json({extend : false}))


app.get("/", (req, res)=> res.send("hello world"));


app.use("/api/books", books)

const port = process.env.port || 8082;

app.listen(port, ()=>console.log(`server is up and running on port ${port}`))