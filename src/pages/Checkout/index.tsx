import React, { useEffect, useState } from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import { Link, useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isrotate, setRotate] = useState(false);
  const account = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ratedPage = () => {
    account("/dashboard");
  };

  const AccountPage = () => {
    account("/profile");
  };

  const Advert = () => {
    account("/advert");
  };
  const home = () => {
    account("/");
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

  const toggle = () => {
    setIsVisible(!isVisible);
    setRotate(!isrotate);
  };

  const rotate = {
    transform: isrotate ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all .5s ease-in-out",
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto py-[39px] w-full">
        <Header1 className="bg-white-A700 border-b border-gray-200_03 border-solid flex flex-col font-montserrat items-center justify-center md:px-5 w-full" />
        <div className="font-montserrat h-[1089px] sm:h-[1187px] md:h-[2214px] mt-[38px] md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[1032px] inset-x-[0] items-center justify-end mx-auto p-3 top-[0] w-full"
            style={{
              backgroundImage:
                "url('images/img_loginbannermasksvg_black_900.png')",
            }}
          >
            <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between mt-7 w-[97%] md:w-full">
              <div className="flex flex-col items-end justify-start pb-[22px] sm:pl-5 pl-[22px] w-[22%] md:w-full">
                <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-start mb-2 p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
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
                  <div className="flex flex-col items-center justify-start mb-[15px] w-full">
                    <div
                      className="flex flex-row items-center justify-start pr-[11px] w-full leftNav"
                      onClick={home}
                    >
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
                    <div className="flex flex-row items-center justify-between mt-2.5 pr-[11px] py-[11px] w-full">
                      <div className="flex items-center">
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
                      <div onClick={toggle} style={rotate}>
                        <Img
                          className="h-4 cursor"
                          src="images/img_arrowdown_gray_600_01.svg"
                          alt="arrowdown_One"
                        />
                      </div>
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
                        {isVisible && (
                          <div
                            className="leftNav flex flex-1 flex-col items-end justify-start py-2 mb-3 px-8 w-full"
                            onClick={Advert}
                          >
                            <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex gap-3 items-center">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/advert_logo.png"
                                    alt="advert icon"
                                  />
                                  <Text
                                    className="text-base text-gray-600_01"
                                    size="txtRobotoRegular16"
                                  >
                                    Advert Free
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </List>
                    </div>
                    <div
                      className="leftNav flex flex items-center justify-start py-2 w-full px-4 gap-3"
                      onClick={messages}
                    >
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
                      <div
                        className="flex flex-1 flex items-center justify-start w-full leftNav"
                        onClick={AccountPage}
                      >
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
                      </div>
                      <div
                        className="flex flex-1 flex items-center justify-start w-full leftNav"
                        onClick={member}
                      >
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
                        className="flex flex-1 flex items-center justify-start w-full leftNav"
                        onClick={ladiesStar}
                      >
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
                    <div
                      className="flex flex-row items-center justify-start px-5 py-2 w-full leftNav"
                      onClick={liveVideo}
                    >
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
              <div className="flex flex-col font-roboto justify-start md:mt-0 mt-[15px] w-[76%] md:w-full">
                <div className="bg-white-A700 h-28 rounded-[30px] w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[22px] mt-[26px] w-[69%] md:w-full">
                  <Text
                    className="mb-0.5 text-[22px] text-indigo-300 sm:text-lg md:text-xl"
                    size="txtRobotoRomanMedium22"
                  >
                    Order Summary
                  </Text>
                  <Img
                    className="h-6 ml-5 md:ml-[0]"
                    src="images/img_group5.svg"
                    alt="groupFive"
                  />
                  <Text
                    className="mb-0.5 ml-4 md:ml-[0] text-[22px] text-indigo-300 sm:text-lg md:text-xl"
                    size="txtRobotoRomanMedium22"
                  >
                    Payment method
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[55px] md:mt-0 mt-0.5"
                    src="images/img_group5.svg"
                    alt="groupFour"
                  />
                  <Text
                    className="ml-4 md:ml-[0] md:mt-0 mt-0.5 text-[22px] text-indigo-300 sm:text-lg md:text-xl"
                    size="txtRobotoRomanMedium22"
                  >
                    Payment
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-end justify-start ml-1.5 md:ml-[0] mr-7 mt-[35px] pl-10 sm:pl-5 py-10 rounded-[30px] w-[97%] md:w-full">
                  <div className="overflow-x-auto w-[53%]">
                    <div className="md:h-[581px] h-[585px] relative w-full">
                      <div className="md:h-[581px] h-[585px] ml-auto my-auto w-full">
                        <Img
                          className="absolute h-[581px] inset-y-[0] left-[0] my-auto object-cover w-3/4"
                          src="images/img_characterikbal.png"
                          alt="characterikbal"
                        />
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[59%]">
                          <Img
                            className="h-[312px] md:h-auto object-cover w-full"
                            src="images/img_objectother06.png"
                            alt="objectotherSix"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-40 object-cover right-[3%] top-[30%] w-[29%]"
                        src="images/img_image5.png"
                        alt="imageFive"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  className="flex h-14 items-center justify-center md:ml-[0] ml-[948px] mt-[42px] rounded-[50%] w-14"
                  shape="circle"
                  size="xl"
                  variant="gradient"
                  color="purple_400_02_purple_500_02"
                >
                  <Img
                    className="h-8"
                    src="images/img_arrowup_white_a700.svg"
                    alt="arrowup"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-poppins inset-x-[0] items-center justify-start mx-auto w-[38%]">
            <div className="flex flex-col gap-[26px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[97%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-300 sm:text-xl tracking-[0.48px]"
                  size="txtPoppinsBlack24"
                >
                  For payment:
                </Text>
                <div className="flex flex-col gap-1.5 h-[63px] md:h-auto items-end justify-start w-[225px]">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-800 text-right sm:text-xl tracking-[0.48px] w-auto"
                    size="txtPoppinsBlack24Bluegray800"
                  >
                    $140,55
                  </Text>
                  <Text
                    className="text-blue_gray-300 text-sm tracking-[0.28px] w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Including processing fee ($20)
                  </Text>
                </div>
              </div>
              <div className="font-spartan md:h-[658px] h-[702px] sm:h-[984px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[0.22px]"
                      size="txtSpartanRegular22"
                    >
                      Payment Method
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start ml-12 md:ml-[0] mt-[38px] w-[76%] md:w-full">
                      <Img
                        className="h-[33px] md:h-auto sm:mt-0 my-2 object-cover w-[33px]"
                        src="images/img_creditcard1.png"
                        alt="creditcardOne"
                      />
                      <div className="border-2 border-black-900 border-solid h-[18px] mb-3.5 sm:ml-[0] ml-[73px] sm:mt-0 mt-[18px] rounded-[50%] w-[18px]"></div>
                      <Img
                        className="h-[47px] md:h-auto sm:ml-[0] ml-[41px] sm:mt-0 mt-[3px] object-cover w-[15%] sm:w-full"
                        src="images/img_pngtransparent.png"
                        alt="pngtransparent"
                      />
                      <div className="border-2 border-black-900 border-solid h-[18px] mb-3.5 sm:ml-[0] ml-[54px] sm:mt-0 mt-[18px] rounded-[50%] w-[18px]"></div>
                      <Img
                        className="h-[50px] md:h-auto ml-9 sm:ml-[0] object-cover rounded-[10px] w-[19%] sm:w-full"
                        src="images/img_applepay13.png"
                        alt="applepayThirteen"
                      />
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-[63px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[0.22px]"
                      size="txtSpartanRegular22"
                    >
                      Payment Details
                    </Text>
                    <div className="flex justify-between h-[152px] ml-0.5 md:ml-[0] mt-[259px] relative w-full">
                      <div className="flex flex-col font-poppins h-[88px] md:h-auto items-center justify-start mb-[undefinedpx] w-1/2 z-[1]">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="md:h-6 h-[25px] relative w-[42%]">
                              <Text
                                className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-gray-800_08 tracking-[0.32px] w-max"
                                size="txtPoppinsBlack16"
                              >
                                Expiry date
                              </Text>
                            </div>
                            <Input
                              name="language_Three"
                              placeholder="MM   /   YYYY"
                              className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-left tracking-[0.80px] w-full"
                              wrapClassName="pb-[13px] pl-4 pr-[35px] pt-[18px] rounded-[16px] w-full"
                              color="gray_200_07"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins items-center justify-start mb-[-4.95px] ml-auto mr-[9px] pb-[9px] pl-[9px] w-1/2 z-[1] mt-1">
                        <div className="flex flex-col gap-1.5 justify-start mb-[18px] w-full">
                          <div className="flex flex-row gap-[11px] items-start justify-start ml-2 md:ml-[0] w-[49%] md:w-full">
                            <Text
                              className="text-base text-gray-800_08 tracking-[0.32px]"
                              size="txtPoppinsBlack16"
                            >
                              CVV/CVC
                            </Text>
                            <div className="h-5 md:h-[21px] mt-[3px] relative w-[17%]">
                              <div className="absolute bg-green-A400_6c h-[18px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[18px]"></div>
                              <Text
                                className="absolute bottom-[0] right-[28%] text-green-A400 text-xs tracking-[0.24px]"
                                size="txtPoppinsBold12"
                              >
                                ?
                              </Text>
                            </div>
                          </div>
                          <Input
                            name="fieldplaceholde"
                            placeholder="3-4 digits"
                            className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-300 text-base text-left tracking-[0.80px] w-full"
                            wrapClassName="rounded-[16px] w-full"
                            color="gray_200_07"
                            size="lg"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[140.80%] mt-auto mx-auto text-[15px] text-black-900_66 tracking-[0.15px] w-full"
                      size="txtSpartanRegular15"
                    >
                      By Clicking “Confirm Payment” I agree to the companies
                      term of services
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[35px] w-full">
                      <Button
                        className="cursor-pointer min-w-[193px] rounded-[10px] text-base text-center tracking-[0.16px]"
                        color="black_900"
                        size="2xl"
                        variant="outline"
                        onClick={() => account("/payment")}
                      >
                        Back
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[266px] rounded-[10px] text-base text-center tracking-[0.16px]"
                        color="orange_600"
                        size="xl"
                        variant="fill"
                      >
                        Confirm Payment: $44.88
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[38%] flex flex-col font-poppins gap-2 h-[88px] md:h-auto inset-x-[0] items-start justify-start mx-auto w-[530px] sm:w-full">
                  <Text
                    className="text-base text-gray-800_08 tracking-[0.32px] w-auto"
                    size="txtPoppinsBlack16"
                  >
                    Cardholder name
                  </Text>
                  <Input
                    name="fieldplaceholde_One"
                    placeholder="ex. Jonathan Paul Ive"
                    className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-left tracking-[0.32px] w-full"
                    wrapClassName="pb-3 pl-4 pr-[35px] pt-[19px] rounded-[16px] w-full"
                    color="gray_200_07"
                  ></Input>
                </div>
                <div className="absolute flex flex-col font-poppins gap-2 h-[88px] md:h-auto inset-x-[0] items-start justify-start mx-auto top-[34%] w-[528px] sm:w-full">
                  <Text
                    className="text-base text-gray-800_08 tracking-[0.32px] w-auto"
                    size="txtPoppinsBlack16"
                  >
                    Card number
                  </Text>
                  <Input
                    name="language_Four"
                    placeholder="0000   0000   0000    0000"
                    className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-300 text-base text-left tracking-[0.80px] w-full"
                    wrapClassName="flex pb-3 pt-4 px-4 rounded-[16px] w-full"
                    suffix={
                      <div className="ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-blue_gray-300">
                        <Img
                          src="images/img_television_blue_gray_300.svg"
                          alt="television"
                        />
                      </div>
                    }
                    color="gray_200_07"
                  ></Input>
                </div>
                <div className="absolute border-2 border-black-900 border-solid flex flex-col h-[18px] items-center justify-start left-[0] p-1 rounded-[50%] top-[12%] w-[18px]">
                  <div className="bg-black-900 border-2 border-black-900_02 border-solid h-2.5 rounded-[50%] w-2.5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-inter items-start justify-start right-[0] top-[7%] w-[74%]">
            <div className="flex flex-col items-start justify-start pb-0.5 pr-[5.92px] pt-[26px] w-auto">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl w-full"
                size="txtInterBold22"
              >
                Become a Premium member
              </Text>
            </div>
          </div>
        </div>
        <Text
          className="leading-[140.00%] mt-[38px] text-black-900 text-center text-xs tracking-[0.24px] w-1/4 sm:w-full"
          size="txtPoppinsRegular12"
        >
          We will send you an order details to your email after the successfull
          payment
        </Text>
        <div className="flex flex-col font-montserrat items-center justify-start max-w-[1349px] mb-[528px] mt-[95px] mx-auto md:px-5 w-full">
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
    </>
  );
};

export default Checkout;
