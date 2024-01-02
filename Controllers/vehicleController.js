const { default: mongoose } = require("mongoose");
const vehicles = require("../Models/vehicleModel");
const jwt = require("jsonwebtoken");

// registration of user

exports.registerVehicle = async (req, res) => {
  console.log("inside vehicle register controller");
  const { image,modelname, regnumber, color, mode, engine,amount,vehicletype} = req.body;
  try {
    const existingVehicle = await vehicles.findOne({ regnumber });
    if (existingVehicle) {
      res.status(406).json("Vehicle already Registered!");
    } else {
      const newVehicle = new vehicles({
        image,
        modelname,
        regnumber,
        color,
        mode,
        engine,
        amount,
        vehicletype
      });
      await newVehicle.save();
      res.status(200).json(newVehicle);
    }
  } catch (err) {
    res.status(401).json(`Vehicle Registration Failed : ${err}`);
  }
};

// get all vehicles

exports.vehicleDetails = async (req, res) => {
  try {
    const allvehicleDetails = await vehicles.find();
    res.status(200).json(allvehicleDetails);
  } catch (err) {
    res.status(401).json(err);
  }
};
