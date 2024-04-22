const express = require("express");
const cookeieParser = require('cookie-parser');
const UserRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');

require('dotenv').config()
const app = express();


// Regular Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Cookie middleware
app.use(cookeieParser());


app.use("/api",UserRouter);
app.use("/api",postRouter);
app.use("/api",commentRouter);

app.get("/", (req, res) => {
  res.send("Hi from Prisma Project.");
});


app.listen(4000, () => {
  console.log("[Server] running on port 4000");
});
