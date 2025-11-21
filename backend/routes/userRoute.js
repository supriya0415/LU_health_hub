// import express from "express";
// import {
//   registerUser,
//   loginUser,
//   getProfile,
//   updateProfile,
//   bookAppointment,
//   listAppointment,
//   cancelAppointment,
//   paymentRazorpay,
//   verifyRazorpay,
// } from "../controllers/userController.js";
// import authUser from "../middlewares/authUser.js";
// import upload from "../middlewares/multer.js";

// const userRouter = express.Router();

// userRouter.post("/register", registerUser);
// userRouter.post("/login", loginUser);
// userRouter.get("/get-profile", authUser, getProfile);
// userRouter.post(
//   "/update-profile",
//   upload.single("image"),
//   authUser,
//   updateProfile
// );
// userRouter.post("/book-appointment", authUser, bookAppointment);
// userRouter.get("/appointments", authUser, listAppointment);
// userRouter.post("/cancel-appointment", authUser, cancelAppointment);
// userRouter.post("/payment-razorpay", authUser, paymentRazorpay);
// userRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

// export default userRouter;

import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  paymentRazorpay,
  verifyRazorpay,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/get-profile", authUser, getProfile);
router.post("/update-profile", authUser, upload.single("image"), updateProfile);
router.post("/book-appointment", authUser, bookAppointment);
router.get("/appointments", authUser, listAppointment);
router.post("/cancel-appointment", authUser, cancelAppointment);
router.post("/payment-razorpay", authUser, paymentRazorpay);
router.post("/verify-razorpay", authUser, verifyRazorpay);

export default router;
