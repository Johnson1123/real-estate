
import React, {  useState } from "react";
import "../../Pages/Dashboard/Dashboard.css";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ChangePassword = () => {
  const [oldPassword, setPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [conPassword, setConPassword] = useState(false);
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center flex-col">
      <h2 className="text-[24px] font-bold my-4">Change your Password</h2>
      <form
        action=""
        className="w-[50%] flex justify-center items-center flex-col gap-4 mt-4"
      >
        <div className="w-[80%] flex flex-col gap-2">
          <label htmlFor="">Old Password</label>
          <div className="in-div relative">
            <input
              type={oldPassword ? "text" : "password"}
              name="Opass"
              id="Opass"
              className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            />
            <span className="absolute top-[12px] right-4">
              {oldPassword ? (
                <AiOutlineEyeInvisible
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setPassword(!oldPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setPassword(!oldPassword)}
                />
              )}
            </span>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-2">
          <label htmlFor="">New Password</label>
          <div className="in-div relative">
            <input
              type={newPassword ? "text" : "password"}
              name="Npass"
              id="Npass"
              className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            />
            <span className="absolute top-[12px] right-4">
              {newPassword ? (
                <AiOutlineEyeInvisible
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setNewPassword(!newPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setNewPassword(!newPassword)}
                />
              )}
            </span>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-2">
          <label htmlFor="">Confirm Password</label>
          <div className="in-div relative">
            <input
              type={conPassword ? "text" : "password"}
              name="Cpass"
              id="Cpass"
              className="h-[40px] w-[100%] rounded-md focus:outline-none focus:border-none px-2"
            />
            <span className="absolute top-[12px] right-4">
              {conPassword ? (
                <AiOutlineEyeInvisible
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setConPassword(!conPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="text-[#a0a0a0]"
                  size={20}
                  onClick={() => setConPassword(!conPassword)}
                />
              )}
            </span>
          </div>
        </div>
        <button className="bg-[purple] px-5 py-3 rounded-md text-white mt-4">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
