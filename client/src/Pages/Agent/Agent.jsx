import React, { useState } from "react";
import "../../assets/style/signUp.css";
import { useFormik } from "formik";
import agentSchema from "../../Schema/agentSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Agent() {
  const navigate = useNavigate();

  const onSubmit = async (value, actions) => {
    try {
      console.log(value);
      await axios.post("http://localhost:5000/api/sign-up", value);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
      level: "",
      linkedin: "",
      twitter: "",
      instagram: "",
      facebook: "",
    },
    validationSchema: agentSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <>
      <h4 className="form-title text-[purple] mb-5 text-bold">
        Register As BThome Agent
      </h4>

      <main className="mb-5 sign-up-main">
        <form action="/add-agent" method="post" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="input-box">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="input-box">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="input-box">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={values.linkedin}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              value={values.twitter}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              name="facebook"
              id="facebook"
              value={values.facebook}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              value={values.instagram}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">level</label>
            <select
              id="Level"
              name="level"
              value={values.level}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Entry">Entry</option>
              <option value="Intermidiate" onChange={handleChange}>
                Intermidiate
              </option>
              <option value="Experienced" onChange={handleChange}>
                Experienced
              </option>
            </select>
          </div>
          <div className="input-box">
            <input type="submit" value="Register As Agent" />
          </div>
        </form>
      </main>
    </>
  );
}

export default Agent;
