const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser, getUserById } = require("../controller/getUsers");
const { updateUser } = require("../controller/updateUser");
const { deleteUser } = require("../controller/deleteUser");
const { rate, getRating} = require("../controller/rating");
//adminroutes
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.get("/getUserById/:id", getUserById);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
//employee routes
router.post('/rate', rate )
router.get('/getRating', getRating )

module.exports = router;
