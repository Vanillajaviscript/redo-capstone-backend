import mongoose from "mongoose";

const dogSchema = mongoose.Schema({
  name: String,
  dogName: String,
  description: String,
  tags: [String],
  imageFile: String,
  creator: String,
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