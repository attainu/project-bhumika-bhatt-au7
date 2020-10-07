import path from "path";
import http from "http";

import express, { urlencoded, json } from "express";
import socketIO from "socket.io";
import cors from "cors";
import "dotenv/config";

// Database config
import "./configs/dbConnection";

// Routes
import {
  signupRoute,
  loginRoute,
  profileRoute,
  postRoute,
  otherUserRoute,
} from "./routes";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

// Server port
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/profile", profileRoute);
app.use("/posts", postRoute);
app.use("/user", otherUserRoute);

// Homepage
app.use("/", (req, res) => {
  res.send("connect-x server home");
});

// Socket IO
const io = socketIO(server);

io.on("connect", (socket) => {
  socket.on("room", (id) => {
    socket.join(id);

    socket.on("text", (text) => {
      io.to(id).emit("message", text);
    });
  });
});
