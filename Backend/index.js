import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookrouter from "./route/book.route.js";
import cors from "cors";
import userrouter from "./route/user.route.js";

const app = express();

app.use(cors());

//Parse data into json
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const MongodbURI = process.env.MongoDBURI;
//connect to mongodb
try {
  mongoose.connect(MongodbURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Defining routes

app.use("/book", bookrouter);

//user route
app.use("/user", userrouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
