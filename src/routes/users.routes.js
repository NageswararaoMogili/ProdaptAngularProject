const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.controller');
// Create a new user
router.post('/adduser', userController.create);
router.get("/finduser/:id", userController.findById)
router.post("/updateuser/:id", userController.update)
module.exports = router