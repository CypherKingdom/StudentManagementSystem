# Student Management System

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing student records. This application allows users to create, read, update, and delete student information through a clean and responsive user interface.

## Features

- Create new student records with name, email, and roll number
- View a list of all students in the database
- Edit existing student information
- Delete student records
- Form validation using Formik and Yup

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Bootstrap for UI components
- Formik and Yup for form handling and validation
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- Mongoose ODM for data modeling

## Project Structure

- `/my-app` - Frontend React application
  - `/src/Components` - React components
  - `/src/App.js` - Main application component
- `/backend` - Express server
  - `/models` - Mongoose data models
  - `/routes` - API routes
  - `/database` - Database configuration

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node server.js
   ```
   Server will run on http://localhost:4000

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd my-app
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```
   Application will run on http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## API Endpoints

- `GET /students` - Get all students
- `GET /students/update-student/:id` - Get a specific student
- `POST /students/students` - Create a new student
- `PUT /students/students/:id` - Update a student
- `DELETE /students/students/:id` - Delete a student
