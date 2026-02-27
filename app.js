const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectMongo = require("./db/mongo");

const app = express();

app.use(cors());
app.use(express.json());

// connect DB
connectMongo();

// routes
const assignmentRoutes = require("./routes/assignmentRoutes");
const queryRoutes = require("./routes/queryRoutes");
app.use("/api", assignmentRoutes);
app.use("/api", queryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});