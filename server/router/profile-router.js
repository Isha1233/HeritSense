const express=require('express');
const router=express.Router();
const profileFrm=require("../controllers/profile-controller");
router.route("/profile").post(profileFrm.profileForm);
router.route("/service").get(profileFrm.services);
router.route('/getUserProfile').get(profileFrm.getUserProfile);
module.exports=router;