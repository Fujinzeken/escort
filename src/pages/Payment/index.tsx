import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import { Link } from "react-router-dom";

const Payment: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat justify-start mx-auto py-[39px] w-full">
        <div className="flex flex-col gap-[38px] items-center w-full">
          <Header1 className="bg-white-A700 border-b border-gray-200_03 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="h-[1087px] sm:h-[1391px] md:h-[1500px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[1032px] inset-x-[0] items-center justify-center mx-auto pt-[23px] sm:px-5 px-[23px] top-[0] w-full"
              style={{
                backgroundImage:
                  "url('images/img_loginbannermasksvg_black_900.png')",
              }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[34px] w-[97%] md:w-full">
                <div className="md:h-[917px] h-[952px] md:mt-0 mt-[23px] relative w-[23%] md:w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[93%]">
                    <div className="flex flex-col items-start justify-start mb-[674px] w-full">
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
                  </div>
                  <div className="absolute bottom-[3%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[96%]">
                    <div className="  cursor-pointer hover:bg-gray-500 flex flex-row items-center justify-start px-4 w-full">
                      <Link to="/" className="flex">
                        <Img
                          className="h-14 w-14"
                          src="images/img_home.svg"
                          alt="home"
                        />
                        <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-gray-600_01"
                                size="txtRobotoRegular16"
                              >
                                Home page
                              </Text>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-14 relative w-full hover:bg-gray-500 cursor-pointer">
                        <Img
                          className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                          src="images/img_divvlistitemiconmargin.svg"
                          alt="divvlistitemico"
                        />
                        <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%] ">
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
                          <Img
                            className="h-4"
                            src="images/img_arrowdown_gray_600_01.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                        <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
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
                          <div className="flex flex-1 flex-col items-end justify-start my-0 px-8 w-full cursor-pointer hover:bg-gray-500 py-3">
                            <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-3 items-center">
                                  <Link to="advert" className="flex gap-3">
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
                      <div className="flex flex-row items-center justify-start mt-5 py-[11px] px-4 w-full pl-8 gap-3 cursor-pointer hover:bg-gray-500 ">
                        <Link to="message" className="flex gap-3">
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
                      <div className=" flex flex-col justify-start w-full">
                        <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-4 items-center mb-4 w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row px-4 items-center justify-start w-full cursor-pointer hover:bg-gray-500">
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
                      <div className="flex flex-1 flex-row items-center justify-start px-4 w-full cursor-pointer hover:bg-gray-500">
                        <Link to="" className="flex">
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
                        </Link>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start px-4 w-full hover:bg-gray-500">
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
                                  className="text-base text-gray-600_01"
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
                    </List>
                  </div>
                </div>
                <div className="flex flex-col font-opensans gap-[30px] justify-start ml-1 md:ml-[0] w-[78%] md:w-full">
                  <div className="bg-white-A700 h-28 rounded-[30px] w-full"></div>
                  <div
                    className=" bg-no-repeat flex flex-col h-[400px] items-end justify-start ml-4 md:ml-[0] md:pl-10 sm:pl-5 pl-[362px] w-[77%] md:w-full"
                    style={{ backgroundImage: "url('images/img_section.png')" }}
                  >
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="flex w-full flex-col items-center justify-start md:w-full">
                        <div className="flex w-full flex-col items-center justify-start sm:px-5 px-[26px] w-full">
                          <Text
                            className="leading-[32.00px] md:text-3xl sm:text-[28px] text-[32px] text-center text-red-A700_02 uppercase"
                            size="txtOpenSansBold32"
                          >
                            <>
                              Ready for a private
                              <br />
                              show?
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col relative w-[96%] sm:w-full">
                        <div className="flex flex-col items-center justify-start mx-auto px-1 w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-500_02 sm:text-xl mt-2"
                            size="txtOpenSansRegular24"
                          >
                            Upgrade to Premium Membership!
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[-9.2px] mx-auto w-full z-[1]">
                          <div className="flex flex-col items-center justify-start py-[35px] w-full">
                            <div className="flex flex-col items-center justify-start pb-[15px] w-full">
                              <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 w-full">
                                <Img
                                  className="h-[30px]"
                                  src="images/img_before.svg"
                                  alt="before"
                                />
                                <Text
                                  className="mb-[3px] mt-1.5 text-gray-500_02 text-sm w-full"
                                  size="txtOpenSansRegular14"
                                >
                                  Hot private shows and intimate 1-on-1 chat
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start pb-[15px] w-full">
                              <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 w-full">
                                <Img
                                  className="h-[25px]"
                                  src="images/img_before_gray_500_03.svg"
                                  alt="before_One"
                                />
                                <Text
                                  className="mt-1 text-gray-500_02 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  Send Surprise
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 w-full">
                              <Img
                                className="h-[25px]"
                                src="images/img_before_gray_500_03_25x55.svg"
                                alt="before_Two"
                              />
                              <Text
                                className="mt-1 text-gray-500_02 text-sm flex"
                                size="txtOpenSansRegular14"
                              >
                                Peek into any private room
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-[15px] w-[96%] md:w-full">
                        <div className="flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 w-full">
                          <Button
                            className="cursor-pointer font-bold min-w-[238px] text-center text-sm"
                            shape="square"
                            color="red_A700_02"
                            size="lg"
                            variant="fill"
                          >
                            Become a Premium Member
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-center text-gray-500_02 text-xs"
                          size="txtOpenSansRegular12"
                        >
                          <span className="text-gray-500_02 font-opensans font-normal">
                            Not ready to upgrade yet?{" "}
                          </span>
                          <span className="text-amber-A400 font-opensans font-normal cursor-pointer">
                            Continue as a Basic Member
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-inter items-start justify-start right-[0] top-[8%] w-[76%]">
              <div className="flex flex-col items-start justify-start pb-0.5 pr-[5.92px] pt-[26px] w-auto">
                <Text
                  className="text-[22px] text-black-900 sm:text-lg md:text-xl w-full"
                  size="txtInterBold22"
                >
                  Become a Premium member
                </Text>
              </div>
            </div>
            {/* <List
              className="absolute bottom-[0] sm:flex-col flex-row font-opensans gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 right-[14%] w-3/5"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-end pt-[53px] w-full">
                <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                  <div className="bg-gray-800_06 flex flex-col items-center justify-start py-10 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start pt-[13px] w-full">
                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px] w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-amber-A400 text-center"
                          size="txtOpenSansBold36"
                        >
                          27.99
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start py-1 w-full">
                      <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[73px] w-full">
                        <Text
                          className="text-center text-gray-500_03 text-sm uppercase"
                          size="txtOpenSansBold14"
                        >
                          Credits
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[119px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="red_A700_02"
                        size="lg"
                        variant="fill"
                      >
                        Buy Credits
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[19px] md:px-10 sm:px-5 px-[70px] w-full">
                      <Text
                        className="text-amber-A400 text-center text-lg"
                        size="txtOpenSansBold18"
                      >
                        $ 50.99
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end pl-[15px] pt-[15px] w-full">
                <div className="flex flex-col items-center justify-start mt-[38px] rounded-[5px] w-full">
                  <div className="bg-gray-800_06 flex flex-col items-center justify-start py-10 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start pt-[13px] w-full">
                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px] w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-amber-A400 text-center"
                          size="txtOpenSansBold36"
                        >
                          67.99
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start py-1 w-full">
                      <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[73px] w-full">
                        <Text
                          className="text-center text-gray-500_03 text-sm uppercase"
                          size="txtOpenSansBold14"
                        >
                          Credits
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[119px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="red_A700_02"
                        size="lg"
                        variant="fill"
                      >
                        Buy Credits
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[19px] md:px-10 sm:px-5 px-[65px] w-full">
                      <Text
                        className="text-amber-A400 text-center text-lg"
                        size="txtOpenSansBold18"
                      >
                        $ 112.99
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end pl-[15px] pt-[15px] w-full">
                <div className="flex flex-col items-center justify-start mt-[38px] rounded-[5px] w-full">
                  <div className="bg-gray-800_06 flex flex-col items-center justify-start py-10 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start pt-[13px] w-full">
                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px] w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-amber-A400 text-center"
                          size="txtOpenSansBold36"
                        >
                          97.99
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start py-1 w-full">
                      <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[73px] w-full">
                        <Text
                          className="text-center text-gray-500_03 text-sm uppercase"
                          size="txtOpenSansBold14"
                        >
                          Credits
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[119px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="red_A700_02"
                        size="lg"
                        variant="fill"
                      >
                        Buy Credits
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[19px] md:px-10 sm:px-5 px-[65px] w-full">
                      <Text
                        className="text-amber-A400 text-center text-lg"
                        size="txtOpenSansBold18"
                      >
                        $ 165.99
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end pl-[15px] pt-[15px] w-full">
                <div className="flex flex-col items-center justify-start mt-[38px] rounded-[5px] w-full">
                  <div className="bg-gray-800_07 flex h-[298px] justify-end relative rounded-[5px] w-full">
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pt-[13px] top-[13%] w-full">
                      <div className="flex flex-col items-center justify-start md:px-10 px-11 sm:px-5 w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-amber-A400 text-center"
                          size="txtOpenSansBold36"
                        >
                          157.99
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto py-1 top-[32%] w-full">
                      <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[73px] w-full">
                        <Text
                          className="text-center text-gray-500_03 text-sm uppercase"
                          size="txtOpenSansBold14"
                        >
                          Credits
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[28%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[22px] sm:px-5 w-full">
                      <div className="bg-red-A700_02 flex flex-col items-center justify-end p-2 rounded-[3px] shadow-bs">
                        <Text
                          className="mt-0.5 text-center text-sm text-white-A700"
                          size="txtOpenSansBold14WhiteA700"
                        >
                          Buy Credits
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-full items-center justify-start mb-[59px] mt-auto mx-auto md:px-10 sm:px-5 px-[65px] w-full">
                      <Text
                        className="text-amber-A400 text-center text-lg"
                        size="txtOpenSansBold18"
                      >
                        $ 265.99
                      </Text>
                    </div>
                    <div className="absolute h-[298px] inset-[0] justify-center m-auto rounded-[5px] shadow-bs14 w-full"></div>
                  </div>
                </div>
              </div>
            </List> */}
          </div>
        </div>
        <div className="flex flex-col font-opensans items-end md:px-10 sm:px-5 px-[178px] w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start mr-[30px] py-[30px] w-4/5 md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-[11px] text-black-900 text-center"
                size="txtOpenSansRegular11"
              >
                <span className="text-black-900 font-opensans font-normal">
                  Choose another payment type or go to{" "}
                </span>
                <span className="text-black-900 font-opensans font-normal">
                  Payment Methods
                </span>
              </Text>
            </div>
            <div className="flex flex-col font-montserrat items-center justify-start p-2.5 w-full">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[120px] rounded-[3px] text-[11px] text-black-900 text-center"
                shape="round"
                size="xl"
              >
                NEXT
              </Button>
            </div>
          </div>
          <Line className="bg-black-900_33 h-px w-[85%]" />
        </div>
        <div className="flex flex-col font-montserrat items-center mb-[456px] mt-[95px] sm:px-5 px-[35px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
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
        </div>
      </div>
    </>
  );
};

export default Payment;
