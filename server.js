const express = require("express");
const routes = require("./routes/userRoutes")
const requestHandler = require("./middleware/requestHander")



const app = express();
app.use(express.json());
// app.use(requestHandler)
app.set('trust proxy', true);

app.use("/api", routes)


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log("listening on port " + port);
})

// fb1ec7b5f8132f84ba6469134cbdc4ad
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;