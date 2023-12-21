import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopThirtyOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[95px] items-center justify-end mx-auto pl-1 pt-1 w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <Img
            className="flex-1 h-2.5 md:h-auto object-cover w-full"
            src="images/img_pseudo_10x1413.png"
            alt="pseudo"
          />
          <div className="md:h-[171px] h-[73px] sm:h-[85px] md:ml-[0] ml-[25px] mr-[34px] mt-4 relative w-[96%] md:w-full">
            <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[200px] items-center justify-end px-[15px] w-full">
                <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center pr-[18px] w-[29%] md:w-full">
                  <div className="flex flex-row items-center justify-start p-4 shadow-bs4 w-[51%]">
                    <Img
                      className="h-6 ml-[3px] w-6"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
                    <Text
                      className="ml-1 text-base text-orange-600"
                      size="txtMontserratMedium16"
                    >
                      {" "}
                      Find Matches
                    </Text>
                  </div>
                  <div className="h-[35px] relative w-[46%]">
                    <div className="absolute h-[29px] inset-[0] justify-center m-auto w-[99%]">
                      <div className="bg-gradient7  h-[29px] m-auto outline outline-[1px] outline-yellow-800_01 rounded-[14px] w-full"></div>
                      <Text
                        className="absolute capitalize h-max inset-y-[0] my-auto right-[8%] text-base text-white-A700"
                        size="txtMontserratRegular16WhiteA700"
                      >
                        {" "}
                        Go Premium
                      </Text>
                    </div>
                    <Button
                      className="absolute flex h-[35px] inset-y-[0] items-center justify-center left-[0] my-auto rounded-[17px] w-[35px]"
                      size="md"
                      variant="gradient"
                      color="yellow_700_01_yellow_800_01"
                    >
                      <Img src="images/img_arrowright.svg" alt="arrowright" />
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center w-[38%] md:w-full">
                  <div className="flex flex-col items-center justify-end p-3 w-[32%] sm:w-full">
                    <div className="border border-gray-200_03 border-solid flex flex-row items-center justify-center p-[5px] rounded-[15px] w-[97%] md:w-full">
                      <Text
                        className="ml-2.5 text-base text-gray-800_02"
                        size="txtMontserratMedium16Gray80002"
                      >
                        Credit  {" "}
                      </Text>
                      <Img
                        className="h-[15px] ml-3"
                        src="images/img_television_orange_600.svg"
                        alt="television"
                      />
                      <Text
                        className="ml-[7px] mr-2.5 text-base text-gray-800_02"
                        size="txtMontserratMedium16Gray80002"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[57px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img
                    className="h-[57px]"
                    src="images/img_item.svg"
                    alt="item"
                  />
                  <div className="flex flex-row items-center justify-evenly w-[47%] sm:w-full">
                    <Img
                      className="h-[52px] md:h-auto object-cover"
                      src="images/img_divboostdiv.png"
                      alt="divboostdiv"
                    />
                    <div className="flex flex-col items-end justify-start pl-2 py-2 w-4/5">
                      <div className="bg-orange-600 border border-orange-600 border-solid flex flex-row items-center justify-start rounded-[20px] w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start ml-3 w-[38px]">
                          <Img
                            className="h-[39px] md:h-auto object-cover rounded-[20px] w-[74%]"
                            src="images/img_bv7mozwnhchqrqp.png"
                            alt="bv7mozwnhchqrqp"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-[15px] text-white-A700"
                            size="txtMontserratMedium15WhiteA700"
                          >
                            Hi, tekena
                          </Text>
                        </div>
                        <Img
                          className="h-[22px]"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        </header>
        <div className="sm:h-[3871px] h-[3969px] md:h-[4675px] max-w-[1425px] mx-auto md:px-5 relative w-full">
          <div className="absolute sm:h-[3871px] h-[3969px] md:h-[4675px] inset-[0] justify-center m-auto w-[97%] md:w-full">
            <div className="absolute bottom-[39%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
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
                          Always up to date with our latest offers and
                          discounts!
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
            <div className="absolute flex flex-col font-inter h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[89%]">
              <div className="flex flex-col items-center justify-start pb-[1970px] w-full">
                <div className="sm:h-[1901px] h-[1998px] md:h-[2705px] relative w-full">
                  <div className="absolute bg-pink-900 flex flex-col items-center justify-start pb-[1551px] right-[0] top-[0] w-[95%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col h-[350px] md:h-auto items-start justify-start max-w-[1149px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="bg-gray-300_01 flex flex-col items-center justify-start w-full">
                              <div className="md:h-[1154px] h-[350px] relative w-full">
                                <div className="flex flex-col h-full items-end justify-end m-auto pl-[5px] pt-[5px] w-full">
                                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-5 w-[62%] md:w-full">
                                    <div className="flex flex-col h-px items-end justify-end md:mt-0 mt-[37px] overflow-auto w-px">
                                      <div className="overflow-x-auto w-full">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                            <Img
                                              className="md:h-auto h-px md:mt-0 mt-64 object-cover w-px"
                                              src="images/img_vt_16.png"
                                              alt="vt"
                                            />
                                            <Img
                                              className="md:h-auto h-px ml-64 md:ml-[0] md:mt-0 mt-64 object-cover w-px"
                                              src="images/img_vt_17.png"
                                              alt="vt_One"
                                            />
                                            <Img
                                              className="md:h-auto h-px md:mt-0 mt-64 object-cover w-px"
                                              src="images/img_vt_18.png"
                                              alt="vt_Two"
                                            />
                                            <Img
                                              className="md:h-auto h-px md:ml-[0] ml-[255px] md:mt-0 mt-64 object-cover w-px"
                                              src="images/img_vt_19.png"
                                              alt="vt_Three"
                                            />
                                            <Img
                                              className="h-64 md:h-auto md:ml-[0] ml-[511px] object-cover w-64"
                                              src="images/img_vt_256x256.png"
                                              alt="vt_Four"
                                            />
                                            <Img
                                              className="h-64 md:h-auto object-cover w-64"
                                              src="images/img_vt_3.png"
                                              alt="vt_Five"
                                            />
                                          </div>
                                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                            <Img
                                              className="md:h-auto h-px md:mt-0 mt-64 object-cover w-px"
                                              src="images/img_vt_4.png"
                                              alt="vt_Six"
                                            />
                                            <Img
                                              className="md:h-auto h-px object-cover w-px"
                                              src="images/img_vt_5.png"
                                              alt="vt_Seven"
                                            />
                                            <div className="h-px relative w-px">
                                              <div className="flex flex-row h-full items-center justify-between m-auto w-px">
                                                <Img
                                                  className="md:h-auto h-px object-cover w-px"
                                                  src="images/img_vt_6.png"
                                                  alt="vt_Eight"
                                                />
                                                <Img
                                                  className="md:h-auto h-px object-cover w-px"
                                                  src="images/img_vt_7.png"
                                                  alt="vt_Nine"
                                                />
                                              </div>
                                              <Img
                                                className="absolute bottom-[0] h-px object-cover right-[0] w-px"
                                                src="images/img_vt_8.png"
                                                alt="vt_Ten"
                                              />
                                              <Img
                                                className="absolute bottom-[0] h-px inset-x-[0] mx-auto object-cover w-px"
                                                src="images/img_vt_9.png"
                                                alt="vt_Eleven"
                                              />
                                              <Img
                                                className="absolute bottom-[0] h-px left-[0] object-cover w-px"
                                                src="images/img_vt_10.png"
                                                alt="vt_Twelve"
                                              />
                                              <Img
                                                className="absolute bottom-[0] h-px object-cover right-[0] w-px"
                                                src="images/img_vt_11.png"
                                                alt="vt_Thirteen"
                                              />
                                              <Img
                                                className="absolute h-px inset-y-[0] left-[0] my-auto object-cover w-px"
                                                src="images/img_vt_12.png"
                                                alt="vt_Fourteen"
                                              />
                                            </div>
                                            <Img
                                              className="h-64 md:h-auto md:ml-[0] ml-[511px] object-cover w-64"
                                              src="images/img_vt_13.png"
                                              alt="vt_Fifteen"
                                            />
                                            <Img
                                              className="h-64 md:h-auto object-cover w-64"
                                              src="images/img_vt_14.png"
                                              alt="vt_Sixteen"
                                            />
                                          </div>
                                          <Img
                                            className="h-64 md:h-auto md:ml-[0] ml-[768px] object-cover w-64"
                                            src="images/img_vt_15.png"
                                            alt="vt_Seventeen"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-[84%] md:w-full">
                                      <div className="flex flex-col h-[150px] md:h-auto items-start justify-start w-[150px]">
                                        <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-[150px]">
                                          <div className="bg-amber-400_95 flex flex-col h-[150px] items-center justify-center p-8 sm:px-5 rounded-[50%] w-[150px]">
                                            <Img
                                              className="h-[45px] mt-1.5"
                                              src="images/img_eye.svg"
                                              alt="eye"
                                            />
                                            <Text
                                              className="mb-1 sm:text-[17.82px] md:text-[19.82px] text-[21.82px] text-white-A700"
                                              size="txtInterRegular2182"
                                            >
                                              HIDDEN
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Img
                                        className="md:h-auto h-px object-cover w-[15%]"
                                        src="images/img_transparentpng.png"
                                        alt="transparentpng"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="h-[26px] mr-[1078px] mt-[148px]"
                                    src="images/img_divh2d7da0963d.svg"
                                    alt="divh2d7da0963d"
                                  />
                                </div>
                                <div className="absolute bottom-[0] font-asap overflow-x-auto right-[0] w-[23%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end overflow-auto w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-3.5 md:h-auto items-start justify-center pt-[1.13px] w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_divgmstylecc.svg')",
                                        }}
                                      >
                                        <div className="flex flex-col items-start justify-start px-1.5 w-auto">
                                          <Text
                                            className="text-[10px] text-black-900 text-center tracking-[0.50px] w-auto"
                                            size="txtAsapRegular10"
                                          >
                                            Keyboard shortcuts
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="h-3.5 md:h-auto pt-[1.13px] relative w-full">
                                        <Img
                                          className="absolute h-3.5 inset-[0] m-auto w-[129px]"
                                          src="images/img_divgmstylecc.svg"
                                          alt="divh2d639ce712"
                                        />
                                        <div className="flex flex-col items-center justify-start mt-auto mx-auto px-1.5 relative w-auto">
                                          <Text
                                            className="text-[10px] text-black-900 text-right tracking-[0.50px] w-auto"
                                            size="txtAsapRegular10"
                                          >
                                            Map data ©2023 Google
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-3.5 md:h-auto items-start justify-center pt-[1.13px] w-auto"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_divgmnoprint.png')",
                                      }}
                                    >
                                      <div className="flex flex-col items-start justify-start px-1.5 w-auto">
                                        <Text
                                          className="text-[10px] text-black-900 text-right tracking-[0.50px] w-auto"
                                          size="txtAsapRegular10"
                                        >
                                          Terms
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="h-3.5 md:h-auto sm:ml-[0] ml-[11px] pt-[1.13px] relative w-[105px]">
                                      <Img
                                        className="absolute h-3.5 inset-[0] m-auto w-[105px]"
                                        src="images/img_divgmstylecc.svg"
                                        alt="divh2d879eeb2c"
                                      />
                                      <div className="flex flex-col items-center justify-start m-auto px-1.5 relative w-auto">
                                        <Text
                                          className="text-[10px] text-black-900 text-right tracking-[0.50px] w-auto"
                                          size="txtAsapRegular10"
                                        >
                                          Report a map error
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
                  <div className="absolute bottom-[0] md:h-[1363px] sm:h-[1719px] h-[1758px] inset-x-[0] mx-auto w-[1212px] md:w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto w-auto">
                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[63.3px] w-auto md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
                          <Img
                            className="h-6 sm:h-auto object-cover w-[1085px] md:w-full"
                            src="images/img_divmediaicons.png"
                            alt="divmediaicons"
                          />
                          <div className="flex flex-col items-start justify-center w-auto md:w-full">
                            <div className="flex flex-col items-start justify-start max-w-[1085px] overflow-auto w-full">
                              <div className="overflow-x-auto w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <div className="flex flex-1 md:flex-1 flex-col items-start justify-start sm:pr-5 pr-[30px] w-auto md:w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="pb-[3.39px] relative w-full">
                                        <Img
                                          className="h-[400px] m-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614633imagejpg.png"
                                          alt="124614633imagej"
                                        />
                                        <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center left-[3%] my-auto pb-[88px] pl-[2.18px] pr-[2.21px] w-[27px]">
                                          <div className="flex flex-col h-[132px] md:h-auto items-start justify-start w-[22px]">
                                            <Text
                                              className="leading-[44.00px] max-w-[22px] md:max-w-full text-[22px] text-amber-A200_01 sm:text-lg md:text-xl"
                                              size="txtInterRegular22"
                                            >
                                              prev
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 md:flex-1 flex-col items-start justify-start sm:pr-5 pr-[30px] w-auto md:w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start pb-[3.39px] w-full">
                                        <Img
                                          className="h-[400px] sm:h-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614634imagejpg.png"
                                          alt="124614634imagej"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start sm:pr-5 pr-[30px] w-auto md:w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start pb-[3.39px] w-full">
                                        <Img
                                          className="h-[400px] sm:h-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614634imagejpg.png"
                                          alt="124614635imagej"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="pb-[3.39px] relative w-full">
                                        <Img
                                          className="h-[400px] m-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614636imagejpg.png"
                                          alt="124614636imagej"
                                        />
                                        <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center left-[37%] my-auto pb-[88px] pl-[2.19px] pr-[2.2px] w-[27px]">
                                          <div className="flex flex-col h-[132px] md:h-auto items-start justify-start w-[22px]">
                                            <Text
                                              className="leading-[44.00px] max-w-[22px] md:max-w-full text-[22px] text-amber-A200_01 sm:text-lg md:text-xl"
                                              size="txtInterRegular22"
                                            >
                                              next
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1 h-[403px] w-[29%]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-asap items-center justify-start pt-20 md:px-10 sm:px-5 px-[63.3px] w-auto md:w-full">
                        <div className="flex flex-col items-center justify-start pt-20 md:px-10 sm:px-5 px-[63.3px] w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="border-purple-A100 border-solid border-y-2 flex flex-col items-start justify-start py-0.5 w-full">
                              <div className="flex flex-col h-12 md:h-auto items-start justify-start max-w-[1085px] w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:px-10 sm:px-5 px-[171px] w-full">
                                  <div className="flex flex-row h-12 md:h-auto items-center justify-center md:px-10 px-12 sm:px-5 py-2.5 w-auto">
                                    <Img
                                      className="h-full w-[38px]"
                                      src="images/img_eye_purple_a100.svg"
                                      alt="eye_One"
                                    />
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="sm:text-[17px] md:text-[19px] text-[21px] text-center text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                        size="txtAsapMedium21PurpleA100"
                                      >
                                        Overview
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row h-12 md:h-auto items-center justify-center md:px-10 px-12 sm:px-5 py-2.5 w-auto">
                                    <Img
                                      className="h-full w-[38px]"
                                      src="images/img_alarm.svg"
                                      alt="alarm"
                                    />
                                    <div className="flex flex-col items-center justify-start pl-[0.39px] pr-[0.05px] w-auto">
                                      <Text
                                        className="sm:text-[17px] md:text-[19px] text-[21px] text-amber-A200_01 text-center tracking-[0.50px] uppercase w-auto"
                                        size="txtAsapMedium21"
                                      >
                                        Services
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row h-12 md:h-auto items-center justify-center md:px-10 px-12 sm:px-5 py-2.5 w-auto">
                                    <Img
                                      className="h-full w-[38px]"
                                      src="images/img_favorite_purple_a100.svg"
                                      alt="favorite"
                                    />
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="sm:text-[17px] md:text-[19px] text-[21px] text-center text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                        size="txtAsapMedium21PurpleA100"
                                      >
                                        Reviews
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pb-12 pt-[88px] w-auto md:w-full">
                              <div className="flex flex-col gap-[31.59px] items-start justify-start overflow-auto w-auto">
                                <Text
                                  className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                  size="txtAsapBold24"
                                >
                                  Included services
                                </Text>
                                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="gap-2 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[67.79px] pr-[67.43px] md:px-10 sm:px-5 w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  69
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_purple_500.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[43.29px] pr-[42.93px] md:px-10 sm:px-5 w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Blowjob
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_purple_500_80x80.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[11.8px] pr-[11.42px] w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Couples Services
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_80x80.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[36.27px] pr-[35.95px] sm:px-5 w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Dildo play
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_settings.svg"
                                              alt="settings"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[17.29px] pr-[16.93px] w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Erotic massage
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_1.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[21.29px] pr-[20.93px] sm:px-5 w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Girlfriend sex
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <div className="h-[99px] md:h-auto ml-auto w-[121px]">
                                              <Img
                                                className="h-20 mt-auto w-20"
                                                src="images/img_svg_purple_500.svg"
                                                alt="svg"
                                              />
                                              <Text
                                                className="absolute bg-purple-500 h-[37px] justify-center pl-2 pr-1 py-[3px] right-[0] rotate-[-20deg] rounded-[3px] text-[11.8px] text-amber-A200_01 text-center top-[0] tracking-[0.50px] uppercase w-[59px]"
                                                size="txtAsapSemiBold118"
                                              >
                                                PASSIVE
                                              </Text>
                                            </div>
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[15.8px] pr-[15.42px] w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Golden shower
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_2.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[7.26px] pr-[6.96px] w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Hardcore Domina
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_3.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[36.26px] pr-[35.96px] sm:px-5 w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Striptease
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                                          <div className="h-[150px] md:h-auto md:px-10 sm:px-5 px-[51.61px] py-[35px] relative w-[183px]">
                                            <Img
                                              className="h-20 m-auto w-20"
                                              src="images/img_img_4.svg"
                                              alt="img"
                                            />
                                            <div className="absolute bottom-[0] flex flex-col h-[55px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-[30.91px] px-4 w-auto">
                                              <div className="flex flex-col items-center justify-start pb-[7.09px] pl-[34.28px] pr-[33.94px] sm:px-5 w-full">
                                                <Text
                                                  className="text-amber-A200_01 text-center text-sm tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular14AmberA20001"
                                                >
                                                  Threesome
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
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-asap items-end justify-start md:pl-10 sm:pl-5 pl-[63px] right-[0] top-[0] w-[95%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col h-[360px] md:h-auto items-start justify-start w-[360px]">
                          <Img
                            className="h-[360px] md:h-auto object-cover w-[360px]"
                            src="images/img_divngtnsc30975.png"
                            alt="divngtnsc30975"
                          />
                        </div>
                        <div className="flex flex-col h-[360px] md:h-auto items-start justify-end sm:pl-5 pl-[25px] pt-[143px]">
                          <div className="flex flex-col h-[90px] md:h-auto items-center justify-between py-8 w-full">
                            <div className="flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[339.19px] w-auto">
                              <div className="flex flex-col items-start justify-start pr-[0.44px] w-auto">
                                <Text
                                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[0.50px] uppercase w-auto"
                                  size="txtAsapRegular30"
                                >
                                  Marina
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-between md:pr-10 sm:pr-5 pr-[575.05px] w-full">
                            <div className="flex flex-row items-center justify-start w-auto">
                              <Img
                                className="h-8 w-8"
                                src="images/img_svg_purple_a100_01.svg"
                                alt="svg"
                              />
                              <div className="flex flex-col items-end justify-start pl-3">
                                <Text
                                  className="text-base text-white-A700 tracking-[0.50px] uppercase"
                                  size="txtAsapRegular16WhiteA700"
                                >
                                  0.0 KM
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[25px]"
                                src="images/img_videocamera_white_a700.svg"
                                alt="videocamera"
                              />
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                  size="txtAsapRegular16WhiteA700"
                                >
                                  Zürich
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[43px] md:h-auto object-cover w-full"
                            src="images/img_divdividermobile.png"
                            alt="divdividermobil"
                          />
                          <div className="flex md:flex-col flex-row gap-[0.01px] items-start justify-between w-full">
                            <div className="flex sm:flex-1 flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[197.19px] w-auto sm:w-full">
                              <div className="flex flex-col h-[52px] md:h-auto items-start justify-start">
                                <div className="flex flex-col items-center justify-between w-full">
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="flex flex-col h-[52px] md:h-auto items-start justify-start w-[180px]">
                                      <Button
                                        className="cursor-pointer font-bold text-[19px] text-center tracking-[0.50px] uppercase w-full"
                                        shape="square"
                                        color="amber_A200_01"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        Hook Up
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-end md:pl-10 sm:pl-5 pl-[143.34px] w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col gap-[6.99px] items-start justify-start w-full">
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[88.72px] w-auto">
                                    <div className="flex flex-row items-start justify-between pr-[0.18px] w-full">
                                      <Text
                                        className="text-amber-A200_01 text-base tracking-[0.50px] uppercase w-auto"
                                        size="txtAsapRegular16AmberA20001"
                                      >
                                        INCALL
                                      </Text>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-[0.19px] items-center justify-between w-full">
                                          <Text
                                            className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                            size="txtAsapRegular16WhiteA700"
                                          >
                                            from 
                                          </Text>
                                          <div className="flex flex-col items-start justify-start pr-[0.94px] w-auto">
                                            <Text
                                              className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                              size="txtAsapRegular16WhiteA700"
                                            >
                                              € 200
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[72.72px] items-start justify-start pr-[0.18px] w-auto">
                                    <Text
                                      className="text-amber-A200_01 text-base tracking-[0.50px] uppercase w-auto"
                                      size="txtAsapRegular16AmberA20001"
                                    >
                                      OUTCALL
                                    </Text>
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-center justify-between w-full">
                                        <Text
                                          className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                          size="txtAsapRegular16WhiteA700"
                                        >
                                          from 
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
                  <div className="absolute h-[54px] right-[0] top-[0] w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[917px] h-[952px] left-[0] pb-1.5 px-1.5 top-[0] w-[22%]">
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
            <div className="absolute bottom-[5%] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto py-2 w-[96%]">
              <div className="flex flex-row items-center justify-start px-4 w-full">
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
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="h-14 relative w-full">
                  <Img
                    className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                    src="images/img_divvlistitemiconmargin.svg"
                    alt="divvlistitemico"
                  />
                  <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%]">
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
                    <div className="flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
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
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
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
                    <div className="flex flex-1 flex-col justify-start my-0 w-full">
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
                      <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                    </div>
                  </List>
                </div>
              </div>
              <Input
                name="link"
                placeholder="Account settings"
                className="font-bold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                wrapClassName="flex mt-4 pl-4 pr-[35px] w-full"
                prefix={
                  <Img
                    className="h-14 my-auto"
                    src="images/img_lock_white_a700.svg"
                    alt="lock"
                  />
                }
                shape="square"
                color="orange_600"
              ></Input>
              <div className="flex flex-row items-center justify-start mt-4 px-4 w-full">
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
              <div className="flex flex-row items-center justify-start mt-[15px] px-4 w-full">
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
              <div className="flex flex-row items-center justify-start mt-4 px-4 w-full">
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
              </div>
              <div className="flex flex-col font-montserrat items-center justify-end mb-[34px] p-[5px] w-full">
                <div className="flex flex-row items-center justify-start pr-[11px] py-[11px] w-[82%] md:w-full">
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
      </div>
    </>
  );
};

export default DesktopThirtyOnePage;
