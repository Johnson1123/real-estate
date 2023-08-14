import React from "react";
import { useField } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function CustomPassword({ label, setPassword, password, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="w-[70%] flex flex-col gap-2">
      <label>{label}</label>
      <div className="in-div relative">
        <input
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error ? "input-error" : ""
          }  h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2`}
        />
        <span className="absolute top-[12px] right-4">
          {password ? (
            <AiOutlineEyeInvisible
              className="text-[#a0a0a0]"
              size={20}
              onClick={() => setPassword(!password)}
            />
          ) : (
            <AiOutlineEye
              className="text-[#a0a0a0]"
              size={20}
              onClick={() => setPassword(!password)}
            />
          )}
        </span>
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
export default CustomPassword;
