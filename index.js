require("dotenv").config();
const server = require("./server");

const PORT = process.env.PORT || 3225;

server.listen(PORT, () => {
  console.log(`\n Listening in port ${PORT}`.bgBlue);
});
