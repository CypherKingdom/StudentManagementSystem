import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "./StudentForm";

const EditStudent = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  
  const { id } = useParams();
  const navigate = useNavigate();

  // onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(`http://localhost:4000/students/students/${id}`, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          navigate("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(`http://localhost:4000/students/update-student/${id}`)
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Return student form
  return (
    <StudentForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Student
    </StudentForm>
  );
};

// Export EditStudent Component
export default EditStudent;
