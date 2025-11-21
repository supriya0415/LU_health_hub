// import doctorModel from "../models/doctorModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import appointmentModel from "../models/appointmentModel.js";

// const changeAvailability = async (req, res) => {
//   try {
//     const { docId } = req.body;
//     const docData = await doctorModel.findById(docId);
//     await doctorModel.findByIdAndUpdate(docId, {
//       available: !docData.available,
//     });
//     res.json({ success: true, message: "Availability Changed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// const doctorList = async (req, res) => {
//   try {
//     const doctors = await doctorModel.find({}).select(["-password", "-email"]);
//     res.json({ success: true, doctors });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API for doctor login
// const loginDoctor = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const doctor = await doctorModel.findOne({ email });

//     if (!doctor) {
//       return res.json({ success: false, message: "Invalid Credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, doctor.password);

//     if (isMatch) {
//       const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);

//       res.json({ success: true, token });
//     } else {
//       res.json({ success: false, message: "Invalid Credentials" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API to get doctor appointments for doctor panel
// const appointmentsDoctor = async (req, res) => {
//   try {
//     const docId = req.docId;
//     const appointments = await appointmentModel.find({ docId });

//     res.json({ success: true, appointments });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API to mark appointment completed for doctor panel
// const appointmentComplete = async (req, res) => {
//   try {
//     const docId = req.docId;
//     const { appointmentId } = req.body;
//     const appointmentData = await appointmentModel.findById(appointmentId);

//     if (appointmentData && appointmentData.docId === docId) {
//       await appointmentModel.findByIdAndUpdate(appointmentId, {
//         isCompleted: true,
//       });

//       return res.json({ success: true, message: "Appointment Completed" });
//     } else {
//       return res.json({ success: false, message: "Mark Failed" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API to cancel appointment for doctor panel
// const appointmentCancel = async (req, res) => {
//   try {
//     const docId = req.docId;
//     const { appointmentId } = req.body;
//     const appointmentData = await appointmentModel.findById(appointmentId);

//     if (appointmentData && appointmentData.docId === docId) {
//       await appointmentModel.findByIdAndUpdate(appointmentId, {
//         cancelled: true,
//       });

//       return res.json({ success: true, message: "Appointment Cancelled" });
//     } else {
//       return res.json({ success: false, message: "Cancellation Failed" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API to get dashboard data for doctor panel
// const doctorDashboard = async (req, res) => {
//   try {
//     const docId = req.docId;
//     const appointments = await appointmentModel.find({ docId });

//     let earnings = 0;
//     appointments.map((item) => {
//       if (item.isCompleted || item.payment) {
//         earnings += item.amount;
//       }
//     });

//     let patients = []; //unique patients
//     appointments.map((item) => {
//       if (!patients.includes(item.userId)) {
//         patients.push(item.userId);
//       }
//     });

//     const dashData = {
//       earnings,
//       appointments: appointments.length,
//       patients: patients.length,
//       latestAppointments: appointments.reverse().slice(0, 5),
//     };

//     res.json({ success: true, dashData });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API to get doctor profile for doctor panel
// const doctorProfile = async (req, res) => {
//   try {
//     const docId = req.docId;
//     const profileData = await doctorModel.findById(docId).select("-password");

//     res.json({ success: true, profileData });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //API to update profile data from doctor panel
// const updateDoctorProfile = async (req, res) => {
//   try {
//     const docId = req.docId;
//     const { fees, address, available } = req.body;

//     await doctorModel.findByIdAndUpdate(docId, { fees, address, available });

//     res.json({ success: true, message: "Profile Updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export {
//   changeAvailability,
//   doctorList,
//   loginDoctor,
//   appointmentsDoctor,
//   appointmentCancel,
//   appointmentComplete,
//   doctorDashboard,
//   doctorProfile,
//   updateDoctorProfile,
// };


import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

// ================================
// CHANGE AVAILABILITY
// ================================
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);

    if (!docData) {
      return res.json({ success: false, message: "Doctor not found" });
    }

    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });

    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// PUBLIC DOCTOR LIST
// ================================
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel
      .find({})
      .select(["-password", "-email"]);

    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// DOCTOR LOGIN
// ================================
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: doctor._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// APPOINTMENTS FOR DOCTOR PANEL
// ================================
const appointmentsDoctor = async (req, res) => {
  try {
    const docId = req.docId;
    const appointments = await appointmentModel.find({ docId });

    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// COMPLETE APPOINTMENT
// ================================
const appointmentComplete = async (req, res) => {
  try {
    const docId = req.docId;
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (
      appointmentData &&
      appointmentData.docId.toString() === docId
    ) {

      await appointmentModel.findByIdAndUpdate(appointmentId, {
        isCompleted: true,
      });

      return res.json({ success: true, message: "Appointment Completed" });
    }

    res.json({ success: false, message: "Mark Failed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// CANCEL APPOINTMENT (DOCTOR PANEL)
// ================================
const appointmentCancel = async (req, res) => {
  try {
    const docId = req.docId;
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (
      appointmentData &&
      appointmentData.docId.toString() === docId
    ) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        cancelled: true,
      });

      // restore doctor's slot
      const { slotDate, slotTime } = appointmentData;
      const doctor = await doctorModel.findById(docId);

      let slots_booked = doctor.slots_booked || {};
      if (!slots_booked[slotDate]) slots_booked[slotDate] = [];

      slots_booked[slotDate] = slots_booked[slotDate].filter(
        (t) => t !== slotTime
      );

      await doctorModel.findByIdAndUpdate(docId, { slots_booked });

      return res.json({ success: true, message: "Appointment Cancelled" });
    }

    res.json({ success: false, message: "Cancellation Failed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// DOCTOR DASHBOARD
// ================================
const doctorDashboard = async (req, res) => {
  try {
    const docId = req.docId;
    const appointments = await appointmentModel.find({ docId });

    let earnings = 0;
    appointments.forEach((item) => {
      if (item.isCompleted && item.payment === true) {
        earnings += item.amount;
      }
    });

    const patients = [...new Set(appointments.map(a => a.userId))];

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: [...appointments].reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// DOCTOR PROFILE
// ================================
const doctorProfile = async (req, res) => {
  try {
    const docId = req.docId;
    const profileData = await doctorModel
      .findById(docId)
      .select("-password");

    res.json({ success: true, profileData });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ================================
// UPDATE PROFILE
// ================================
const updateDoctorProfile = async (req, res) => {
  try {
    const docId = req.docId;
    const { fees, address, available } = req.body;

    let parsedAddress = address;
    try {
      parsedAddress = JSON.parse(address);
    } catch (_) {}

    await doctorModel.findByIdAndUpdate(docId, {
      fees,
      address: parsedAddress,
      available,
    });

    res.json({ success: true, message: "Profile Updated" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  changeAvailability,
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentCancel,
  appointmentComplete,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
};
