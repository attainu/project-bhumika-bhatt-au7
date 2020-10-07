import { createServer } from "http";

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
import { set } from "mongoose";

const app = express();
const server = createServer(app);
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Server port
const PORT = process.env.PORT || 5000;
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
const online = [];

io.on("connect", (socket) => {
  socket.on("room", (room) => {
    socket.join(room);

    socket.on("text", (data) => {
      console.log(data);
      io.to(room).emit("message", data);
    });
  });

  socket.on("online", (id) => {
    socket.join("online");
    online.push(id);
    io.to("online").emit("live", [...new Set(online)]);
  });
});
