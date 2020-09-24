import path from "path";

import express, { urlencoded, json } from "express";
import cors from "cors";
import "dotenv/config";

// Database config
import "./configs/dbConnection";

// Routes
import { signupRoute, loginRoute, profileRoute, postRoute } from "./routes";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/profile", profileRoute);
app.use("/posts", postRoute);

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.get("/authentication", (req, res) => {
  res.redirect("/");
});

// Invalid path handler
app.use((req, res) => {
  res.send(`<h1>Error 404! Path not found...<h1>`);
});
