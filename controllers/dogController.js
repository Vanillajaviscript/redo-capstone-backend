import express from "express";
import DogModal from "../models/dogSchema.js";
import mongoose from "mongoose";

export const createDog = async (req, res) => {
  const dog = req.body;
  const newDog = new DogModal({
    ...dog,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newDog.save();
    res.status(201).json(newDog);
  } catch (error) {
    res.status(404).json({ message: "Bad Request!" });
  }
};

export const getDogs = async (req, res) => {
 
  try {
    const dogs = await DogModal.find();
    res.status(200).json(dogs);

  } catch (error) {
    res.status(404).json({ message: "Bad Request!" });
  }
};

export const getDog = async (req, res) => {
 const {id} = req.params;
  try {
    const dog = await DogModal.findById(id);
    res.status(200).json(dog);

  } catch (error) {
    res.status(404).json({ message: "Bad Request!" });
  }
};

export const getDogsByUser = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message: "User does not exist"});
  };
  //gets all dogs based on who created them
  const userDogs = await DogModal.find({creator: id});
  res.status(200).json(userDogs);
};

export const deleteDog = async (req, res) => {
  const {id} = req.params;
  try {
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message: "No dogs exist"});
  }; 
  await DogModal.findByIdAndRemove(id);
  res.json({message: "Dog has been deleted successfully"});
  } catch(error) {
    res.status(404).json({message: "Error has occurred"});
  }
};

export const updateDog = async (req, res) => {
  const { id } = req.params;
  const { dogName, description, creator, imageFile, tags } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No dogs exist with this id: ${id}` });
    }

    const updatedDog = {
      creator,
      dogName,
      description,
      tags,
      imageFile,
      _id: id,
    };
    await DogModal.findByIdAndUpdate(id, updatedDog, { new: true });
    res.json(updatedDog);
  } catch (error) {
    res.status(404).json({ message: "Bad Request!" });
  }
};


