const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PlasmaRoutes = require("./routes/Plasma");
const hospitalRoutes = require("./routes/hospital");
const medsRoutes = require("./routes/meds");
const oxygenRoutes = require("./routes/oxygen");
const ambulanceRoutes = require("./routes/ambulance");
const cors = require("cors");

const PORT = 5000;

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
    res.send("backend is connected");
});

mongoose.connect(process.env.MONGO_URL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb is connected");
}).catch((err) => {
    console.log(err);
});

/* middleware */
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* routes */
app.use("/api", PlasmaRoutes);
app.use("/api", hospitalRoutes);
app.use("/api", medsRoutes);
app.use("/api", oxygenRoutes);
app.use("/api", ambulanceRoutes);

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
});
