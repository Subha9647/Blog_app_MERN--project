import mongoose from "mongoose";

const mongoURI = "mongodb+srv://subhamondal:<password>@cluster0.odtndgn.mongodb.net/blog-mern-project";

const connectToMongo = async () => {
  const res = await mongoose.connect(mongoURI);
  if (res) {
    console.log("connected successfully");
  }
};

export default connectToMongo;
