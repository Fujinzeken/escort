import React from "react";
import logo from "../../assets/images/GalleryAssets/logo.svg";
import { Link } from "react-router-dom";

const GalleryHeader = () => {
  return (
    <div className="flex h-20 items-center border-b-2 py-4 justify-between px-5">
      <img src={logo} alt="" />

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/">Packages</Link>
        <Link to="/">Members</Link>
        <Link to="/">Stories</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="flex gap-3">
        <button type="button" className="py-[4px] px-[8px] rounded border">
          English
        </button>
        <button
          type="button"
          className="text-[#fff] bg-[#FD00B3] py-[4px] px-[10px] rounded"
        >
          Dashboard
        </button>
        <button
          type="button"
          className="text-[#FD00B3] border rounded border-[#FD00B3] py-[4px] px-[8px]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default GalleryHeader;