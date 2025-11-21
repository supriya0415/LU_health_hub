 
#  LU_Health_Hub Doctor Appointment Booking System

A full-stack web application built with the MERN stack to streamline doctor appointment scheduling for the University of Lucknow,Lucknow (LU) Health Center. Students can register, log in, book and manage appointments with on-campus doctors, while admins and doctors oversee schedules, patient data, and health center operations.

## Overview

This project provides a scalable and secure platform for managing doctor appointments at the LU Health Center. Key features include user authentication, appointment booking with slot availability, online payment integration via Razorpay, and role-based dashboards for patients, admins, and doctors. Developed using the MERN stack (MongoDB, Express.js, React, Node.js), the application emphasizes responsive design, secure data handling, and a modern UI tailored for a college health center.

## Features

- **Patient Features**:
  - Register and log in with secure authentication.
  - View doctor profiles, filter by specialty, and book appointments.
  - Manage appointments (view, cancel, pay online) and update personal profiles.
- **Admin Features**:
  - Manage doctor data, appointments, and patient records.
  - Cancel appointments and generate reports via a comprehensive dashboard.
- **Doctor Features**:
  - View and manage appointments, mark as completed, or cancel.
  - Update profile details (e.g., fees, availability) via a dedicated dashboard.
- **General Features**:
  - Responsive UI with Tailwind CSS for cross-device compatibility.
  - Online payment processing with Razorpay.
  - Secure data storage with MongoDB Atlas and Cloudinary for images.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Tailwind CSS
  - Axios (HTTP requests)
  - react-toastify (notifications)
- **Backend**:
  - Node.js
  - Express.js
  - Mongoose (MongoDB ORM)
  - bcrypt (password hashing)
  - jsonwebtoken (JWT authentication)
  - Razorpay (payment gateway)
  - Multer (file uploads)
  - Cloudinary (image storage)
  - CORS (cross-origin requests)
  - dotenv (environment variables)
  - Validator (input validation)
  - Nodemon (development server)
- **Database**: MongoDB (Atlas)
- **Tools**: Git, GitHub, npm

## Progress

### -> Project Setup and Frontend Foundation

- Initialized a MERN stack project with `create-react-app` and a Node.js backend.
- Set up a Git repository for version control.
- Created a frontend structure with a `Pages` folder for components (e.g., Homepage, Profile).
- Configured React Router for navigation and built a `Navbar` component.
- Implemented authentication state management with `useState` and React Context.
- Developed UI components (`Header`, specialty menu, footer) with CSS, enabling doctor data display and specialty filtering.

### -> Frontend Page Enhancements and Booking UI

- Created `Doctor Appointment`, `About`, `Contact`, `Login`, and `Patient Profile` pages.
- Built a booking interface with slot selection, date/time handling, and currency symbols.
- Added filtering for related doctors using `useEffect` and props.
- Designed responsive forms for login and profile editing, styled with Tailwind CSS.
- Structured `About` and `Contact` pages with enhanced layouts.

### -> Backend Setup and Database Integration

- Installed backend dependencies: `express`, `mongoose`, `multer`, `bcrypt`, `cloudinary`, `cors`, `dotenv`, `jsonwebtoken`, `nodemon`, `validator`.
- Set up an Express.js server with MongoDB Atlas connectivity.
- Defined `Doctor` and `User` models with `mongoose`.
- Created APIs for admin tasks (e.g., add doctor) and implemented file uploads with `multer` and `cloudinary`.
- Enhanced frontend responsiveness with a mobile menu and filter toggles.
- Secured admin login with JWT tokens and `bcrypt` password hashing.

### -> Admin Panel and Doctor Management

- Installed frontend dependencies: `axios`, `react-router-dom`, `react-toastify`, `tailwindcss`.
- Built an admin panel with a dashboard, sidebar, and routes for navigation.
- Implemented admin authentication with JWT tokens and login/logout functionality.
- Created an `Add Doctor` form with image uploads, integrated with backend APIs.
- Displayed a doctor list in the admin panel, styled with Tailwind CSS.

### -> Doctor Data Display and Patient Authentication

- Fetched and displayed doctor data on the frontend using `axios`.
- Implemented patient login/registration with JWT tokens, `bcrypt` hashing, and `validator` checks.
- Enabled doctor availability updates via API and frontend toggles.
- Enhanced patient profile management with image uploads and secure updates.
- Configured `react-toastify` for error notifications.

### -> Appointment Booking and Cancellation

- Updated patient profiles with optional image uploads using `multer` and `cloudinary`.
- Created an `Appointment` model and APIs for booking, saving data to MongoDB.
- Displayed booked appointments with formatted dates and statuses.
- Implemented appointment cancellation, updating doctor slots and showing cancellation history.

### -> Payment Integration and Admin Dashboard

- Installed `razorpay` for online payment processing.
- Integrated Razorpay with secure key storage in `.env`, enabling payment for appointments.
- Enhanced the admin panel to manage appointments, including cancellation and patient details.
- Built a comprehensive admin dashboard with metrics and recent appointments, styled with Tailwind CSS.

### -> Doctor Panel and Appointment Management

- Created a doctor panel with a dashboard for appointments and profile management.
- Implemented doctor authentication with JWT tokens and login/logout functionality.
- Enabled doctors to view, complete, or cancel appointments, with status-based UI toggles.
- Built a doctor dashboard with earnings and appointment metrics.
- Added profile editing for doctors (e.g., fees, availability) with image uploads.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
