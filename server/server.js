import * as dotenv from "dotenv";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/users.js";
import tripRoutes from "./routes/tripRoute.js";

dotenv.config();

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
); //(express docs: built-in middleware function in Express. It parses incoming requests with urlencoded payloads (data to be trasmitted) and is based on body-parser.)
const port = process.env.PORT || 5000;
app.use(cors());

// app.use("/users", router);
app.use("/test", router);
// app.use("/api/trips", tripRoutes); //DELETE

app.listen(port, () => console.log(`Server started on port ${port}`));

mongoose
  .connect(process.env.DB)
  //   .connect(process.env.OTHER)
  .then(() =>
    console.log("Mongo DB connected...server running on port: " + port)
  )
  .catch((error) => console.log("error connecting to mongoDB", error));
