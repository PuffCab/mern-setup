import express from "express";
import testDataModel from "../models/testDataModel.js";
const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send({ msg: "test route" });
// });

// router.get("/all", (req, res) => {
//   TestData.find({}, function (err, users) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(users);
//     }
//   });
// });

router.get("/all", (req, res) => {
  //   res.send({ msg: "test alllll" });

  testDataModel
    .find({ test: "something" })
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// router.get("/all", async (req, res) => {
//   try {
//     const testData = await testDataModel.find();
//     res.status(200).json(testData);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

export default router;
