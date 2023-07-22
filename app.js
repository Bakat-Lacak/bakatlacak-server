require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/", express.static(__dirname + "/"));
app.use(router);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`App is listening on PORT: ${port}`);
});
