const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const dotenvExpand = requrie('dotenv-expand');
dotenvExpand(require('dotenv').config());

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT);
// eslint-disable-next-line
console.log('Server started 🚀');
