import "../../Pages/Dashboard/Dashboard.css";

import { AiFillCamera } from "react-icons/ai";

import { useFormik } from "formik";
const EditProfile = ({ agent }) => {
  const { values, handleChange, handleSubmit, handleBlur, error } = useFormik({
    initialValues: {
      name: agent && agent.name,
      phone: agent && agent.phone,
      email: agent && agent.email,
      experience: agent && agent.experience,
      level: agent && agent.qualification,
      facebook: agent && agent.facebook,
      instagram: agent && agent.instagram,
      twitter: agent && agent.twitter,
      linkedin: agent && agent.linkedin,
    },
  });
  return (
    <div className="flex justify-center items-center h-[100%] flex-col">
      <div className="edit-image h-[150px] w-[150px] overflow-hidden relative">
        <img
          src={agent.image}
          alt=""
          className="w-[100%] h-[100%] rounded-full object-cover ]"
        />
        <input type="file" hidden id="file" />
        <label
          className="absolute top-[50%] right-0 z-50 h-[20px] w-[20px] p-1 bg-[green] rounded-full flex justify-center items-center"
          for="file"
        >
          <AiFillCamera color="white" size={11} className="pointer" />
        </label>
      </div>
      <form action="" className="flex gap-6 w-[80%] mt-5">
        <div className="left-form  w-[50%] flex flex-col gap-5 ">
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.name}
              onChange={handleChange}
              name="name"
              id="name"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.phone}
              onChange={handleChange}
              name="phone"
              id="phone"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Experience</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.experience}
              onChange={handleChange}
              name="experience"
              id="exprerience"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Level</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.level}
              onChange={handleChange}
              name="level"
              id="level"
            />
          </div>
        </div>
        <div className="right-form w-[50%] flex flex-col gap-5">
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Facebook</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.facebook}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Twitter</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.twitter}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">Instagram</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.instagram}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>
          <div className="contain flex flex-col gap-2">
            <label htmlFor="">LinkedIn</label>
            <input
              type="text"
              className="h-[40px] rounded-md px-2 focus:outline-none"
              value={values.linkedin}
              onChange={handleChange}
              name="instagram"
              id="instagram"
            />
          </div>
          <input
            type="submit"
            className="mt-4 self-end "
            value="Edit Profile"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
