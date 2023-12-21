import React, {useState} from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";

const MeesagesPage: React.FC = () => {
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

  const member = () => {
    account('/Becomeamember')
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
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[45px] items-center justify-start mb-[165px] w-full">
          <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex max-w-[1417px] mx-auto md:px-5 relative w-full">
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
                <div className="absolute top-[23%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[96%]">
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
                        <div className=" leftNav active flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
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
                        <div onClick={Advert} className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                          <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
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
                      <div onClick = {AccountPage} className=" cursor flex flex-col items-center justify-start py-4 w-[79%]">
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
                    <div onClick={member} className="leftNav flex flex-1 flex-row items-center justify-start px-4 w-full">
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
            <div className="flex flex-col font-inter items-center justify-start w-[81%] z-[1]">
              <div className="md:h-[1089px] h-[860px] sm:h-[868px] mt-2 relative w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto pb-[83px] md:pr-10 sm:pr-5 pr-[83px] rounded-[10px] shadow-bs9 w-[99%]">
                  <div className="flex flex-col gap-[25px] items-center justify-end pt-[30px] w-[34%] md:w-full">
                    <div className="bg-gray-200_04 flex flex-col items-end justify-end p-2 rounded-[30px] shadow-bs10 w-[91%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[100%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-evenly w-full">
                            <Img
                              className="h-5 mb-0.5"
                              src="images/img_favorite_pink_500.svg"
                              alt="favorite"
                            />
                            <Text
                              className="mt-[3px] text-sm text-gray-900_02"
                              size="txtInterSemiBold1488"
                            >
                              <> You don&#39;t have any matches yet.</>
                            </Text>
                          </div>
                          <Text
                            className="text-sm text-gray-900_02"
                            size="txtInterSemiBold1461"
                          >
                            Search for someone now
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[22px] mr-[31px]"
                        src="images/img_close_gray_900_02.svg"
                        alt="close"
                      />
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start pb-[481px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gray-200_04 border-gray-200_04 ml-4 border-solid cursor border-t flex flex-row items-center justify-between w-full">
                           <section className="justify-start flex items-center">
                            <div className="flex flex-col items-end justify-start pl-2 py-2">
                              <Img
                                className="h-[60px] md:h-auto object-cover  rounded-[30px] w-[78%]"
                                src="images/img_small0ec1d8a977jpeg.png"
                                alt="small0ec1d8a977"
                              />
                            </div>
                            <div className="flex flex-col ml-2 items-start justify-end pr-0.5 py-0.5">
                              <Text
                                className="text-base text-gray-700_02"
                                size="txtRobotoMedium16"
                              >
                                Cruel Santino
                              </Text>
                            </div>
                           </section>
                          <Img
                            className="h-7 mr-[15px] cursor"
                            src="images/img_signal.svg"
                            alt="signal"
                          />
                        </div>
                        <div className="border-gray-200_04 border-solid border-t cursor flex flex-row ml-4 items-center justify-start w-full">
                          <div className="flex flex-col items-end justify-start pl-2 py-2 w-[22%]">
                            <Img
                              className="h-[60px] md:h-auto object-cover rounded-[30px] w-[100%]"
                              src="images/img_small094cdbb219jpg.png"
                              alt="small094cdbb219"
                            />
                          </div>
                          <div className="flex flex-col items-end justify-end mr-3.5 w-[76%]">
                            <div className="flex flex-row gap-[54px] items-center justify-end mb-[7px] mt-[21px] w-[95%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[70%]">
                                <div className="flex flex-col items-start justify-start pr-0.5 py-0.5 w-full">
                                  <Text
                                    className="text-base text-gray-700_02"
                                    size="txtRobotoMedium16"
                                  >
                                    Christine Fleur
                                  </Text>
                                </div>
                                <div className="h-4 md:h-[15px] md:pr-10 sm:pr-5 pr-[58px] relative w-full">
                                  <div className="absolute flex left-[0] top-[0] w-[100%]">
                                    <Text
                                      className="my-auto text-gray-900_03 text-sm"
                                      size="txtRobotoRegular14Gray90003"
                                    >
                                      <span className="text-gray-900_03 font-roboto text-left font-normal">
                                        You:{" "}
                                      </span>
                                      <span className="text-gray-900_02 font-roboto text-left font-normal">
                                        Hello dear{" "}
                                      </span>
                                    </Text>
                                    <Img
                                      className="h-3.5 ml-[.5rem] my-auto w-3.5 z-[1]"
                                      src="images/img_checkmark_gray_300_01.svg"
                                      alt="checkmark"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-3.5 hidden right-full top-[0] w-3.5"
                                    src="images/img_checkmark_gray_300_01.svg"
                                    alt="checkmark_One"
                                  />
                                </div>
                              </div>
                              <Img
                                className="h-7 mt-[3px] cursor"
                                src="images/img_signal.svg"
                                alt="signal_One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute font-roboto md:h-[1081px] h-[860px] inset-y-[0] my-auto right-[0] w-[66%] md:w-full">
                  <div className="absolute border-gray-200_04 border-l border-solid h-[860px] inset-[0] justify-center m-auto w-[99%]"></div>
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="sm:h-[779px] h-[781px] md:h-[882px] relative w-[99%] md:w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="border-b border-gray-200_04 border-solid flex flex-col items-center justify-start w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end p-[19px] w-[99%] md:w-full">
                                <Img
                                  className="h-[27px]"
                                  src="images/img_arrowleft_gray_900_02.svg"
                                  alt="arrowleft"
                                />
                                <Img
                                  className="h-[65px] md:h-auto mb-[5px] md:mt-0 mt-[13px] rounded-[50%] w-[65px]"
                                  src="images/img_linksmall0ec1d8a977jpeg.png"
                                  alt="linksmall0ec1dEight"
                                />
                                <div className="flex relative w-[85%] md:w-full">
                                  <div className="flex flex-col gap-[9px] items-start justify-start my-auto pl-5 w-2/5">
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-gray-900_03 text-xl"
                                        size="txtRobotoMedium20"
                                      >
                                        Cruel Santino, 53
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-base text-gray-900_02"
                                          size="txtRobotoRegular16Gray90002"
                                        >
                                          New England, United States
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-[45px] ml-[-41px] my-auto z-[1]"
                                    src="images/img_divchatboxdia.svg"
                                    alt="divchatboxdia"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-inter items-center justify-start p-[5px] w-full">
                              <div className="flex flex-col items-center justify-end mb-[590px] p-[19px]">
                                <Text
                                  className="mt-[3px] text-[13.34px] text-center text-gray-900_03"
                                  size="txtInterRegular1334"
                                >
                                  No messages
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col items-center justify-start outline hidden outline-[1px] outline-black-900_33 right-[4%] rounded-md shadow-bs11 top-[13%] w-[28%]">
                          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                            <div className="border-b border-gray-200_04 border-solid flex flex-col items-end justify-start p-4 w-full">
                              <div className="flex flex-row gap-2 items-start justify-center mr-[21px] w-[70%] md:w-full">
                                <Img
                                  className="h-4 mt-0.5"
                                  src="images/img_user_black_900.svg"
                                  alt="user_One"
                                />
                                <Text
                                  className="text-base text-center text-gray-900_02"
                                  size="txtRobotoMedium16Gray90002"
                                >
                                  {" "}
                                  Send money
                                </Text>
                              </div>
                            </div>
                            <Input
                              name="language_Six"
                              placeholder=" Add to blacklist"
                              className="font-medium p-0 placeholder:text-gray-900_02 text-base text-center w-full"
                              wrapClassName="flex w-full"
                              prefix={
                                <Img
                                  className="mt-0.5 mb-auto mr-2"
                                  src="images/img_contrast_gray_900_02.svg"
                                  alt="contrast"
                                />
                              }
                              shape="square"
                              color="gray_200_04"
                              size="2xl"
                              variant="outline"
                            ></Input>
                            <div className="flex flex-col items-end justify-start p-4 w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-end mr-[13px] w-[78%] md:w-full">
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_videocamera.svg"
                                  alt="videocamera"
                                />
                                <Text
                                  className="text-base text-center text-gray-900_02"
                                  size="txtRobotoMedium16Gray90002"
                                >
                                  {" "}
                                  Mark as spam
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="font-inter md:h-[199px] h-[79px] relative w-full">
                        <div className="absolute bg-white-A700 border-gray-200_04 border-solid border-t h-[79px] inset-[0] justify-center m-auto w-[99%]"></div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                              <Img
                                className="h-7 cursor"
                                src="images/img_contrast_blue_gray_200.svg"
                                alt="contrast"
                              />
                             <svg className="cursor" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                              <path opacity="0.7" d="M3.01562 22.8906C0.25 20.0312 0.296875 15.4844 3.0625 12.6719L12.9062 2.59375C14.9688 0.484375 18.3438 0.484375 20.4531 2.59375C22.4688 4.70312 22.5156 8.125 20.4531 10.2344L11.875 19C10.4688 20.4062 8.17188 20.4062 6.8125 18.9531C5.45312 17.5469 5.5 15.2969 6.85938 13.9375L13.6094 7.04688C13.8906 6.76562 14.3594 6.71875 14.6875 7.04688L15.7188 8.07812C16.0469 8.35938 16.0469 8.82812 15.7656 9.15625L9.01562 16C8.78125 16.2344 8.78125 16.6562 8.96875 16.8906C9.20312 17.0781 9.53125 17.0781 9.71875 16.8906L18.2969 8.125C19.1875 7.1875 19.1875 5.64062 18.2969 4.70312C17.4062 3.8125 15.9531 3.8125 15.0625 4.70312L5.21875 14.7812C3.57812 16.4219 3.57812 19.1406 5.17188 20.7812C6.76562 22.4219 9.34375 22.4219 10.9375 20.7812L19 12.5312C19.2812 12.25 19.75 12.25 20.0312 12.5312L21.1094 13.6094C21.4375 13.8906 21.4375 14.3594 21.1562 14.6406L13.0938 22.8906C10.2812 25.75 5.78125 25.7031 3.01562 22.8906Z" fill="#A9B0B7"/>
                             </svg>
                              <div className="h-[50px] input-message-wrapper w-[90%] flex items-center md:w-full">
                                  <input type="text" style = {{width: '70%'}} />
                                <svg className="cursor" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                  <g clip-path="url(#clip0_1_6206)">
                                    <path d="M14.0188 13.2462L4.60385 14.815C4.49561 14.833 4.39403 14.8793 4.30933 14.9491C4.22463 15.0188 4.1598 15.1097 4.12135 15.2125L0.8751 23.91C0.5651 24.71 1.40135 25.4725 2.16885 25.0875L24.6688 13.8375C24.8244 13.7595 24.9551 13.6399 25.0465 13.4918C25.1379 13.3438 25.1863 13.1733 25.1863 12.9993C25.1863 12.8254 25.1379 12.6549 25.0465 12.5069C24.9551 12.3588 24.8244 12.2392 24.6688 12.1612L2.16885 0.911222C1.40135 0.527472 0.5651 1.28997 0.8751 2.08872L4.1226 10.7862C4.16105 10.889 4.22588 10.9799 4.31058 11.0496C4.39528 11.1194 4.49686 11.1657 4.6051 11.1837L14.0201 12.7525C14.0788 12.7618 14.1323 12.7919 14.1709 12.8371C14.2095 12.8823 14.2307 12.9399 14.2307 12.9993C14.2307 13.0588 14.2095 13.1163 14.1709 13.1616C14.1323 13.2068 14.0788 13.2368 14.0201 13.2462H14.0188Z" fill="#EE2C55"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1_6206">
                                      <rect width="26" height="26" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                                </div>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[683px] text-[10.48px] text-blue_gray-200 text-right"
                              size="txtInterRegular1048"
                            >
                              1000
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

export default MeesagesPage;
