import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import { Link, useNavigate } from "react-router-dom";

const APage: React.FC = () => {
  const account = useNavigate();
  const token = localStorage.getItem("token");
  const [isHidden, setisHidden] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleToggle = () => {
    setisHidden(!isHidden);
  };
  const AccountPage = () => {
    account("/profile");
  };

  const messages = () => {
    account("/messages");
  };

  const ratedPage = () => {
    account("/dashboard");
  };

  const member = () => {
    account("/Becomeamember");
  };

  const settings = () => {
    account("/DesktopFourtyNine");
  };
  const liveVid = () => {
    account("/live-video");
  };

  const ladies = () => {
    account("/ladies-star");
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isrotate, setRotate] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
    setRotate(!isrotate);
  };

  const rotate = {
    transform: isrotate ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all .5s ease-in-out",
  };

  useEffect(() => {
    if (!token) {
      account("/login");
    }
  }, []);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-[42px] items-center justify-start mx-auto w-full">
        <div className="sm:h-[1265px] h-[1510px] md:h-[1980px] md:px-5 w-full md:w-full">
          <div className="advert absolute bottom-[0] left-[23%] flex flex-col items-center justify-center  w-[79%] md:w-full sm:w-full sm:left-[10%]">
            <div className="flex flex-col gap-[34px] items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-end justify-start w-[50%] md:w-full sm:w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-600_01"
                      size="txtRobotoBold26"
                    >
                      Advert free
                    </Text>
                    <Text
                      className="mb-0.5 mt-3 text-[15px] text-indigo-A400"
                      size="txtRobotoRegular15IndigoA400"
                    >
                      Help
                    </Text>
                  </div>
                </div>
                <Line className="bg-black-900_1e h-px w-full" />
              </div>
              <div className="flex flex-col justify-start w-[97%] md:w-full sm:w-[100%]">
                <div className="flex flex-col gap-2 items-center justify-start ml-3 md:ml-[0] w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-[5px] py-[5px] w-full">
                    <Text
                      className="mb-0.5 text-base text-gray-600_01 tracking-[0.20px]"
                      size="txtRobotoBold16Gray60001"
                    >
                      Status of the ad-free feature
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end w-full sm:w-[90%]">
                    <Text
                      className="text-gray-600_01 text-sm"
                      size="txtRobotoRegular14Gray60001"
                    >
                      Here you can always see the current status of the ad-free
                      feature. Discreetly enjoy the advantages and exclusive
                      content free of advertising on Ladies.de.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-1 w-full">
                  <div className="flex flex-col items-start justify-start w-[84%] md:w-full sm:w-[80%]">
                    <div className="flex flex-col items-center justify-end pt-3 px-3 w-[73%] md:w-full">
                      <Input
                        name="alert"
                        placeholder="The ad-free feature is not activated"
                        className="p-0 placeholder:text-red-A700_01 text-left text-sm w-full sm:w-[80%]"
                        wrapClassName="flex rounded-[3px] w-full"
                        prefix={
                          <Img
                            className="my-auto"
                            src="images/img_thumbsup.svg"
                            alt="thumbs_up"
                          />
                        }
                        shape="round"
                        color="gray_600_01"
                        size="3xl"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                  <Line className="bg-black-900_1e h-px ml-3 md:ml-[0] mt-10 w-[95%]" />
                  <div className="flex flex-col gap-[13px] justify-start mt-10 w-[96%] md:w-full">
                    <div className="flex flex-col gap-9 items-center justify-start ml-3 md:ml-[0] w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-full">
                        <Text
                          className="text-gray-600_01 text-xl tracking-[0.25px]"
                          size="txtRobotoBold20"
                        >
                          Select ad-free feature duration
                        </Text>
                      </div>
                      <div className="flex flex-col w-full gap-4">
                        <div className="flex items-center w-[100%] gap-5 px-2">
                          <input
                            type="radio"
                            id="myRadioButton"
                            className="hidden"
                          />

                          <label
                            htmlFor="myRadioButton"
                            className="inline-block checkmark rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 checked:bg-blue-500"
                          ></label>

                          <div className="w-[100%] border px-4 border-gray-600_03 border-solid flex md:gap-5 items-start justify-between p-[9px] rounded-[3px] sm:flex sm:w-[100%] sm:mr-[70px]">
                            <Text
                              className="mb-[3px] md:text-3xl sm:text-[18px] text-[32px] text-gray-600_01"
                              size="txtRobotoLight32"
                            >
                              1 month
                            </Text>

                            <Text
                              className="mb-0.5 md:text-3xl sm:text-[18px] text-[32px] text-gray-600_01"
                              size="txtRobotoBold32"
                            >
                              2.95 €
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center w-[100%] gap-5 px-2">
                          <input
                            type="radio"
                            id="myRadioButton"
                            className="hidden"
                          />

                          <label
                            htmlFor="myRadioButton"
                            className="inline-block checkmark rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 checked:bg-blue-500"
                          ></label>

                          <div className="w-[100%] border px-4 border-gray-600_03 border-solid flex md:gap-5 items-start justify-between p-[9px] rounded-[3px] sm:flex sm:w-[100%] sm:mr-[70px]">
                            <Text
                              className="mb-[3px] md:text-3xl sm:text-[18px] text-[32px] text-gray-600_01"
                              size="txtRobotoLight32"
                            >
                              3 months
                            </Text>

                            <Text
                              className="mb-0.5 md:text-3xl sm:text-[18px] text-[32px] text-gray-600_01"
                              size="txtRobotoBold32"
                            >
                              72.95 €
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center w-[100%] gap-5 px-2">
                          <input
                            type="radio"
                            id="myRadioButton"
                            className="hidden"
                          />

                          <label
                            htmlFor="myRadioButton"
                            className="inline-block checkmark rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 checked:bg-blue-500"
                          ></label>

                          <div className="w-[100%] border px-4 border-gray-600_03 border-solid flex md:gap-5 items-start justify-between p-[9px] rounded-[3px] sm:flex sm:w-[100%] sm:mr-[70px]">
                            <Text
                              className="mb-[3px] md:text-3xl sm:text-[18px] text-[32px] text-gray-600_01"
                              size="txtRobotoLight32"
                            >
                              1 year
                            </Text>

                            <Text
                              className="mb-0.5 md:text-3xl sm:text-[18px] text-[32px] text-gray-600_01"
                              size="txtRobotoBold32"
                            >
                              229.95 €
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[96%] md:w-full sm:w-4/5 sm:items-center sm:justify-center">
                      <div className="flex flex-col items-center justify-start pl-3 py-3 w-[50%] md:w-full sm:w-full sm:flex sm:items-center sm:justify-center">
                        <Button
                          className="border border-orange-600 border-solid cursor-pointer leading-[normal] w-[80%] sm:min-w-full rounded-[3px] text-center text-sm sm:ml-8"
                          shape="round"
                          color="orange_600"
                          size="md"
                          variant="fill"
                        >
                          Buy ad-free feature
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-black-900_1e h-px ml-3 md:ml-[0] mt-[27px] w-[95%]" />
                  <div className="flex flex-col items-start justify-end ml-3 md:ml-[0] mt-6 pr-[5px] py-[5px]">
                    <Text
                      className="text-base text-gray-600_01 tracking-[0.20px]"
                      size="txtRobotoBold16Gray60001"
                    >
                      Your advantages:
                    </Text>
                  </div>
                  <div className="flex gap-5 px-4 mt-7 sm:justify-center sm:flex-col sm:gap-6">
                    <div className="flex flex-col gap-4 w-1/2 px-5 sm:w-[80%] ">
                      <Img
                        className="h-[138px] md:h-auto object-cover w-full"
                        src="images/img_divvimageimage_138x285.png"
                        alt="divvimageimage"
                      />

                      <Text
                        className="text-gray-600_01 text-sm"
                        size="txtRobotoBold14Gray60001"
                      >
                        Enjoy Ladies.de ad-free
                      </Text>

                      <Text
                        className="leading-[25.00px] mt-[9px] text-gray-600_01 text-sm w-full"
                        size="txtRobotoRegular14Gray60001"
                      >
                        Enjoy Ladies.de without annoying ads! You will no longer
                        see webcam, sex chat, phone sex ads, third-party ads or
                        national banners.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 w-1/2 px-5 sm:w-[80%] ">
                      <Img
                        className="h-[136px] md:h-auto object-cover w-full"
                        src="images/img_divvimageimage_136x308.png"
                        alt="divvimageimage_One"
                      />

                      <Text
                        className="text-gray-600_01 text-sm"
                        size="txtRobotoBold14Gray60001"
                      >
                        Simply transparent prices
                      </Text>

                      <Text
                        className="leading-[25.00px] text-gray-600_01 text-sm w-[92%] sm:w-full"
                        size="txtRobotoRegular14Gray60001"
                      >
                        No subscription, no automatic renewal, no hidden costs!
                        Your advertising freedom is available with different,
                        fixed terms from one to twelve months. You have the
                        choice!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-100_03 hidden bottom-[4%] h-[100px] left-[18%] rounded-[50%] w-[100px]"></div>
          <div
            className="absolute bg-cover bg-center bg-no-repeat flex flex-col font-montserrat h-[1210px] inset-x-[0] items-center justify-start mx-auto pl-0.5 py-0.5 top-[0] w-full"
            style={{ backgroundImage: "url('images/img_group78.png')" }}
          >
            <div className="flex flex-col items-center justify-start mb-[50px] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-[97%] md:w-full">
                  <div className="md:h-[155px] sm:h-[69px] h-[76px] relative w-[98%] md:w-full">
                    <Header1 className="absolute bg-white-A700 border-b border-gray-200_03 top-[25%] border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto w-full" />
                  </div>
                  <button
                    className={`hidden sm:flex absolute top-[60px] left-[5px] flex items-center justify-center w-[10%] border p-3 rounded-full`}
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
                    className={` sm:${
                      isHidden
                        ? "hidden"
                        : "w-4/5 absolute left-0 top-[10%] ml-[-20px]"
                    } md:${
                      isHidden ? "hidden" : "w-4/5 md:flex-col md:gap-12"
                    }flex flex-row items-start justify-between w-full`}
                  >
                    <div className="md:h-[917px] h-[952px] relative w-[22%] md:w-full">
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
                                {user?.firstName}
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
                      <div className="absolute top-[23%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[92%]">
                        <div className="leftNav flex flex-row items-center justify-start px-4 w-full">
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
                              <section onClick={toggle} style={rotate}>
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
                                <div className="leftNav flex flex-1 flex-col items-end justify-start active my-0 px-4 w-full">
                                  <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <div className="flex flex-col items-center justify-start">
                                        <Link
                                          to="/advert"
                                          className="flex gap-3"
                                        >
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
                              )}
                              <div
                                onClick={messages}
                                className="leftNav flex flex-1 flex-col items-center justify-start my-0 px-2 w-full"
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
                                        Messages
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </List>
                            <Line className=" bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                          </div>
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
                            <div
                              onClick={AccountPage}
                              className=" cursor flex flex-col items-center justify-start py-4 w-[79%]"
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
                            onClick={member}
                            className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full"
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
                            className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full"
                            onClick={ladies}
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

                          <div
                            className="leftNav flex flex-1 flex-col font-montserrat items-center justify-end p-[5px] w-full"
                            onClick={liveVid}
                          >
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
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[553px] hidden justify-start md:mt-0 mt-[351px] w-3/4 md:w-full">
                      <Img
                        className="h-6 rounded-bl-sm rounded-br-sm"
                        src="images/img_divlwadblockh90.svg"
                        alt="divlwadblockhNinety"
                      />
                      <Button
                        className="flex h-14 items-center justify-center md:ml-[0] ml-[966px] rounded-[50%] w-14"
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
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full sm:mt-[300px]">
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
                      <div
                        onClick={settings}
                        className="cursor flex flex-col items-start justify-end pr-1.5 py-1.5"
                      >
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Settings
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items- justify-start pb-[11px] px-[11px] w-1/2">
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

export default APage;
