import mongoose from "mongoose";
// const { Schema } = mongoose;

const testSchema = new mongoose.Schema({
  //   testName: {
  //     type: String,
  //     required: true,
  //     min: 3,
  //     max: 10,
  //     unique: true,
  //   },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const TestData = mongoose.model("TestData", testSchema);
export default TestData;

// const Test = mongoose.model("Test", testSchema);
// export default Test;  //REVIEW para trabajar con database :testing coleccion: tests
