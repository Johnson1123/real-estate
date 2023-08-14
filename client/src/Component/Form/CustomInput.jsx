import React from "react";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="w-[70%] flex flex-col gap-2">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "input-error h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            : "h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
        }
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomInput;
