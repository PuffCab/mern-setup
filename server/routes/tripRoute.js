import express from "express";
import Trip from "../models/tripModel.js";
// import tripModel from "../models/tripModel.js";

const router = express.Router();

router.get("/all", (req, res) => {
  //   tripModel
  Trip.find()
    .then((files) => {
      res.send(files);
    })
    .catch((error) => console.log(error));
});

export default router;
