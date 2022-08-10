import mongoose from "mongoose";

const dogSchema = mongoose.Schema({
  name: String,
  description: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0
  },
});
const DogModal = mongoose.model("Dog", dogSchema);

export default DogModal;