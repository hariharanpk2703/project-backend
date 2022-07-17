const express = require ('express')
const HomeController = require('../components/homec');

const HomeRouter = express.Router()
HomeRouter.route("/Home")
.get(HomeController.apiController)
module.exports = HomeRouter