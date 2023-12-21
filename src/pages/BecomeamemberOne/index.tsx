import React, { useState } from "react";
import settings from 'assets/images/GalleryAssets/settings.svg'
import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";

const BecomeamemberOnePage: React.FC = () => {
  const account = useNavigate();

  const AccountPage = () => {
    account('/DesktopTwentyNine')
  }

  const messages = () => {
    account('/Meesages')
  }

  const ratedPage = () => {
    account('/DesktopThirtyThree')
  }

  const Advert = () => {
    account('/A')
  }

  const [isVisible, setIsVisible] = useState(false);
  const [isrotate, setRotate] = useState(false)

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
      <div className="bg-white-A700 flex flex-col font-montserrat justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="sm:h-[1149px] h-[1233px] md:h-[1336px] md:px-5 relat w-full">
            {/* <Line className="absolute bg-black-900_1e h-px right-[0] top-[42%] w-[72%]" />
            <Line className="absolute bg-black-900_1e bottom-[17%] h-px right-[0] w-[72%]" /> */}
            <div className=" flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <Img
                  className="h-2.5 hidden md:h-auto object-cover w-full"
                  src="images/img_pseudo_2.png"
                  alt="pseudo"
                />
                <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-[97%] md:w-full">
                  <div className="md:h-[155px] sm:h-[69px] h-[76px] relative w-[98%] md:w-full">
                    <Header1 className=" bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto w-full" />
                    <div className=" flex hidden flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
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
                  <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-full">
                    <div className="md:h-[917px] h-[952px] relative w-[22%] md:w-full">
                      <div style={{boxShadow: '1px 2px 11px lightgrey'}} className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[93%]">
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
                      <div className="absolute top-[23%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[92%]">
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
                          {isVisible && <div className="flex flex-col items-center justify-start w-full">
                            <List
                              className="flex flex-col gap-px items-center w-full"
                              orientation="vertical"
                            >
                              <div onClick={messages} className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
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
                            <div className="rated mt-2 bg-orange-600 flex flex-col justify-start w-full">
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
                          </div>}
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
                            <div onClick={AccountPage} className=" cursor flex flex-col items-center justify-start py-4 w-[79%]">
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
                          <div className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full">
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
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[553px] justify-start md:mt-0 w-3/4 md:w-full">
                      {/* <Img
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
                      </Button> */}
                      <div
                        className="bg-cover bg-no-repeat flex inset-[0] justify-between m-auto md:pl-10 sm:pl-5 w-full"
                        style={{ backgroundImage: "url('images/img_group51.png')" }}
                      >
                        <div className="flex flex-col items-center justify-start w-[50%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                              size="txtInterMedium40"
                            >
                              Get In Touch{" "}
                            </Text>
                            <Text
                              className="leading-[21.00px] ml-2 md:ml-[0] mt-[35px] text-gray-600_01 text-sm"
                              size="txtRobotoRegular14Gray60001"
                            >
                              <span className="text-gray-600_01 font-roboto text-left font-normal">
                                Hello ellytasha how can we help you? First, please check{" "}
                              </span>
                              <span className="text-orange-600 font-roboto text-left font-normal">
                                Help page
                              </span>
                              <span className="text-gray-600_01 font-roboto text-left font-normal">
                                <>
                                  {" "}
                                  to
                                  <br />
                                  see if there is already a solution to your problem. If
                                  you want to receive
                                  <br />
                                  information about your problem, please enter an e-mail
                                  address.
                                </>
                              </span>
                            </Text>
                            <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mt-[27px] p-[15px] rounded-[15px] shadow-bs12 w-full">
                              <div className="flex flex-col gap-[22px] items-start justify-start my-[9px] w-full">
                                <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between w-full">
                                  <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-[49%] sm:w-full">
                                    <Text
                                      className="text-black-900 text-xl"
                                      size="txtInterMedium20"
                                    >
                                      First Name
                                    </Text>
                                    <Input
                                      name="rectangleTwo"
                                      placeholder=""
                                      className="p-0 w-full"
                                      wrapClassName="flex h-[30px] rounded-[7px] w-full"
                                      color="blue_gray_100_03"
                                    ></Input>
                                  </div>
                                  <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-[49%] sm:w-full">
                                    <Text
                                      className="text-black-900 text-xl"
                                      size="txtInterMedium20"
                                    >
                                      last Name
                                    </Text>
                                    <Input
                                      name="rectangleThree"
                                      placeholder=""
                                      className="p-0 w-full"
                                      wrapClassName="flex h-[30px] rounded-[7px] w-full"
                                      color="blue_gray_100_03"
                                    ></Input>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-xl"
                                    size="txtInterMedium20"
                                  >
                                    Email
                                  </Text>
                                  <Input
                                    name="rectangleFour"
                                    placeholder=""
                                    className="p-0 w-full"
                                    wrapClassName="flex h-[30px] rounded-[7px] w-full"
                                    color="blue_gray_100_03"
                                  ></Input>
                                </div>
                                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-xl"
                                    size="txtInterMedium20"
                                  >
                                    Phone
                                  </Text>
                                  <Input
                                    name="rectangleFive"
                                    placeholder=""
                                    className="p-0 w-full"
                                    wrapClassName="flex h-[30px] rounded-[7px] w-full"
                                    color="blue_gray_100_03"
                                  ></Input>
                                </div>
                                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                                  <Text
                                    className="text-black-900 text-xl"
                                    size="txtInterMedium20"
                                  >
                                    Messsage
                                  </Text>
                                  <TextArea
                                    className="bg-blue_gray-100_03 border-0 rounded-[7px] w-full"
                                    name="rectangleSix"
                                    placeholder=""
                                  ></TextArea>
                                </div>
                                <Button
                                  className="!text-black-900 cursor-pointer font-medium leading-[normal] min-w-[136px] md:ml-[0] rounded-[7px] text-center text-xl"
                                  color="orange_600"
                                  size="xl"
                                  variant="fill"
                                >
                                  Send
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-123px] mt-2.5 w-[43%] z-[1]">
                          <div className="md:h-[511px] h-[686px] py-[75px] relative w-full">
                            <div className="h-[511px] m-auto w-full">
                              <div className="h-[511px] m-auto w-full">
                                <div className="h-[511px] m-auto w-full">
                                  <div className="h-[511px] m-auto w-full">
                                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                      <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                                        <Img
                                          className="h-[475px] md:h-auto object-cover"
                                          src="images/img_freepikbackgr.png"
                                          alt="freepikbackgr"
                                        />
                                        <Img
                                          className="h-[31px]"
                                          src="images/img_freepikshadowinject1.svg"
                                          alt="freepikshadowin"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[3%] md:h-[116px] h-[118px] right-[0] w-[15%]">
                                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                        <div className="md:h-[73px] h-[75px] relative w-full">
                                          <div className="absolute h-[73px] inset-y-[0] my-auto right-[3%] w-[86%]">
                                            <div className="absolute bottom-[0] flex inset-x-[0] mx-auto w-full">
                                              <Img
                                                className="h-[49px] my-auto"
                                                src="images/img_settings_orange_600.svg"
                                                alt="settings"
                                              />
                                              <Img
                                                className="h-10 ml-[-0.23px] mt-auto w-[39px] z-[1]"
                                                src="images/img_contrast_orange_600.svg"
                                                alt="contrast"
                                              />
                                            </div>
                                            <Img
                                              className="absolute h-[73px] inset-y-[0] my-auto right-[7%]"
                                              src="images/img_settings_orange_600_73x36.svg"
                                              alt="settings_One"
                                            />
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[35px]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group55.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-9 w-[35px]"
                                              src="images/img_user_black_900_36x35.svg"
                                              alt="user_Two"
                                            />
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-start right-[0] top-[0] w-[41%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group55.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[23px]"
                                              src="images/img_user_black_900_36x35.svg"
                                              alt="user_Three"
                                            />
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat bottom-[31%] flex flex-col h-[22px] items-center justify-start right-[0] w-[33%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group55.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[22px]"
                                              src="images/img_user_black_900_36x35.svg"
                                              alt="user_Four"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[43px] items-center justify-start w-[55%] md:w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group54.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[43px]"
                                            src="images/img_videocamera_white_a700.svg"
                                            alt="videocamera"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute bg-white-A700_6c bottom-[32%] h-[9px] inset-x-[0] mx-auto rotate-[-180deg] w-3/5"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[3%] md:h-[159px] h-[254px] right-[13%] w-[24%]">
                                    <div className="absolute bottom-[0] md:h-[159px] h-[215px] left-[0] w-[85%]">
                                      <div className="flex flex-col h-full items-end justify-start m-auto w-full">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[86px] items-center justify-start w-[31%] md:w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group58.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[86px]"
                                            src="images/img_settings_white_a700.svg"
                                            alt="settings_Two"
                                          />
                                        </div>
                                        <div className="h-32 md:h-[73px] relative w-full">
                                          <div
                                            className="absolute bg-cover bg-no-repeat bottom-[13%] flex flex-col h-[73px] inset-x-[0] items-center justify-start mx-auto w-[90%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group59.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[73px]"
                                              src="images/img_vector_white_a700.svg"
                                              alt="vector_One"
                                            />
                                          </div>
                                          <div className="absolute bg-blue_gray-900_04 bottom-[0] h-5 left-[0] rounded-[50%] w-5"></div>
                                          <div className="absolute bg-blue_gray-900_04 bottom-[0] h-5 right-[0] rounded-[50%] w-5"></div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-[49px] inset-x-[0] items-center justify-start mx-auto top-[0] w-[18%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group60.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[49px]"
                                              src="images/img_thumbsup_white_a700.svg"
                                              alt="thumbsup"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-4 inset-x-[0] mx-auto top-[35%]"
                                        src="images/img_vector_blue_gray_900_04.svg"
                                        alt="vector_Four"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[81%]"
                                      style={{
                                        backgroundImage: "url('images/img_group61.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-2"
                                        src="images/img_vector_white_a700_8x114.svg"
                                        alt="vector_Five"
                                      />
                                    </div>
                                    <div className="absolute bg-blue_gray-900_04 h-[54px] right-[0] rounded-[20px] top-[0] w-[55%]"></div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[3%] h-[351px] right-[21%]"
                                  src="images/img_freepikcharacterinject1.svg"
                                  alt="freepikcharacte"
                                />
                              </div>
                              <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-auto top-[14%] w-3/4">
                                <Img
                                  className="h-[118px]"
                                  src="images/img_freepikbirdinject1.svg"
                                  alt="freepikbirdinje"
                                />
                                <Img
                                  className="h-[50px] mt-[67px]"
                                  src="images/img_user_orange_600.svg"
                                  alt="user_Five"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute top-[53%] h-[309px] inset-x-[0]"
                              src="images/img_freepikdeskinject1.svg"
                              alt="freepikdeskinje"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="bg-cover bg-no-repeat flex inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[232px] py-[232px] w-full"
              style={{ backgroundImage: "url('images/img_group51.png')" }}
            >
              <div className="flex flex-col items-center justify-start ml-[151px] my-auto w-2/5">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterMedium40"
                  >
                    Get In Touch{" "}
                  </Text>
                  <Text
                    className="leading-[21.00px] ml-2 md:ml-[0] mt-[35px] text-gray-600_01 text-sm"
                    size="txtRobotoRegular14Gray60001"
                  >
                    <span className="text-gray-600_01 font-roboto text-left font-normal">
                      Hello ellytasha how can we help you? First, please check{" "}
                    </span>
                    <span className="text-orange-600 font-roboto text-left font-normal">
                      Help page
                    </span>
                    <span className="text-gray-600_01 font-roboto text-left font-normal">
                      <>
                        {" "}
                        to
                        <br />
                        see if there is already a solution to your problem. If
                        you want to receive
                        <br />
                        information about your problem, please enter an e-mail
                        address.
                      </>
                    </span>
                  </Text>
                  <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mt-[27px] p-[15px] rounded-[15px] shadow-bs12 w-full">
                    <div className="flex flex-col gap-[22px] items-start justify-start my-[9px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtInterMedium20"
                          >
                            First Name
                          </Text>
                          <Input
                            name="rectangleTwo"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-[30px] rounded-[7px] w-full"
                            color="blue_gray_100_03"
                          ></Input>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtInterMedium20"
                          >
                            last Name
                          </Text>
                          <Input
                            name="rectangleThree"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-[30px] rounded-[7px] w-full"
                            color="blue_gray_100_03"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtInterMedium20"
                        >
                          Email
                        </Text>
                        <Input
                          name="rectangleFour"
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="flex h-[30px] rounded-[7px] w-full"
                          color="blue_gray_100_03"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtInterMedium20"
                        >
                          Phone
                        </Text>
                        <Input
                          name="rectangleFive"
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="flex h-[30px] rounded-[7px] w-full"
                          color="blue_gray_100_03"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtInterMedium20"
                        >
                          Messsage
                        </Text>
                        <TextArea
                          className="bg-blue_gray-100_03 border-0 rounded-[7px] w-full"
                          name="rectangleSix"
                          placeholder=""
                        ></TextArea>
                      </div>
                      <Button
                        className="!text-black-900 cursor-pointer font-medium leading-[normal] min-w-[136px] md:ml-[0] ml-[402px] rounded-[7px] text-center text-xl"
                        color="orange_600"
                        size="xl"
                        variant="fill"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-[-123px] mt-2.5 w-[43%] z-[1]">
                <div className="md:h-[511px] h-[686px] py-[75px] relative w-full">
                  <div className="h-[511px] m-auto w-full">
                    <div className="h-[511px] m-auto w-full">
                      <div className="h-[511px] m-auto w-full">
                        <div className="h-[511px] m-auto w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                              <Img
                                className="h-[475px] md:h-auto object-cover"
                                src="images/img_freepikbackgr.png"
                                alt="freepikbackgr"
                              />
                              <Img
                                className="h-[31px]"
                                src="images/img_freepikshadowinject1.svg"
                                alt="freepikshadowin"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-[3%] md:h-[116px] h-[118px] right-[0] w-[15%]">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="md:h-[73px] h-[75px] relative w-full">
                                <div className="absolute h-[73px] inset-y-[0] my-auto right-[3%] w-[86%]">
                                  <div className="absolute bottom-[0] flex inset-x-[0] mx-auto w-full">
                                    <Img
                                      className="h-[49px] my-auto"
                                      src="images/img_settings_orange_600.svg"
                                      alt="settings"
                                    />
                                    <Img
                                      className="h-10 ml-[-0.23px] mt-auto w-[39px] z-[1]"
                                      src="images/img_contrast_orange_600.svg"
                                      alt="contrast"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-[73px] inset-y-[0] my-auto right-[7%]"
                                    src="images/img_settings_orange_600_73x36.svg"
                                    alt="settings_One"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[35px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group55.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-9 w-[35px]"
                                    src="images/img_user_black_900_36x35.svg"
                                    alt="user_Two"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-start right-[0] top-[0] w-[41%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group55.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[23px]"
                                    src="images/img_user_black_900_36x35.svg"
                                    alt="user_Three"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[31%] flex flex-col h-[22px] items-center justify-start right-[0] w-[33%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group55.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[22px]"
                                    src="images/img_user_black_900_36x35.svg"
                                    alt="user_Four"
                                  />
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[43px] items-center justify-start w-[55%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group54.svg')",
                                }}
                              >
                                <Img
                                  className="h-[43px]"
                                  src="images/img_videocamera_white_a700.svg"
                                  alt="videocamera"
                                />
                              </div>
                            </div>
                            <div className="absolute bg-white-A700_6c bottom-[32%] h-[9px] inset-x-[0] mx-auto rotate-[-180deg] w-3/5"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[3%] md:h-[159px] h-[254px] right-[13%] w-[24%]">
                          <div className="absolute bottom-[0] md:h-[159px] h-[215px] left-[0] w-[85%]">
                            <div className="flex flex-col h-full items-end justify-start m-auto w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[86px] items-center justify-start w-[31%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group58.svg')",
                                }}
                              >
                                <Img
                                  className="h-[86px]"
                                  src="images/img_settings_white_a700.svg"
                                  alt="settings_Two"
                                />
                              </div>
                              <div className="h-32 md:h-[73px] relative w-full">
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[13%] flex flex-col h-[73px] inset-x-[0] items-center justify-start mx-auto w-[90%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group59.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[73px]"
                                    src="images/img_vector_white_a700.svg"
                                    alt="vector_One"
                                  />
                                </div>
                                <div className="absolute bg-blue_gray-900_04 bottom-[0] h-5 left-[0] rounded-[50%] w-5"></div>
                                <div className="absolute bg-blue_gray-900_04 bottom-[0] h-5 right-[0] rounded-[50%] w-5"></div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[49px] inset-x-[0] items-center justify-start mx-auto top-[0] w-[18%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group60.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[49px]"
                                    src="images/img_thumbsup_white_a700.svg"
                                    alt="thumbsup"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-4 inset-x-[0] mx-auto top-[35%]"
                              src="images/img_vector_blue_gray_900_04.svg"
                              alt="vector_Four"
                            />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[81%]"
                            style={{
                              backgroundImage: "url('images/img_group61.svg')",
                            }}
                          >
                            <Img
                              className="h-2"
                              src="images/img_vector_white_a700_8x114.svg"
                              alt="vector_Five"
                            />
                          </div>
                          <div className="absolute bg-blue_gray-900_04 h-[54px] right-[0] rounded-[20px] top-[0] w-[55%]"></div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[3%] h-[351px] right-[21%]"
                        src="images/img_freepikcharacterinject1.svg"
                        alt="freepikcharacte"
                      />
                    </div>
                    <div className="absolute flex flex-row inset-x-[0] items-end justify-between mx-auto top-[14%] w-3/4">
                      <Img
                        className="h-[118px]"
                        src="images/img_freepikbirdinject1.svg"
                        alt="freepikbirdinje"
                      />
                      <Img
                        className="h-[50px] mt-[67px]"
                        src="images/img_user_orange_600.svg"
                        alt="user_Five"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[16%] h-[309px] inset-x-[0] mx-auto"
                    src="images/img_freepikdeskinject1.svg"
                    alt="freepikdeskinje"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col items-center mt-[105px] sm:px-5 px-[34px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
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
                          <Img
                            src="images/img_contrast.svg"
                            alt="contrast_One"
                          />
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

export default BecomeamemberOnePage;
