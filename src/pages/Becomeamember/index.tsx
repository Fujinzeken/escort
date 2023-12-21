import React, {useState} from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";
const BecomeamemberPage: React.FC = () => {
  const account = useNavigate();
  
  const ratedPage = () => {
    account('/DesktopThirtyThree')
  }

  const AccountPage = () => {
    account('/DesktopTwentyNine')
  }

  const Advert = () => {
    account('/A')
  }

  const messages = () => {
    account('/Meesages')
  }
  const [isVisible , setIsVisible] = useState(false);
  const [isrotate , setRotate] = useState(false)

  const toggle = () => {
    setIsVisible(!isVisible)
    setRotate(!isrotate)
  }

  const rotate = {
    transform: isrotate ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'all .5s ease-in-out'
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto pb-[88px] w-full">
        <Img
          className="h-[9px] sm:h-auto object-cover w-full"
          src="images/img_pseudo_9x1440.png"
          alt="pseudo"
        />
        <div className="md:h-[171px] h-[73px] sm:h-[85px] max-w-[1354px] mt-4 mx-auto md:px-5 relative w-full">
          <Header1 className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[] flex flex-col inset-x-[0] items-center justify-center mx-auto w-full" />

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
                      <div className="flex flex-col items-start justify-start px-[11px] w-1/2">
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
                      <div className="flex flex-col items-start justify-start pb-[11px] px-[11px] w-1/2">
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
               <div className="md:h-[917px] h-[952px] relative w-[22%] md:w-full z-50">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[100%]">
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
                        className="cursor-pointer font-medium mb-[3rem] min-w-[227px] mt-[15px] rounded-[17px] text-center text-sm"
                        color="pink_50"
                        size="md"
                        variant="outline"
                      >
                        Increase Popularity
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[22%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[96%]">
                  <div className="leftNav flex flex-row items-center justify-start px-4 w-full">
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
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className=" mt-2 h-14 relative w-full">
                      <Img
                        className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                        src="images/img_divvlistitemiconmargin.svg"
                        alt="divvlistitemico"
                      />
                      <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%]">
                        <div className="flex flex-col items-center justify-start py-4 w-[84%]">
                          <div className=" flex flex-col items-start justify-start w-full">
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
                        <section  style={rotate} onClick={toggle}>
                          <Img                  
                            className="h-4 cursor"
                            src="images/img_arrowdown_gray_600_01.svg"
                            alt="arrowdown_One"
                          />
                        </section>
                      </div>
                      <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                    </div>
                    { isVisible && <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div onClick={messages} className=" leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                          <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                >
                                  Messages
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                          <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                  onClick={Advert}
                                >
                                  Advert free
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div onClick={ratedPage} className="rated flex flex-col justify-start w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] py-4 w-[100%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtRobotoBold16"
                              >
                                18 + content
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="none bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                      </div>
                    </div> }
                  </div>
                  <List
                    className="flex flex-col gap-4 items-center mb-4 w-full"
                    orientation="vertical"
                  >
                    <div className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full">
                      <Img
                        className="h-14 w-14"
                        src="images/img_lock_gray_600_01.svg"
                        alt="lock"
                      />
                      <div onClick = {AccountPage} className="cursor flex flex-col items-center justify-start py-4 w-[79%]">
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
                    <div className="leftNav active flex flex-1 flex-row items-center justify-start px-4 w-full">
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
                    <div className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full">
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
                    </div>
                    <div className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full">
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
                    </div>
                    <div className="leftNav flex flex-1 flex-col font-montserrat items-center justify-end p-[5px] w-full">
                      <div className="flex flex-row items-center justify-start pr-[11px] py-[11px] w-[82%] md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_user_gray_800.svg"
                          alt="user"
                        />
                        <Text
                          className="text-base text-gray-800"
                          size="txtMontserratRegular16Gray800"
                        >
                          Live Videos
                        </Text>
                      </div>
                    </div>
                  </List>
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
            <div className="flex flex-col font-roboto gap-4 items-center justify-start  mt-[27px] pl-3 py-3 w-[77%] z-[1]">
              <div className="flex flex-col gap-6 items-center justify-start mt-9 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[11px] items-end justify-start py-0.5 w-[70%] md:w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-600_01"
                      size="txtRobotoBold26"
                    >
                      Become a customer
                    </Text>
                    <Text
                      className="mb-0.5 mt-[11px] text-[15px] text-indigo-A400 underline"
                      size="txtRobotoRegular15IndigoA400"
                    >
                      Help
                    </Text>
                  </div>
                </div>
                <Line className="bg-black-900_1e h-px w-full" />
              </div>
              <div className="md:h-[552px] h-[660px] relative w-full">
                <div className=" flex flex-col items-center justify-start left-[1%] top-[0] w-[94%]">
                  <div className="flex flex-col gap-2 items-center justify-end p-[11px] w-full">
                    <div className="flex flex-col items-start justify-end pr-[3px] py-[3px]">
                      <Text
                        className="text-gray-600_01 text-sm"
                        size="txtRobotoBold14Gray60001"
                      >
                        Simply become a customer!
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start pt-[3px]">
                      <Text
                        className="leading-[25.00px] text-gray-600_01 text-sm w-full"
                        size="txtRobotoRegular14Gray60001"
                      >
                        Become a Ladies.de customer in just a few clicks. New
                        and existing customers can upgrade their Ladies.de user
                        account to a customer account free of charge and thus
                        gain accessto new functions.
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="  flex items-center gap-6 w-full">
                  <div className="flex flex-col items-start justify-end my-auto sm:pr-5 w-[53%]">
                    <div className="flex flex-col items-end justify-start  w-full">
                      <div className=" w-full">
                        <div className="flex flex-col justify-start w-full">
                          <div className="md:h-[244px] h-[222px] relative w-full sm:w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-[94%]">
                              <Img
                                className="h-[244px] md:h-auto object-cover w-full"
                                src="images/img_divvimageimage_244x510.png"
                                alt="divvimageimage_One"
                              />
                            </div>
                            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                              <div className="flex flex-col items-start justify-start p-[9px] w-full">
                                <div className="h-[212px] md:h-[226px] mb-3.5 md:ml-[0] ml-[59px] relative w-[41%]">
                                  <div className="absolute h-[205px] md:h-[212px] inset-[0] justify-center m-auto w-[97%]">
                                    <div className="bg-white-A700_ab h-[212px] m-auto w-full"></div>
                                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-center text-gray-600_01 text-xl"
                                          size="txtRobotoBold20"
                                        >
                                          New client
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex flex-col items-center justify-start py-3 w-full">
                                          <div className="flex flex-col items-center justify-start px-[9px] w-full">
                                            <Text
                                              className="text-center text-gray-600_01 text-sm"
                                              size="txtRobotoRegular14Gray60001"
                                            >
                                              I would like to place an
                                            </Text>
                                            <Text
                                              className="text-center text-gray-600_01 text-sm"
                                              size="txtRobotoRegular14Gray60001"
                                            >
                                              advertisement on Ladies.de
                                            </Text>
                                          </div>
                                        </div>
                                        <Img
                                          className="h-[79px]"
                                          src="images/img_divdescriptionicon.svg"
                                          alt="divdescriptioni"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Button
                                    className="absolute flex h-6 items-center justify-center left-[0] rounded-[50%] top-[0] w-6"
                                    shape="circle"
                                    color="red_400_02"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <Img
                                      className="h-[15px]"
                                      src="images/img_close_white_a700.svg"
                                      alt="close"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[19px] w-[99%] md:w-full">
                            <div className="flex flex-col items-center justify-start pt-6 full] md:w-full">
                              <div className="flex flex-col gap-2 items-center justify-start pb-[92px] w-full">
                                <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-full">
                                  <Text
                                    className="text-gray-600_01 text-sm"
                                    size="txtRobotoBold14Gray60001"
                                  >
                                    Become a new customer at Ladies.de now!
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start pr-1 pt-1 w-full">
                                  <Text
                                    className="leading-[25.00px] text-gray-600_01 text-sm"
                                    size="txtRobotoRegular14Gray60001"
                                  >
                                    <>
                                      Becoming a customer at Ladies.de has never
                                      been easier! From new customer
                                      <br />
                                      registration to contacting our account
                                      managers in just a few clicks!
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>

                            <div className="flex md:flex-1 flex-col items-start justify-start w-[99%] md:w-full">
                              <Button
                                className="border border-orange-600 border-solid cursor-pointer leading-[normal] w-[400px] sm:min-w-full rounded-[3px] text-center text-sm"
                                shape="round"
                                color="orange_600"
                                size="md"
                                variant="fill"
                              >
                                Continue as a new customer
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-start ml-[-47px] my-auto py-6 w-[52%] z-[1]">
                    <div className=" w-full">
                      <div className="flex flex-col justify-start  w-full">
                        <div className="md:h-[244px] h-[468px] relative w-full">
                          <div className="absolute md:h-[244px] h-[245px] inset-x-[0] mx-auto top-[0] w-[99%] sm:w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-[87%]">
                              <Img
                                className="h-[244px] md:h-auto object-cover w-full"
                                src="images/img_divvimageimage_244x474.png"
                                alt="divvimageimage_Two"
                              />
                            </div>
                            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                              <div className="flex flex-col items-start justify-start p-[9px] w-full">
                                <div className="h-[212px] md:h-[226px] mb-3.5 md:ml-[0] ml-[70px] relative w-[41%]">
                                  <div className="absolute h-[205px] md:h-[212px] inset-[0] justify-center m-auto w-[97%]">
                                    <div className="bg-white-A700_ab h-[212px] m-auto w-full"></div>
                                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-center text-gray-600_01 text-xl"
                                          size="txtRobotoBold20"
                                        >
                                          I am a client
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex flex-col items-center justify-start py-3 w-full">
                                          <div className="flex flex-col items-center justify-start sm:px-5 px-[27px] w-full">
                                            <Text
                                              className="text-center text-gray-600_01 text-sm"
                                              size="txtRobotoRegular14Gray60001"
                                            >
                                              I already place ads on
                                            </Text>
                                            <Text
                                              className="text-center text-gray-600_01 text-sm"
                                              size="txtRobotoRegular14Gray60001"
                                            >
                                              Ladies.de
                                            </Text>
                                          </div>
                                        </div>
                                        <Img
                                          className="h-[79px]"
                                          src="images/img_divdescriptionicon_gray_600_01.svg"
                                          alt="divdescriptioni_One"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Button
                                    className="absolute flex h-6 items-center justify-center left-[0] rounded-[50%] top-[0] w-6"
                                    shape="circle"
                                    color="green_400_01"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <Img
                                      src="images/img_checkmark_white_a700.svg"
                                      alt="checkmark"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[20%] flex flex-col items-center justify-end pt-6 right-[0] w-[89%]">
                            <div className="flex flex-col gap-2 items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-full">
                                <Text
                                  className="text-gray-600_01 text-sm"
                                  size="txtRobotoBold14Gray60001"
                                >
                                  Upgrade Ladies.de account to Ladies.de login
                                  customer account now!
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start pr-1 pt-1">
                                <Text
                                  className="leading-[25.00px] text-gray-600_01 text-sm w-[99%] sm:w-full"
                                  size="txtRobotoRegular14Gray60001"
                                >
                                  Control and overview of your own Ladies.de
                                  account - as an existing customer simply
                                  upgrade your customer account!
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-9 relative mt-[4px] w-full md:w-full">
                          <div className="absolute bg-orange-600 border border-orange-600 border-solid h-9 inset-[0] justify-center m-auto rounded-[3px] w-[94%]"></div>
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto md:px-10 sm:px-5 w-full">
                            <Text
                              className="text-center text-sm text-white-A700"
                              size="txtRobotoRegular14"
                            >
                              Continue as existing customer
                            </Text>
                          </div>
                        </div>
                      </div>
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

export default BecomeamemberPage;
