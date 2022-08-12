import mongoose from "mongoose";

const dogSchema = mongoose.Schema({
  dogName: String,
  description: String,
  tags: [String],
  imageFile: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const DogModal = mongoose.model("Dog", dogSchema);

export default DogModal;