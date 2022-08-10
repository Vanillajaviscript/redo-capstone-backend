import express from "express";
import DogModal from "../models/dogSchema.js";

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