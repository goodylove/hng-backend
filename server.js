const express = require("express");
const routes = require("./routes/userRoutes")



const app = express();
app.use(express.json());
app.set('trust proxy', true);


app.use("/api", routes)
app.use("/*", (req, res) => {
    res.send("Welcome Hng Internship")
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("listening on port " + port);
})

