import { MicrosoftProfile, RoomData } from "./../interfaces/RoomData";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

var RoomData: RoomData[] = [];

app.use(express.json());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("enqueue", async ({ ...roomObject }) => {
    socket.join(roomObject.roomId);
    console.log(roomObject);

    console.log("------------------------");
    console.log("Room ID: " + roomObject.roomId);
    console.log("Username: " + roomObject.displayName);
    console.log("UserID: " + roomObject.id);
    const sockets = await io.in(roomObject.roomId).fetchSockets();
    console.log("Number of users in room: " + sockets.length);

    socket.to(roomObject.roomId).emit("check_queue");

    if (
      RoomData.filter((item) => item.roomId === roomObject.roomId).length === 0
    ) {
      RoomData.push({
        roomId: roomObject.roomId,
        data: [
          {
            queue: sockets.length,
            user: roomObject as MicrosoftProfile,
          },
        ],
      });
    } else {
      RoomData.map((item) => {
        if (item.roomId === roomObject.roomId) {
          return item.data.push({
            queue: sockets.length,
            user: roomObject as MicrosoftProfile,
          });
        }
      });
    }
  });

  socket.on("dequeue", async ({ ...roomObject }) => {
    try {
      socket.leave(roomObject.roomId);
      console.log("User left room: " + roomObject.id);
      var target_index = 0;

      // find index of target
      RoomData.map((item) => {
        if (item.roomId === roomObject.roomId) {
          return item.data.map((item, index) => {
            if (item.user.id === roomObject.id) {
              return (target_index = index);
            }
          });
        }
      });

      // delete target
      RoomData.map((item) => {
        if (item.roomId === roomObject.roomId) {
          return (item.data = item.data.filter((item, inedx) => {
            return item.user.id !== roomObject.id;
          }));
        }
      });

      // delete room
      if (
        RoomData.filter((item) => item.roomId === roomObject.roomId).length ===
        0
      ) {
        RoomData = RoomData.filter((item) => item.roomId !== roomObject.roomId);
      }

      // decrement queue
      if (target_index != 0) {
        RoomData.map((item) => {
          if (item.roomId === roomObject.roomId) {
            return item.data.map((item) => {
              if (item.queue > target_index) {
                return item.queue--;
              }
            });
          }
        });
      }

      socket.to(roomObject.roomId).emit("check_queue");
    } catch (e) {
      console.log("[error]", "leave room :", e);
      socket.emit("error", "couldnt perform requested action");
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.post("/api/token", (req, res) => {
  const token = jwt.sign({ ...req.body }, process.env.JWT_SECRET as string, {
    expiresIn: "24h",
  });

  res.json({ token });
});

app.get("/api/room", (req, res) => {
  res.json(RoomData.filter((item) => item.roomId === req.query.roomId)[0]);
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
