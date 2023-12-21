import React from "react";
import Topbar from "components/Topbar";
import SidebarNav from "components/SidebarNav/SidebarNav";
import Footer from "components/Footer/Footer";
import { Img, Text } from "components";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineWindows } from "react-icons/ai";

const LadiesStar: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Topbar />
      <div
        className="bg-cover bg-no-repeat flex gap-7 items-center justify-center"
        style={{
          backgroundImage: "url('images/img_loginbannermasksvg_black_900.png')",
        }}
      >
        <SidebarNav />
        <div className="flex flex-col gap-3 p-4 rounded-2xl w-full px-4 font-roboto pt-[60px]">
          <div
            className="flex flex-col gap-3 p-4 rounded-2xl w-full"
            style={{ backgroundColor: "#FD00B3" }}
          >
            <Text className="px-5" style={{ color: "#fff" }}>
              LADIESSTARS PREMIUM
            </Text>
            <div className="flex items-center w-1/3 gap-2 border border-white-500 px-5 ml-5 sm:w-4/5 md:w-4/5">
              <Img src="images/map-icon.png" className="h-4" />
              <input
                type="text"
                className="border-none placeholder-white-A700"
                placeholder="All regions"
                style={{ background: "transparent", color: "#fff" }}
              />
            </div>
            <div
              className="flex w-1/3 gap-3 px-5 py-4 font-roboto ml-5 sm:w-4/5 md:w-4/5"
              style={{ background: "#fff" }}
            >
              <Img
                src="images/search-icon.png"
                height="4"
                className="cursor-pointer"
              />
              <p>
                Change Filters{" "}
                <span style={{ color: "#fff", background: "#E28C13" }}>
                  NEU
                </span>
              </p>
            </div>
            <div className="flex gap-3 px-3 py-4 font-roboto sm:flex-col md:flex-col">
              <div
                className="flex w-1/2 gap-3 px-3 py-4 font-roboto items-center sm:w-full md:w-full"
                style={{ background: "#E3E3E3" }}
              >
                <p className="font-bold">
                  Exclusive Content:
                  <span className="font-light"> LadiesSTARS</span>
                </p>
                <div className="flex items-center justify-center gap-1">
                  <Img
                    src="images/trash.png"
                    height="29"
                    className="cursor-pointer mb-1"
                  />
                  <span style={{ color: "#E28C13" }}>Clear all Filters</span>
                </div>
              </div>
              <div
                className="flex w-1/2 gap-3 px-3 py-4 font-roboto items-center sm:w-full md:w-full"
                style={{ background: "#E3E3E3" }}
              >
                <p style={{ fontSize: "15px" }}>
                  281 LadiesSTARS in Germany, Austria and Switzerland
                </p>
                <div className="flex gap-2">
                  <AiOutlineWindows className="flex items-center h-[30px] w-[30px] cursor-pointer" />
                  <IoIosMenu className="flex items-center h-[30px] w-[30px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 rounded-2xl border border-whiteA700 bg-white-A700 p-5">
            <div className="flex gap-3 mb-8 sm:flex-col md:flex-col">
              <div className="flex flex-col w-1/2 gap-3 sm:w-full md:w-full">
                <div className="flex items-center justify-center cursor-pointer">
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:w-full">
                  <span>Nuremberg</span>
                  <div className="flex">
                    <Img src="images/escort-star.png" />
                    <span>REBECCA - Current pictures</span>
                  </div>
                  <p className="font-light" style={{ fontSize: "14px" }}>
                    26 years, 75B, KF 34, 1.67m, completely shaved, Eastern
                    European 69, GF6, Franz b. You, cuddles, cuddles, KBp
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-1/2 gap-3 sm:w-full md:w-full">
                <div className="flex items-center justify-center cursor-pointer">
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:w-full">
                  <span>Nuremberg</span>
                  <div className="flex">
                    <Img src="images/escort-star.png" />
                    <span>REBECCA - Current pictures</span>
                  </div>
                  <p className="font-light" style={{ fontSize: "14px" }}>
                    26 years, 75B, KF 34, 1.67m, completely shaved, Eastern
                    European 69, GF6, Franz b. You, cuddles, cuddles, KBp
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-8 sm:flex-col md:flex-col">
              <div className="flex flex-col w-1/2 gap-3 sm:w-full md:w-full">
                <div className="flex items-center justify-center cursor-pointer">
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:w-full">
                  <span>Nuremberg</span>
                  <div className="flex">
                    <Img src="images/escort-star.png" />
                    <span>REBECCA - Current pictures</span>
                  </div>
                  <p className="font-light" style={{ fontSize: "14px" }}>
                    26 years, 75B, KF 34, 1.67m, completely shaved, Eastern
                    European 69, GF6, Franz b. You, cuddles, cuddles, KBp
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-1/2 gap-3 sm:w-full md:w-full">
                <div className="flex items-center justify-center cursor-pointer">
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:w-full">
                  <span>Nuremberg</span>
                  <div className="flex">
                    <Img src="images/escort-star.png" />
                    <span>REBECCA - Current pictures</span>
                  </div>
                  <p className="font-light" style={{ fontSize: "14px" }}>
                    26 years, 75B, KF 34, 1.67m, completely shaved, Eastern
                    European 69, GF6, Franz b. You, cuddles, cuddles, KBp
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mb-8 sm:flex-col md:flex-col">
              <div className="flex flex-col w-1/2 gap-3 sm:w-full md:w-full">
                <div className="flex items-center justify-center cursor-pointer">
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:w-full">
                  <span>Nuremberg</span>
                  <div className="flex">
                    <Img src="images/escort-star.png" />
                    <span>REBECCA - Current pictures</span>
                  </div>
                  <p className="font-light" style={{ fontSize: "14px" }}>
                    26 years, 75B, KF 34, 1.67m, completely shaved, Eastern
                    European 69, GF6, Franz b. You, cuddles, cuddles, KBp
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-1/2 gap-3 sm:w-full md:w-full">
                <div className="flex items-center justify-center cursor-pointer">
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                  <Img
                    src="images/escort.png"
                    className="h-[150px] w-[150px] sm:h-[150px] w-[100px]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:w-full">
                  <span>Nuremberg</span>
                  <div className="flex">
                    <Img src="images/escort-star.png" />
                    <span>REBECCA - Current pictures</span>
                  </div>
                  <p className="font-light" style={{ fontSize: "14px" }}>
                    26 years, 75B, KF 34, 1.67m, completely shaved, Eastern
                    European 69, GF6, Franz b. You, cuddles, cuddles, KBp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 items-center justify-center ml-[50px] font-roboto sm:ml-[0]">
        <div className="flex flex-col gap-3 items-center pl-[20px] ">
          <span className="font-medium">Order Ladies.de newsletter</span>
          <span className="font-light">
            Get the latest information from the world of eroticism straight to
            your inbox.
          </span>
          <input
            type="text"
            placeholder="Your e-mail address"
            className="w-[100%]"
          />
          <button
            className="flex items-center justify-center w-[100%] border p-3"
            style={{
              background: "#FD00B3",
              border: "1px solid #FD00B3",
              color: "#fff",
            }}
          >
            Register Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LadiesStar;
