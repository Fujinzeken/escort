import React, { useState } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";

const DesktopTwentyFivePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isrotate, setRotate] = useState(false);
  const account = useNavigate();
  const rotate = {
    transform: isrotate ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all .5s ease-in-out",
  };

  const toggle = () => {
    setIsVisible(!isVisible);
    setRotate(!isrotate);
  };

  const ratedPage = () => {
    account("/dashboard");
  };

  const AccountPage = () => {
    account("/profile");
  };

  const Advert = () => {
    account("/advert");
  };

  const messages = () => {
    account("/messages");
  };

  const member = () => {
    account("/Becomeamember");
  };

  const liveVideo = () => {
    account("/live-video");
  };

  const ladiesStar = () => {
    account("/ladies-star");
  };

  const home = () => {
    account("/");
  };

  return (
    <>
      <div className="bg-white-A700 flex overflow-x-hidden flex-col font-montserrat items-center justify-start mx-auto pb-[88px] w-full">
        <Img
          className="h-[9px] sm:h-auto object-cover w-full"
          src="images/img_pseudo_3.png"
          alt="pseudo"
        />
        <div className="md:h-[171px] h-[73px] sm:h-[85px] max-w-[1354px] mt-4 mx-auto md:px-5 relative w-full">
          <Header1 className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto w-full" />
          <div className="absolute flex flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start px-4 w-full">
                <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                  <Img
                    className="h-[37px] md:h-auto object-cover w-full"
                    src="images/img_divvimageimage.png"
                    alt="divvimageimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1043px] h-[1444px] sm:h-[954px] mt-[37px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[94%]">
            <div className="flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-7 pb-[98px] w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pt-9 w-[34%] md:w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start px-[11px] w-1/2">
                        <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                          <Text
                            className="text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            About Us
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="leading-[32.00px] text-gray-800 text-sm"
                              size="txtMontserratRegular14"
                            >
                              <>
                                Terms and
                                <br />
                                Conditions
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                          <a
                            href="javascript:"
                            className="mt-0.5 text-gray-800 text-sm"
                          >
                            <Text size="txtMontserratRegular14">
                              Privacy Policy
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-end pr-1.5 py-1.5">
                          <Text
                            className="text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            Contact
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-[11px] px-[11px] w-1/2">
                        <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="leading-[32.00px] text-gray-800 text-sm"
                              size="txtMontserratRegular14"
                            >
                              <>
                                Frequently Asked
                                <br />
                                Questions
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                          <Text
                            className="text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            Refund
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-end mb-5 pr-[5px] py-[5px]">
                          <Text
                            className="mt-0.5 text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            Blog
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-roboto gap-[11px] items-center justify-start pb-1.5 px-1.5 w-[42%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[14.88px] text-blue_gray-900 tracking-[0.06px]"
                        size="txtRobotoRegular1488"
                      >
                        Always up to date with our latest offers and discounts!
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-center justify-start mb-[115px] w-full">
                      <div className="flex sm:flex-1 flex-col items-center justify-start px-[5px] w-3/4 sm:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Input
                            name="input"
                            placeholder="Enter your email address"
                            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm tracking-[0.05px] w-full"
                            wrapClassName="flex w-full"
                            type="email"
                            prefix={
                              <Img
                                className="mr-3 my-auto"
                                src="images/img_svg_gray_600.svg"
                                alt="SVG"
                              />
                            }
                            shape="round"
                            size="xl"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start px-[5px] w-[26%] sm:w-full">
                        <Button
                          className="cursor-pointer min-w-[100px] text-center text-sm tracking-[0.05px] uppercase"
                          shape="round"
                          color="gray_800"
                          size="xl"
                          variant="fill"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-roboto items-center justify-start pb-[11px] px-[11px] w-[17%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start mb-[111px] w-full">
                      <Text
                        className="text-[14.77px] text-blue_gray-900 tracking-[0.06px]"
                        size="txtRobotoRegular1477"
                      >
                        Follow us!
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Button
                          className="flex h-[42px] items-center justify-center w-[42px]"
                          shape="circle"
                          color="gray_400_4f"
                          size="xl"
                          variant="fill"
                        >
                          <Img src="images/img_facebook.svg" alt="facebook" />
                        </Button>
                        <Button
                          className="flex h-[42px] items-center justify-center w-[42px]"
                          shape="circle"
                          color="gray_400_4f"
                          size="lg"
                          variant="fill"
                        >
                          <Img src="images/img_trash.svg" alt="trash" />
                        </Button>
                        <Button
                          className="flex h-[42px] items-center justify-center w-[42px]"
                          shape="circle"
                          color="gray_400_4f"
                          size="xl"
                          variant="fill"
                        >
                          <Img src="images/img_contrast.svg" alt="contrast" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                    <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[349px] w-full">
                      <div className="flex flex-col items-center justify-start px-[11px] w-1/2">
                        <div className="flex flex-col items-start justify-end pr-1.5 py-1.5 w-full">
                          <div className="flex flex-row items-start justify-start w-[63%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_globe.svg"
                              alt="globe"
                            />
                            <Text
                              className="ml-1 text-gray-800 text-sm"
                              size="txtMontserratRegular14"
                            >
                              {" "}
                              Language
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end p-[5px]">
                        <Text
                          className="md:ml-[0] ml-[5px] mt-0.5 text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Developers
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start px-[11px] w-[34%] md:w-full">
                    <div className="flex flex-col items-end justify-start pl-1.5 py-1.5">
                      <Text
                        className="leading-[32.00px] text-base text-gray-800 text-right"
                        size="txtMontserratRegular16Gray800"
                      >
                        <>
                          Copyright © 2023 Quickdate. All rights
                          <br />
                          reserved.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex inset-x-[0] mx-auto pl-3 py-3 top-[0] w-full"
            style={{
              backgroundImage:
                "url('images/img_loginbannermasksvg_black_900.png')",
            }}
          >
            <div className="font-montserrat md:h-[917px] h-[952px] ml-[undefinedpx] my-auto pb-1.5 px-1.5 w-[21%] z-[1]">
              <div className=" bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[93%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-[34%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-1 w-[84%] md:w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_divuserpopularityicn.svg')",
                      }}
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

                <div className=" top-[5%] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto py-2 w-[96%]">
                  <div
                    className=" leftNav flex flex-row items-center justify-start  w-full"
                    onClick={home}
                  >
                    <Img
                      className="h-14 w-14"
                      src="images/img_home.svg"
                      alt="home"
                    />
                    <div className="flex flex-col items-center justify-start py-4 ">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtRobotoRegular16"
                          >
                            Home
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start mt-4 w-full">
                    <div className="h-14 relative w-full">
                      <Img
                        className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                        src="images/img_divvlistitemiconmargin.svg"
                        alt="divvlistitemico"
                      />
                      <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[1%] w-[70%]">
                        <div className="flex flex-col items-center justify-start py-4 w-[84%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-gray-600_01"
                                size="txtRobotoRegular16"
                              >
                                Features
                              </Text>
                            </div>
                          </div>
                        </div>
                        <section style={rotate} onClick={toggle}>
                          <Img
                            className="h-4 cursor"
                            src="images/img_arrowdown_gray_600_01.svg"
                            alt="arrowdown_One"
                          />
                        </section>
                      </div>
                      <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                    </div>

                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        {isVisible && (
                          <div
                            className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full"
                            onClick={Advert}
                          >
                            <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-3 items-center justify-start">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/advert_logo.png"
                                    alt="message icon"
                                  />
                                  <Text
                                    className="text-base text-gray-600_01"
                                    size="txtRobotoRegular16"
                                  >
                                    Advert free
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* <div className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[72px] py-4 w-[70%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                >
                                  18 + content
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div
                          className="leftNav flex flex-1 flex-col items-center justify-start my-0 px-2 w-full"
                          onClick={messages}
                        >
                          <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex gap-3 items-center justify-start">
                                <Img
                                  className="h-6 w-6"
                                  src="images/message_icon.png"
                                  alt="message icon"
                                />
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                >
                                  Message
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                      </List>
                    </div>
                  </div>
                  <div className="leftNav active flex flex-1 flex-row items-center justify-start px-1 w-full">
                    <Img
                      className="h-14 w-14"
                      src="images/img_lock_gray_600_01.svg"
                      alt="lock"
                    />
                    <div
                      onClick={AccountPage}
                      className="cursor flex flex-col items-center justify-start py-4 w-[79%]"
                    >
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
                  </div>
                  <div
                    className="leftNav flex flex-row items-center justify-start mt-4  w-full"
                    onClick={member}
                  >
                    <Img
                      className="h-14 w-14"
                      src="images/img_divvlistitemiconmargin_gray_600_01.svg"
                      alt="divvlistitemico_One"
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
                    className="leftNav flex flex-row items-center justify-start mt-[15px]  w-full"
                    onClick={ladiesStar}
                  >
                    <Img
                      className="h-14 w-14"
                      src="images/img_divvlistitemiconmargin_gray_600_01_56x56.svg"
                      alt="divvlistitemico_Two"
                    />
                    <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtRobotoRegular16"
                          >
                            LadiesSTARS
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-row items-center justify-start mt-4  w-full">
                    <Img
                      className="h-14 w-[55px]"
                      src="images/img_divvlistitemiconmargin_gray_600_01_56x55.svg"
                      alt="divvlistitemico_Three"
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
                  <div
                    className="leftNav flex flex-col font-montserrat items-center justify-end mb-[34px] py-[5px] w-full"
                    onClick={liveVideo}
                  >
                    <div className=" flex flex-row items-center justify-start py-[11px] w-[82%] md:w-full">
                      <Img
                        className="h-5"
                        src="images/img_user_gray_800.svg"
                        alt="user_One"
                      />
                      <Text
                        className="text-base text-gray-800"
                        size="txtMontserratRegular16Gray800"
                      >
                        Live Videos
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Img
              className="h-[358px] ml-[-11.48px] mr-3.5 mt-10 z-[1]"
              src="images/img_divlwadblockh90.svg"
              alt="divlwpageconten"
            /> */}
            {/* <Button
              className="flex h-14 items-center justify-center ml-[undefinedpx] mr-[59px] mt-auto rounded-[50%] w-14 z-[1]"
              shape="circle"
              size="xl"
              variant="gradient"
              color="orange_600_yellow_900"
            >
              <Img
                className="h-8"
                src="images/img_arrowup_white_a700.svg"
                alt="arrowup"
              />
            </Button> */}
            <div className="flex flex-col font-fuzzybubbles gap-[18px] items-center justify-start ml-[undefinedpx] p-4 w-[77%] z-[1]">
              <div className="">
                <div className="h-[426px] sm:h-[501px] md:h-[530px] relative w-[98%] md:w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[5px] w-full">
                    <div className="flex flex-col gap-[18px] justify-start mb-[7px] mt-[266px] w-[91%] md:w-full">
                      <List
                        className="sm:flex-col flex-row font-roboto gap-[42px] grid md:grid-cols-1 grid-cols-2 justify-center md:ml-[0] ml-[18px] w-[99%]"
                        orientation="horizontal"
                      >
                        <div className="sm:h-[139px] h-[63px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                              <div className="flex sm:flex-1 flex-col items-center justify-end py-[11px] w-[68%] sm:w-full">
                                <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-gray-600_01 text-sm"
                                      size="txtRobotoBold14Gray60001"
                                    >
                                      Age verification
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start pt-1 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-red-A700_01 text-sm"
                                      size="txtRobotoRegular14RedA70001"
                                    >
                                      not verified
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex sm:flex-1 flex-col items-end justify-start pl-3 py-3 w-[33%] sm:w-full">
                                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                  <Button
                                    className="!text-gray-600_01 border border-blue_gray-100_04 border-solid cursor-pointer leading-[normal] min-w-[120px] text-center text-sm"
                                    shape="square"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    verify
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="absolute bg-black-900_1e bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                        </div>
                        <div className="h-16 md:h-[60px] relative w-full">
                          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto py-[11px] w-[68%]">
                            <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-600_01 text-sm"
                                  size="txtRobotoBold14Gray60001"
                                >
                                  Advert free
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start pt-1 w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-red-A700_01 text-sm"
                                  size="txtRobotoRegular14RedA70001"
                                >
                                  no ad-free
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto pl-3 py-3 right-[0] w-[33%]">
                            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                              <Button
                                className="!text-gray-600_01 border border-blue_gray-100_04 border-solid cursor-pointer leading-[normal] min-w-[120px] text-center text-sm"
                                shape="square"
                                color="white_A700"
                                size="md"
                                variant="fill"
                              >
                                show
                              </Button>
                            </div>
                          </div>
                          <Line className="absolute bg-black-900_1e bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                        </div>
                      </List>
                      <Button
                        className="border border-pink-700 border-solid cursor-pointer font-fuzzybubbles min-w-[68px] mr-[837px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="pink_700"
                        size="sm"
                        variant="fill"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-start justify-end mx-auto p-[11px] top-[0] w-full">
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-2 w-[99%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtFuzzyBubblesRegular24"
                        >
                          Notification Settings
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-start justify-start ml-2 md:ml-[0] w-[99%] md:w-full">
                      <List
                        className="flex flex-col gap-2.5 w-[91%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                          <div className="h-16 md:h-[62px] mb-0.5 relative w-[47%] md:w-full">
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto py-[11px] w-[88%]">
                              <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-gray-600_01 text-sm"
                                    size="txtRobotoBold14Gray60001"
                                  >
                                    User name
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start pt-1 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900_99 text-sm"
                                    size="txtRobotoRegular14Black90099"
                                  >
                                    ellytasha
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[60px] inset-y-[0] my-auto right-[0]"
                              src="images/img_arrowright_black_900.svg"
                              alt="arrowright"
                            />
                            <Line className="absolute bg-black-900_1e bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                          </div>
                          <div className="h-16 sm:h-[139px] md:h-[63px] md:mt-0 mt-0.5 relative w-[47%] md:w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                                <div className="flex sm:flex-1 flex-col items-center justify-end py-[11px] w-[88%] sm:w-full">
                                  <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-gray-600_01 text-sm"
                                        size="txtRobotoBold14Gray60001"
                                      >
                                        E-mail address
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start pt-1 w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-black-900_99 text-sm"
                                        size="txtRobotoRegular14Black90099"
                                      >
                                        veradesignr@gmail.com
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-[60px]"
                                  src="images/img_arrowleft.svg"
                                  alt="arrowleft"
                                />
                              </div>
                            </div>
                            <Line className="absolute bg-black-900_1e bottom-[3%] h-px inset-x-[0] mx-auto w-full" />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start mb-[7px] w-[47%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                              <div className="flex sm:flex-1 flex-col items-center justify-end py-[11px] w-[88%] sm:w-full">
                                <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-gray-600_01 text-sm"
                                      size="txtRobotoBold14Gray60001"
                                    >
                                      phone
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start pt-1 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-black-900_99 text-sm"
                                      size="txtRobotoRegular14Black90099"
                                    >
                                      Not specified
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="h-[60px]"
                                src="images/img_arrowright_black_900.svg"
                                alt="arrowright"
                              />
                            </div>
                            <Line className="bg-black-900_1e h-px mt-[3px] w-full" />
                          </div>
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly md:mt-0 mt-[11px] w-[47%] md:w-full">
                            <div className="flex flex-col items-center justify-end py-[11px] w-[88%] sm:w-full">
                              <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-gray-600_01 text-sm"
                                    size="txtRobotoBold14Gray60001"
                                  >
                                    Language
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start pt-1 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900_99 text-sm"
                                    size="txtRobotoRegular14Black90099"
                                  >
                                    English
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[60px]"
                              src="images/img_arrowright_black_900.svg"
                              alt="arrowright_One"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <Line className="bg-black-900_1e h-px md:ml-[0] ml-[491px] w-[42%]" />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start mb-[35px] rounded-[5px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start p-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtFuzzyBubblesRegular24"
                        >
                          Your Applications
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col font-roboto items-center justify-start py-1">
                        <Text
                          className="leading-[25.00px] mb-9 text-gray-600_01 text-lg w-full"
                          size="txtRobotoRegular18"
                        >
                          Here is the list of other applications with the
                          respective status to your Ladies.de account. If you
                          have a link, you can log in there with your account
                          credentials and use additional functions.
                        </Text>
                      </div>
                      <Button
                        className="border border-pink-700 border-solid cursor-pointer font-fuzzybubbles min-w-[68px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="pink_700"
                        size="sm"
                        variant="fill"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="border self-start border-pink-700 border-solid cursor-pointer font-fuzzybubbles mb-[180px] min-w-[68px]  mt-auto rounded-[3px] text-center text-sm z-[1]"
                shape="round"
                color="pink_700"
                size="sm"
                variant="fill"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwentyFivePage;
