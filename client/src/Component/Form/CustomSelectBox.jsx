import React, { Children } from "react";
import { useField } from "formik";

function CustomSelectBox({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      ></select>
      {meta.touched && meta.error && <div className="error">${meta.error}</div>}
    </>
  );
}

export default CustomSelectBox;
