import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import propertySchema from "../../Schema/propertySchema";

function Property() {
  const onSubmit = async (value, actions) => {
    await axios.post("http://localhost:5000/api", value);
  };

  const {
    values,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      title: "",
      note: "",
      price: "",
      discount: "",
      location: "",
      image: "",
      type: "",
      address: "",
    },
    validationSchema: propertySchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <>
      <h4 className="form-title  text-[purple] mb-2 text-bold">Add Property</h4>

      <main className="property-main mb-5">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="input-box">
            <label className="input-box">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Discount Price</label>
            <input
              type="text"
              name="discount"
              id="discount"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Property Type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Bungalow">Bungalow</option>
              <option value="Office">Office Space</option>
              <option value="Single">Single Room</option>
              <option value="Self">Self-con</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="">Decription</label>
            <textarea
              type="text"
              name="note"
              cols="40"
              rows="10"
              id="note"
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
          <div className="input-box">
            <label htmlFor="">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="input-box">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    </>
  );
}

export default Property;
