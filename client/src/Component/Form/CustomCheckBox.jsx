import React from "react";
import { useField } from "formik";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <>
      <div>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accep privacyt and policy terms</span>
      </div>
      {meta.touched && meta.error && <div className="error">${meta.error}</div>}
    </>
  );
}

export default CustomCheckBox;
