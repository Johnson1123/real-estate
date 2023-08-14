import React, { useState } from "react";
import "../../Pages/Dashboard/Dashboard.css";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import CustomCheckBox from "../../Component/Form/CustomCheckBox";
import { Formik, Form } from "formik";
import signUp from "../../Schema/signUp";
import CustomSelectBox from "../../Component/Form/CustomSelectBox";
import CustomInput from "../../Component/Form/CustomInput";
import CustomPassword from "../../Component/Form/CustomPassword";

const Login = () => {
  const [password, setPassword] = useState(false);
  const [userName, setUsername] = useState(false);
  return (
    <div className="w-[100%] min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-[24px] font-bold my-4">Login</h2>
      <Formik
        initialValues={{
          checkPolicy: "",
          country: "",
          userName: "",
          password: "",
        }}
        validationSchema={signUp}
      >
        <Form
          action=""
          className="w-[50%] flex justify-center items-center flex-col gap-5 mt-4"
        >
          <div className="w-[70%] flex flex-col gap-2">
            <label htmlFor="">UserName</label>
            <div className="in-div relative">
              <input
                type="text"
                name="username"
                id="username"
                className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
              />
            </div>
          </div>
          <CustomInput
            type="text"
            placeholder="userName"
            name="userName"
            label="userName"
          />
          {/* <div className="w-[70%] flex flex-col gap-3">
            <label htmlFor="">Password</label>
            <div className="in-div relative">
              <input
                type={password ? "text" : "password"}
                name="Password"
                id="Password"
                className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
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
          </div> */}
          <CustomPassword
            type={password ? "text" : "password"}
            setPassword={setPassword}
            placeholder="Password"
            password={password}
            label="password"
            name="password"
          />
          <div className="">
            <span className="text-[16px] text-blue-700 font-[400] ">
              <a href="">Login as Admin</a>
            </span>
            <span>or</span>
            <span>
              <a href="">Forget Password</a>
            </span>
          </div>
          <CustomSelectBox
            label="Country"
            name="country"
            placeholder="select country"
          >
            <option value="Canada">Canada</option>
            <option value="United State">United State</option>
            <option value="Uk">United Kingdom</option>
          </CustomSelectBox>
          {/* <input type="checkbox" name="" id="" /> */}
          <CustomCheckBox name="checkPolicy" type="checkbox" />
          <button className="bg-[purple] px-5 py-3 rounded-md text-white mt-4">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
