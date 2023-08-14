import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineLogout,
} from "react-icons/ai";
import { PiPasswordLight } from "react-icons/pi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { Country, State, City } from "country-state-city";

import { useFormik } from "formik";
import Profile from "../../Component/Dashboard/Profile";
import ChangePassword from "../../Component/Dashboard/ChangePassword";
import EditProfile from "../../Component/Dashboard/EditProfile";
import DashboardProperty from "../../Component/Dashboard/DashboardProperty";
import DashboardAdress from "../../Component/Dashboard/DashboardAdress";
import DashboardAgent from "../../Component/Dashboard/DashboardAgent";

function Dashboard() {
  const [agents, setAgents] = useState([]);
  const [active, setActive] = useState(1);
  useEffect(() => {
    const handleApi = async () => {
      const res = await axios.get("http://localhost:5000/api/get-agent");
      setAgents(res.data.agents.slice(0, 3));
    };
    handleApi();
  }, []);
  console.log(agents);
  return (
    <>
      <header className="w-[100%] bg-[#fcfcfc]  py-4 px-6 shadow-fuchsia-950 h-[70px] flex items-center justify-between border-b-2 border-[#f4f4f4]">
        <a href="" className="text-[30px] font-bold text-[purple]">
          BHome
        </a>
        <div className="flex gap-4">
          <span className="span-icon">
            <a href="">
              <BiLogoTwitter className="icon" />
            </a>
          </span>
          <span className="span-icon">
            <a href="">
              <BiLogoLinkedin className="icon" />
            </a>
          </span>
          <span className="span-icon">
            <a href="">
              <BiLogoInstagram className="icon" />
            </a>
          </span>
          <span className="span-icon">
            <a href="">
              <BiLogoFacebook className="icon" />
            </a>
          </span>
        </div>
      </header>
      <div className="w-[100%] flex">
        <div className="left-con w-[20%]">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="right-con w-[80%] min-h-[100%] bg-[#fcfcfc] ">
          {console.log("hello")}
          {active == 1 && agents.length > 0 && <Profile agent={agents[0]} />}
          {active == 2 && agents.length > 0 && (
            <DashboardAgent agents={agents} />
          )}
          {active == 3 && <DashboardProperty agents={agents} />}
          {active == 5 && <EditProfile agent={agents[0]} />}
          {active == 6 && <ChangePassword />}
          {active == 4 && <DashboardAdress />}
        </div>
      </div>
    </>
  );
}

const SideBar = ({ active, setActive }) => {
  const handleCount = (n) => {
    setActive(n);
  };
  return (
    <div className="sidebar">
      <ul className="sidebar-ul">
        <li
          className={`${
            active == 1 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(1)}
        >
          <span className="side-icon">
            <BiUser />
          </span>
          Profile
        </li>
        <li
          className={`${
            active == 2 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(2)}
        >
          <span className="side-icon">
            <BsPeople />
          </span>
          Agents
        </li>
        <li
          className={`${
            active == 3 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(3)}
        >
          <span className="side-icon">
            <BsHouseDoor />
          </span>
          Properties
        </li>

        <li
          className={`${
            active == 4 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(4)}
        >
          <span className="side-icon">
            <BsHouseDoor />
          </span>
          Add Address
        </li>
        <li
          className={`${
            active == 5 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(5)}
        >
          <span className="side-icon">
            <BsHouseDoor />
          </span>
          Edit Profile
        </li>
        <li
          className={`${
            active == 6 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(6)}
        >
          <span className="side-icon">
            <PiPasswordLight />
          </span>
          Password
        </li>
        <li
          className={`${
            active == 7 ? "aside-active" : ""
          }  flex items-center gap-2`}
          onClick={() => handleCount(7)}
        >
          <span className="side-icon">
            <AiOutlineLogout size={18} />
          </span>
          LogOut
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
