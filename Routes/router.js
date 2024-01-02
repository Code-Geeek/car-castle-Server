const express = require('express');
const router = new express.Router();
const userController=require("../Controllers/userController")
const vehicleController = require('../Controllers/vehicleController')

// login user
router.post("/login",userController.userLogin);

// register user
router.post("/register", userController.register);

// register vehicle
router.post("/register/vehicle", vehicleController.registerVehicle);

// get vehicle details
router.get("/view/vehicles", vehicleController.vehicleDetails);

module.exports = router;