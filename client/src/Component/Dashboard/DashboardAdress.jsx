import React, { useState } from "react";

import { AiOutlineClose, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { Country, State, City } from "country-state-city";

import { useFormik, Formik } from "formik";
const DashboardAdress = () => {
  const address = {
    name: "alekuwodo",
    zipCode: "210100",
    type: "Home",
    country: "nigeria",
    state: "Lagos",
  };
  const [country, setCountry] = useState({});
  const [toggle, setToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(true);
  const { values, handleChange, handleSubmit, handleBlur, error } = useFormik({
    initialValues: {
      address: address && address.name,
      country: address && address.country,
      state: address && address.state,
      type: address && address.type,
      zipCode: address && address.zipCode,
    },
  });

  return (
    <>
      <div className="">
        <div className="address-header flex justify-between p-7 items-center">
          <p className="font-bold text-[18px] p-2 text-center">Admin Address</p>
          <button
            onClick={() => setToggle(!toggle)}
            className="font-bold text-[16px] bg-[purple]  text-[#fff] p-2 text-center rounded-md cursor-pointer"
          >
            Add New
          </button>
        </div>
        <div className="address mt-5 p-3">
          <div className="address-box flex  ">
            <p className="  addres-name w-[30%] text-center font-[500]">
              Address Name
            </p>
            <p className="country w-[15%]  font-[500]">Country</p>
            <p className="country w-[15%]  font-[500]">State</p>
            <p className="country w-[10%]  font-[500]">Zipcode</p>
            <p className="country w-[10%]  font-[500]">Type</p>
            <p className="country w-[10%]  font-[500]">Edit</p>
            <p className="country w-[10%]  font-[500]">Delete</p>
          </div>
          <div className="addess-box-container flex flex-col mt-7 ">
            <div className="box flex py-4  border-b-2 border-r bg-[#f7f7f7]">
              <p className="addres-name w-[30%] truncate px-2 rounded-md">
                UTC-9: Alaska Standard Time (AKST)
              </p>
              <p className="country w-[15%] ">United State</p>
              <p className="country w-[15%] ">New York</p>
              <p className="country w-[10%] ">36104</p>
              <p className="country w-[10%] ">Home</p>
              <p className="country w-[10%] ">
                <AiOutlineEdit
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setEditToggle(!editToggle)}
                />
              </p>
              <p className="country w-[10%] ">
                <AiOutlineDelete size={20} className="cursor-pointer" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {toggle && (
        <div
          // onClick={(e) => setToggle(!toggle)}
          className="flex w-[100%] h-[100%] bg-[#0000002e] fixed top-0 left-0 justify-center items-center"
        >
          <div className="w-[40%] rounded-sm h-[95%] bg-[#ffffff] relative justify-center items-center flex flex-col overflow-y-scroll py-5">
            <AiOutlineClose
              className="absolute first-of-type:top-5 right-5 cursor-pointer"
              size={25}
              onClick={() => setToggle(!toggle)}
            />
            <h3 className="font-bold text-center text-[20px] mt-5 pt-5">
              Change Admin Adress
            </h3>
            <form action="" className="flex flex-col gap-6 w-[80%] mt-5">
              <div className="left-form  w-[100%] flex flex-col gap-5 ">
                <div className="contain flex flex-col gap-2">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    className="h-[40px] rounded-md px-2 focus:outline-none"
                    value={values.address}
                    onChange={handleChange}
                    name="name"
                    id="name"
                  />
                </div>
                <div className="contain flex flex-col gap-2">
                  <label htmlFor="">Country</label>
                  <select
                    type="text"
                    className="h-[40px] rounded-md px-2 focus:outline-none"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    name="country"
                    id="country"
                  >
                    {Country.getAllCountries().map((country, i) => {
                      return (
                        <option value={country.isoCode}>{country.name}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="contain flex flex-col gap-2">
                  <label htmlFor="">State</label>
                  <select
                    type="text"
                    className="h-[40px] rounded-md px-2 focus:outline-none"
                    value={values.state}
                    onChange={handleChange}
                    name="state"
                    id="state"
                  >
                    {State.getStatesOfCountry(country).map((item, i) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="contain flex flex-col gap-2">
                  <label htmlFor="">ZipCode</label>
                  <input
                    type="text"
                    className="h-[40px] rounded-md px-2 focus:outline-none"
                    value={values.zipCode}
                    onChange={handleChange}
                    name="zipCode"
                    id="zipCode"
                  />
                </div>
                <div className="contain flex flex-col gap-2">
                  <label htmlFor="">Type</label>
                  <select
                    type="text"
                    className="h-[40px] rounded-md px-2 focus:outline-none"
                    value={values.type}
                    onChange={handleChange}
                    name="type"
                    id="type"
                  >
                    {["Home", "Office", "Church"].map((i, index) => {
                      return (
                        <>
                          <option value={i}>{i}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <input type="submit" value="Change Address" />
            </form>
          </div>
        </div>
      )}

      {editToggle && (
        <EditAdress
          setEditToggle={setEditToggle}
          editToggle={editToggle}
          address={address}
        />
      )}
    </>
  );
};

const EditAdress = ({ address, setEditToggle, editToggle }) => {
  const [country, setCountry] = useState({});
  const { values, handleChange, handleSubmit, handleBlur, error } = useFormik({
    initialValues: {
      address: address && address.name,
      country: address && address.country,
      state: address && address.state,
      type: address && address.type,
      zipCode: address && address.zipCode,
    },
  });
  return (
    <div
      // onClick={(e) => setToggle(!toggle)}
      className="flex w-[100%] h-[100%] bg-[#0000002e] fixed top-0 left-0 justify-center items-center"
    >
      <div className="w-[40%] rounded-sm h-[95%] bg-[#ffffff] relative justify-center items-center flex flex-col overflow-y-scroll py-5">
        <AiOutlineClose
          className="absolute first-of-type:top-5 right-5 cursor-pointer"
          size={25}
          onClick={() => setEditToggle(!editToggle)}
        />
        <h3 className="font-bold text-center text-[20px] mt-5 pt-5">
          Change Admin Adress
        </h3>
        <form action="" className="flex flex-col gap-6 w-[80%] mt-5">
          <div className="left-form  w-[100%] flex flex-col gap-5 ">
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Address</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.address}
                onChange={handleChange}
                name="name"
                id="name"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Country</label>
              <select
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                name="country"
                id="country"
              >
                {Country.getAllCountries().map((country, i) => {
                  return (
                    <option value={country.isoCode}>{country.name}</option>
                  );
                })}
              </select>
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">State</label>
              <select
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.state}
                onChange={handleChange}
                name="state"
                id="state"
              >
                {State.getStatesOfCountry(country).map((item, i) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">ZipCode</label>
              <input
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.zipCode}
                onChange={handleChange}
                name="zipCode"
                id="zipCode"
              />
            </div>
            <div className="contain flex flex-col gap-2">
              <label htmlFor="">Type</label>
              <select
                type="text"
                className="h-[40px] rounded-md px-2 focus:outline-none"
                value={values.type}
                onChange={handleChange}
                name="type"
                id="type"
              >
                {["Home", "Office", "Church"].map((i, index) => {
                  return (
                    <>
                      <option value={i}>{i}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          <input type="submit" value="Change Address" />
        </form>
      </div>
    </div>
  );
};

export default DashboardAdress;
