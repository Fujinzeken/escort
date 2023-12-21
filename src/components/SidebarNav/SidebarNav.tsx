import { Button } from "components/Button";
import { Img } from "components/Img";
import { Text, List, Line } from "components";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidebarNav = ({ pageOn }) => {
  const [isHidden, setisHidden] = useState(true);

  const handleToggle = () => {
    setisHidden(!isHidden);
  };
  return (
    <>
      <button
        className={`hidden sm:flex absolute top-[100px] left-[10px] flex items-center justify-center w-[20%] border p-3 rounded-full`}
        style={{
          background: "#FD00B3",
          border: "1px solid #FD00B3",
          color: "#fff",
        }}
        onClick={handleToggle}
      >
        Menu
      </button>
      <div
        className={`sm:${
          isHidden
            ? "hidden"
            : "flex w-full absolute left-[0] ml-[-20px] top-[5%] z-10"
        } flex md:flex-col flex-row gap-[31px] items-center justify-between w-[30%] md:w-full`}
      >
        <div className="flex flex-col items-end justify-start pb-[420px] sm:pl-5 pl-[22px] w-full md:w-full">
          <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-start mb-2 p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-1 w-[84%] md:w-full"
                  // style={{
                  //   backgroundImage: "url('images/img_divuserpopularityicn.svg')",
                  // }}
                >
                  <Img
                    className="h-[49px] md:h-auto my-1.5 rounded-[50%] w-[49px]"
                    src="images/img_bv7mozwnhchqrqp_49x49.png"
                    alt="bv7mozwnhchqrqp_One"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start py-3 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-900_02"
                    size="txtMontserratMedium16Bluegray90002"
                  >
                    Tekena west
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-end py-[5px]">
                    <Text
                      className="text-[15px] text-gray-800"
                      size="txtMontserratRegular15Gray800"
                    >
                      <span className="text-gray-800 font-montserrat text-left font-normal">
                        Popularity:{" "}
                      </span>
                      <span className="text-purple-400 font-montserrat text-left font-normal">
                        Very low
                      </span>
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium mb-[3px] min-w-[227px] mt-[15px] rounded-[17px] text-center text-sm"
                  color="pink_50"
                  size="md"
                  variant="outline"
                >
                  Increase Popularity
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-[15px] w-full">
              <div className="flex flex-row items-center justify-start pr-[11px] w-full cursor-pointer hover:bg-gray-500">
                <Img
                  className="h-14 w-14"
                  src="images/img_home.svg"
                  alt="home"
                />
                <Text
                  className="text-base text-gray-800"
                  size="txtMontserratRegular16Gray800"
                >
                  Home
                </Text>
              </div>
              {/* <div className="flex flex-row items-center justify-evenly mt-[3px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_settings_purple_400.svg"
              alt="settings_One"
            />
            <div className="flex relative w-[84%]">
              <Text
                className="my-auto text-base text-purple-400"
                size="txtMontserratRegular16Purple400"
              >
                Matches
              </Text>
              <Img
                className="h-2.5 mb-1 ml-[-0.3px] mt-auto z-[1]"
                src="images/img_arrowright_purple_400.svg"
                alt="arrowright_One"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_settings_gray_800_20x37.svg"
              alt="settings_Two"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              Visitors
            </Text>
          </div>
          <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_user_gray_800_20x37.svg"
              alt="user_Two"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              Friends
            </Text>
          </div> */}
              <Line className="bg-gray-300_02 h-px mt-2.5 w-full" />
              <div className="flex flex-row items-center justify-start mt-2.5 pr-[11px] w-full cursor-pointer hover:bg-gray-500">
                <Img
                  className="h-14"
                  src="images/img_divvlistitemiconmargin.svg"
                  alt="svgmargin"
                />
                <Text
                  className="text-base text-gray-800"
                  size="txtMontserratRegular16Gray800"
                >
                  Feature
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  {/* <div className="flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
            <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-gray-600_01"
                    size="txtRobotoRegular16"
                  >
                    Overview
                  </Text>
                </div>
              </div>
            </div>
          </div> */}
                  <div className="flex flex-1 flex-col items-end justify-start my-0 px-8 w-full py-3 hover:bg-gray-500">
                    <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full ">
                        <div className="flex gap-3 items-center cursor-pointer">
                          <Link to="/advert" className="flex gap-3">
                            <Img
                              className="h-6 w-6"
                              src="images/advert_logo.png"
                              alt="message icon"
                            />
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Advert Free
                            </Text>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-row items-center justify-start mt-5 py-[11px] w-full pl-3 gap-3 cursor-pointer hover:bg-gray-500">
                <Link to="/messages" className="flex gap-3">
                  <Img
                    className="h-6 w-6"
                    src="images/message_icon.png"
                    alt="message icon"
                  />
                  <Text
                    className="text-base text-gray-600_01"
                    size="txtRobotoRegular16"
                  >
                    Messages
                  </Text>
                </Link>
              </div>
              {/* <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_settings_20x37.svg"
              alt="settings_Three"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              People I Liked
            </Text>
          </div>
          <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_close_gray_800.svg"
              alt="close"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              People I Disliked
            </Text>
          </div>
          <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_close_gray_800.svg"
              alt="close_One"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              Friend requests
            </Text>
          </div>
          <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_svgmargin_gray_800.svg"
              alt="svgmargin_One"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              Hot OR Not
            </Text>
          </div> */}
              <Line className="bg-gray-300_02 h-px mt-2.5 w-full" />
              <List
                className="flex flex-col gap-4 items-center mb-4 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-center justify-start w-full cursor-pointer hover:bg-gray-500">
                  <Link to="/profile" className="flex">
                    <Img
                      className="h-14 w-14"
                      src="images/img_lock_gray_600_01.svg"
                      alt="lock"
                    />
                    <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtRobotoRegular16"
                          >
                            Account settings
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start w-full cursor-pointer hover:bg-gray-500">
                  <Img
                    className="h-14 w-14"
                    src="images/img_divvlistitemiconmargin_gray_600_01.svg"
                    alt="divvlistitemico"
                  />
                  <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-600_01"
                          size="txtRobotoRegular16"
                        >
                          Become a customer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    pageOn === "ladies" ? "bg-orange-600" : ""
                  } flex flex-1 flex-row items-center justify-start w-full cursor-pointer hover:bg-gray-500`}
                >
                  <Link to="/ladies-star" className="flex">
                    <Img
                      className="h-14 w-14"
                      src="images/img_divvlistitemiconmargin_gray_600_01_56x56.svg"
                      alt="divvlistitemico"
                    />
                    <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className={`${
                              pageOn === "ladies"
                                ? "text-base text-white-A700"
                                : "text-base text-gray-600_01"
                            }`}
                            size="txtRobotoRegular16"
                          >
                            LadiesSTARS
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <div className="flex flex-1 flex-row items-center justify-start px-4 w-full">
              <Img
                className="h-14 w-[55px]"
                src="images/img_divvlistitemiconmargin_gray_600_01_56x55.svg"
                alt="divvlistitemico"
              />
              <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-gray-600_01"
                      size="txtRobotoRegular16"
                    >
                      Coins
                    </Text>
                  </div>
                </div>
              </div>
            </div> */}
              </List>
              <div className="flex flex-row items-center justify-start mt-8 pr-[11px] py-[11px] w-full cursor-pointer hover:bg-gray-500">
                <Link to="/live-video" className="flex">
                  <Img
                    className="h-5"
                    src="images/img_user_gray_800.svg"
                    alt="user_Three"
                  />
                  <Text
                    className="text-base text-gray-800"
                    size="txtMontserratRegular16Gray800"
                  >
                    Live Videos
                  </Text>
                </Link>
              </div>

              {/* <div className="flex flex-row items-center justify-start mt-2.5 pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_user_20x37.svg"
              alt="user_Four"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              Blog
            </Text>
          </div>
          <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
            <Img
              className="h-5"
              src="images/img_settings_1.svg"
              alt="settings_Four"
            />
            <Text
              className="text-base text-gray-800"
              size="txtMontserratRegular16Gray800"
            >
              Success stories
            </Text>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
