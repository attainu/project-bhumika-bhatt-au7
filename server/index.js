import express, { urlencoded, json } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// Homepage
app.use("/", (req, res) => {
  res.send("connect-x server homepage!");
});
