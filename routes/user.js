const express = require("express");
const { updateUserProfile } = require("../controllers/user");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/update").post(protect, updateUserProfile);

module.exports = router;
