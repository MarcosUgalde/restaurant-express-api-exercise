const router = require("express").Router();

const platesRoutes = require("./plates");
// const ordersRoutes = require("./orders");
router.use("/plates", platesRoutes);

module.exports = router;
