const io = require("./server").io;

module.exports = (socket) => {
  try {
    console.log("Connected");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (err) {
    console.log(err.message);
  }
};