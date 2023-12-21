import React from "react";

import { Button, Img, Input, List, Text } from "components";

const DesktopThirtyFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto pb-[275px] w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <Img
            className="flex-1 h-2.5 md:h-auto object-cover w-full"
            src="images/img_pseudo_10x1428.png"
            alt="pseudo"
          />
          <div className="md:h-[171px] h-[73px] sm:h-[85px] md:ml-[0] ml-[25px] mr-[49px] mt-4 relative w-[95%] md:w-full">
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
        <div className="flex flex-col font-segoeui md:gap-10 gap-[73px] items-center justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="flex flex-col mx-auto w-full">
              <div
                className="bg-cover bg-no-repeat h-[1032px] md:h-[1195px] sm:h-[738px] mx-auto pl-[13px] py-[13px] w-full"
                style={{
                  backgroundImage:
                    "url('images/img_loginbannermasksvg_black_900.png')",
                }}
              >
                <Img
                  className="h-[358px] ml-auto mr-[19px] mt-[39px]"
                  src="images/img_divlwadblockh90.svg"
                  alt="divlwpageconten"
                />
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pt-[27px] sm:px-5 px-[27px] top-[1%] w-[98%]">
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-[9px] p-[57px] md:px-10 sm:px-5 rounded-[5px] w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-10 items-center justify-start mb-[41px] py-14 w-[95%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-2 py-[72px] w-[38%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="md:text-5xl text-6xl text-gray-900_05 tracking-[-1.50px]"
                            size="txtSegoeUIBold60"
                          >
                            Enter Live Cam & Call
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[31px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="leading-[28.00px] mt-0.5 text-base text-gray-800_10"
                              size="txtSegoeUI16"
                            >
                              <>
                                Transcribe your videos to text, add subtitles,
                                and translate
                                <br />
                                to over 125 languages
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-orange-600 flex flex-row gap-[54px] items-center justify-start mb-2 mt-10 p-[15px] rounded-[36px] shadow-bs15 w-[84%] md:w-full">
                          <Text
                            className="ml-16 text-lg text-white-A700"
                            size="txtSegoeUI18"
                          >
                            Click to view Livecam
                          </Text>
                          <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                            <Button
                              className="flex h-[42px] items-center justify-center shadow-bs16 w-[42px]"
                              shape="circle"
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <Img
                                className="h-[26px]"
                                src="images/img_divgrid.png"
                                alt="divgrid"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-2 w-[59%] md:w-full">
                        <Img
                          className="h-[427px] md:h-auto object-cover w-full"
                          src="images/img_videototext4d757fb45cpng.png"
                          alt="videototext4dSeventyFive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-11 items-center justify-end ml-[109px] mt-[-287px] p-20 md:px-10 sm:px-5 w-4/5 z-[1]">
                <div className="flex flex-col items-center justify-start mt-[15px] px-[19px]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900_05 tracking-[-0.75px]"
                    size="txtSegoeUI30"
                  >
                    Learn more about our video-to-text tool in this video:
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start rounded-[16px] w-[78%] md:w-full">
                  <div className="flex flex-col items-center justify-start rounded-[16px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[432px] items-center justify-start p-[152px] md:px-10 sm:px-5 rounded-[16px] w-full"
                      style={{
                        backgroundImage: "url('images/img_videototextt.png')",
                      }}
                    >
                      <Img
                        className="h-32 md:h-auto object-cover w-32"
                        src="images/img_playbutton.png"
                        alt="playbutton"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[-55px] mx-auto py-10 w-4/5 z-[1]">
              <div className="flex flex-col gap-[37px] items-start justify-start md:mt-0 mt-10 pb-[260px] w-[28%] md:w-full">
                <div className="bg-white-A700 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] shadow-bs17 w-20">
                  <Img
                    className="h-8 w-8"
                    src="images/img_svg_orange_600_32x32.svg"
                    alt="svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="leading-[40.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_05 tracking-[-0.90px]"
                    size="txtSegoeUI36"
                  >
                    <>
                      Frequently Asked
                      <br />
                      Questions
                    </>
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-px md:mt-0 mt-10 w-[49%]"
                orientation="vertical"
              >
                <div className="border-gray-300_06 border-solid border-t flex flex-col items-center justify-end p-4 w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between p-[7px] w-full">
                    <Text
                      className="ml-2 text-gray-900_05 text-xl"
                      size="txtSegoeUI20"
                    >
                      Can a video be converted to text?
                    </Text>
                    <Img
                      className="h-4 mr-2"
                      src="images/img_close_orange_600.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="border-gray-300_06 border-solid border-t flex flex-col items-center justify-end p-4 w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between p-[7px] w-full">
                    <Text
                      className="ml-2 text-gray-900_05 text-xl"
                      size="txtSegoeUI20"
                    >
                      Can I convert video to text for free?
                    </Text>
                    <Img
                      className="h-4 mr-2"
                      src="images/img_close_orange_600.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="border-gray-300_06 border-solid border-t flex flex-col items-center justify-end p-4 w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between p-[7px] w-full">
                    <Text
                      className="ml-2 sm:ml-[0] text-gray-900_05 text-xl"
                      size="txtSegoeUI20"
                    >
                      How do I convert a video to a Word document?
                    </Text>
                    <Img
                      className="h-4 mr-2"
                      src="images/img_close_orange_600.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="border-gray-300_06 border-solid border-t flex flex-col items-center justify-end p-4 w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[7px] w-full">
                    <Text
                      className="ml-2 sm:ml-[0] text-gray-900_05 text-xl"
                      size="txtSegoeUI20"
                    >
                      How do I extract words from a video?
                    </Text>
                    <Img
                      className="h-4 mr-2"
                      src="images/img_close_orange_600.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="border-gray-300_06 border-solid border-t flex flex-col items-center justify-end p-4 w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between p-[7px] w-full">
                    <Text
                      className="ml-2 mt-0.5 text-gray-900_05 text-xl"
                      size="txtSegoeUI20"
                    >
                      How can I convert MP4 to text?
                    </Text>
                    <Img
                      className="h-4 mr-2"
                      src="images/img_close_orange_600.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="border-gray-300_06 border-solid border-y flex flex-col items-center justify-start p-4 w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[5px] w-full">
                    <Text
                      className="ml-2.5 sm:ml-[0] sm:mt-0 mt-[5px] text-gray-900_05 text-xl"
                      size="txtSegoeUI20"
                    >
                      What file formats are compatible with VEED?
                    </Text>
                    <Img
                      className="h-4 mr-2.5"
                      src="images/img_close_orange_600.svg"
                      alt="close"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col font-montserrat items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
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

export default DesktopThirtyFourPage;
