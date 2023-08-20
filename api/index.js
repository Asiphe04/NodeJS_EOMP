const express = require("express");
const path = require("path");
// const app = express();
// const db = require("./config");
const bodyParser = require("body-parser");
// const port = +process.env.PORT || 3000;
const cors = require("cors");
const router = require("./routes/routes");
// init express
const app = express();

// use express json
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use cors
app.use(cors());

// use router
app.use(router);

app.get("/", function (req, res) {
  res.json({ message: "Welcome to Asiphe Ndimlana and Mufuniwa's api" });
});

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
