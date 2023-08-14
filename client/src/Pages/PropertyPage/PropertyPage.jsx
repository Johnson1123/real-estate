import React from "react";
import Property from "../../Component/Property";
import { useNavigate } from "react-router-dom";

function PropertyPage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-5 flex-col items-center">
      <div className="w-[85%] flex justify-between items-center">
        <h3 className="my-5 text-[20px] text-[purple] font-[500]">
          Properties to Browse
        </h3>
        <button
          className="px-5 py-2 h-[40px] bg-[purple] rounded-md text-[#fff] "
          onClick={() => navigate("/add-property")}
        >
          Add Property
        </button>
      </div>
      <div className="w-[85%] flex flex-wrap gap-7 mt-10">
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </div>
    </div>
  );
}

export default PropertyPage;
