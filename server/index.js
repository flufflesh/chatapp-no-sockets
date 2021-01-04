let express = require("express");
let app = express();
let cors = require("cors");
let helmet = require("helmet");
let roomMessages = {
  roomOne: [],
  roomTwo: [],
};
app.use(helmet());
app.use(express.json());
app.use(cors());
app.post("/send-message", (req, res) => {
  if (req.body.room == 1) {
    roomMessages.roomOne.push({
      name: req.body.name,
      message: req.body.message,
    });
    return res.status(200).end();
  }

  roomMessages.roomTwo.push({ name: req.body.name, message: req.body.message });
  return res.status(200).end();
});

app.get("/get-chat/:id", (req, res) => {
  if (req.params.id == 1) {
    return res.send(roomMessages.roomOne);
  }
  return res.json(roomMessages.roomTwo);
});
app.listen(2345, () => {
  console.log("listening on port 2345");
});
