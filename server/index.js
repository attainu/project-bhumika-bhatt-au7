import express, { urlencoded, json } from "express";
import cors from "cors";
import "dotenv/config";

// Database config
import "./configs/dbConnection";

// Routes
import { signupRoute, profileRoute } from "./routes";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.use("/signup", signupRoute);
app.use("/profile", profileRoute);

// Homepage
app.use("/", (req, res) => {
  res.send("connect-x server homepage!");
});
