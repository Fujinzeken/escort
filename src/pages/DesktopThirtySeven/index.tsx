import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";
import Header1 from "components/Header1";

const DesktopThirtySevenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[38px] items-center justify-end mx-auto pt-[39px] w-full">
        <Header1 className="bg-white-A700 border-b border-gray-200_03 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="h-[2591px] sm:h-[2648px] md:h-[3057px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[1032px] items-center justify-start mx-auto p-[25px] sm:px-5 w-full"
              style={{
                backgroundImage:
                  "url('images/img_loginbannermasksvg_black_900.png')",
              }}
            >
              <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between my-[15px] w-[99%] md:w-full">
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
                      <div className="flex flex-row items-center justify-start pr-[11px] py-[11px] w-full">
                        <Img
                          className="h-5"
                          src="images/img_settings_gray_800.svg"
                          alt="settings"
                        />
                        <Text
                          className="text-base text-gray-800"
                          size="txtMontserratRegular16Gray800"
                        >
                          Find Matches
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-evenly mt-[3px] py-[11px] w-full">
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
                      </div>
                      <Line className="bg-gray-300_02 h-px mt-2.5 w-full" />
                      <div className="flex flex-row items-center justify-start mt-2.5 pr-[11px] py-[11px] w-full">
                        <Img
                          className="h-5"
                          src="images/img_svgmargin.svg"
                          alt="svgmargin"
                        />
                        <Text
                          className="text-base text-gray-800"
                          size="txtMontserratRegular16Gray800"
                        >
                          Gifts
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
                        <Img
                          className="h-5"
                          src="images/img_favorite_gray_800.svg"
                          alt="favorite"
                        />
                        <Text
                          className="text-base text-gray-800"
                          size="txtMontserratRegular16Gray800"
                        >
                          Likes
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
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
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[3px] pr-[11px] py-[11px] w-full">
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
                      <Line className="bg-gray-300_02 h-px mt-2.5 w-full" />
                      <div className="flex flex-row items-center justify-start mt-2.5 pr-[11px] py-[11px] w-full">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-roboto gap-[15px] items-start justify-start mb-[825px] md:mt-0 mt-[15px] pl-[9px] py-[9px] rounded-[30px] w-[76%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[30px]">
                    <Text
                      className="text-lg text-red-700 uppercase"
                      size="txtRobotoBold18"
                    >
                      Add my profile
                    </Text>
                  </div>
                  <div className="h-10 md:h-[55px] mb-[15px] md:ml-[0] ml-[30px] md:pr-10 sm:pr-5 pr-[471px] relative shadow-bs8 w-3/5 md:w-full">
                    <div className="flex flex-col h-full items-center justify-start my-auto w-[18%]">
                      <div className="bg-white-A700 border border-gray-300 border-solid h-10 pr-[5px] relative w-full">
                        <Text
                          className="absolute bottom-1/4 right-[9%] text-[15px] text-center text-gray-800_09"
                          size="txtRobotoRegular15Gray80009"
                        >
                          Edit profile
                        </Text>
                        <div className="absolute flex flex-row gap-[23px] h-full inset-y-[0] items-center justify-between left-[0] my-auto w-[87%]">
                          <div className="flex flex-row items-center justify-between w-[91%]">
                            <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[285px] w-full">
                              <Text
                                className="bg-gray-100_02 border-gray-300 border-r border-solid border-y h-10 justify-center sm:pl-5 pl-[35px] py-2.5 text-[15px] text-center text-gray-600_02 w-px"
                                size="txtRobotoRegular15Gray60002"
                              >
                                Rates
                              </Text>
                            </div>
                            <Text
                              className="bg-gray-100_02 border-gray-300 border-r border-solid border-y h-10 justify-center sm:pl-5 pl-[35px] py-2.5 text-[15px] text-center text-gray-600_02 w-px"
                              size="txtRobotoRegular15Gray60002"
                            >
                              Video
                            </Text>
                          </div>
                          <Text
                            className="bg-gray-100_02 border-gray-300 border-r border-solid border-y h-10 justify-center sm:pl-5 pl-[35px] py-2.5 text-[15px] text-center text-gray-600_02 w-px"
                            size="txtRobotoRegular15Gray60002"
                          >
                            Photos
                          </Text>
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto md:pl-10 sm:pl-5 pl-[369px]">
                          <Text
                            className="bg-gray-100_02 border-gray-300 border-r border-solid border-y h-10 justify-center sm:pl-5 pl-[35px] py-2.5 text-[15px] text-center text-gray-600_02 w-px"
                            size="txtRobotoRegular15Gray60002"
                          >
                            Services
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto md:pl-10 sm:pl-5 pl-[471px]">
                      <Text
                        className="bg-gray-100_02 border-gray-300 border-r border-solid border-y h-10 justify-center sm:pl-5 pl-[35px] py-2.5 text-[15px] text-center text-gray-600_02 w-px"
                        size="txtRobotoRegular15Gray60002"
                      >
                        Working time
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 h-[1581px] ml-auto mr-[70px] mt-[-775px] rounded-[30px] w-[70%] z-[1]"></div>
          </div>
          <div className="absolute bottom-[0] flex flex-col font-roboto gap-5 justify-start right-[0] w-[73%]">
            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[41%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xs"
                  size="txtRobotoRegular12Black900"
                >
                  Model name
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row gap-[5px] items-center justify-end mt-0.5 pb-1.5 px-1.5 w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-[15px] text-gray-900"
                    size="txtRobotoRegular15Gray900"
                  >
                    Steph
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mb-[11px]">
                  <Text className="text-lg text-red-700" size="txtRobotoBold18">
                    *
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center pb-2.5 px-2.5 w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start mb-2.5 sm:ml-[0] pb-[3px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtRobotoRegular12Black900"
                      >
                        Country
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-1.5 items-center justify-end mt-0.5 pb-1.5 px-1.5 w-full">
                      <div className="flex flex-col items-start justify-start w-[85%]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-900"
                            size="txtRobotoRegular15Gray900"
                          >
                            -- choose country --
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[11px]">
                        <Text
                          className="text-lg text-red-700"
                          size="txtRobotoBold18"
                        >
                          *
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start mb-2.5 sm:ml-[0] pb-[3px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtRobotoRegular12Black900"
                      >
                        City
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-8 items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                      <div className="flex flex-col items-start justify-start ml-3.5 w-[71%]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-900"
                            size="txtRobotoRegular15Gray900"
                          >
                            -- choose city --
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[11px]">
                        <Text
                          className="text-lg text-red-700"
                          size="txtRobotoBold18"
                        >
                          *
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[41%] md:w-full">
                <div className="flex flex-row items-end justify-start md:pr-10 sm:pr-5 pr-[339px] w-full">
                  <Text
                    className="mt-[9px] text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Profile picture{" "}
                  </Text>
                  <Text
                    className="mb-0.5 ml-0.5 text-lg text-red-700"
                    size="txtRobotoBold18"
                  >
                    *
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid md:h-[296px] h-[308px] p-1.5 relative w-1/2">
                    <Img
                      className="h-[296px] m-auto object-cover w-[95%]"
                      src="images/img_uploadprofilepng.png"
                      alt="uploadprofilepn"
                    />
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[15%]">
                      <Text
                        className="text-gray-600_02 text-xl"
                        size="txtRobotoBold20Gray60002"
                      >
                        Your photo
                      </Text>
                      <Text
                        className="text-gray-600_02 text-xl"
                        size="txtRobotoBold20Gray60002"
                      >
                        here
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="bg-white-A700 border-gray-300 border-l-4 border-r border-solid border-y h-9 justify-center mt-[5px] pl-5 sm:pr-5 pr-[35px] py-2.5 text-black-900 text-shadow-ts text-xs w-[425px]"
                    size="txtRobotoRegular12Black900"
                  >
                    NOT ALLOWED: watermark, logo, phone number, any text
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[5px] w-full">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[62px] text-[10px] text-center uppercase"
                      shape="square"
                      color="red_300"
                      size="md"
                      variant="outline"
                    >
                      Browse
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-5 pb-[3px] w-[82%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Description
                  </Text>
                </div>
                <Input
                  name="textarea"
                  placeholder="Not allowed: Phone Number, E-mail address, Website URL"
                  className="leading-[normal] p-0 placeholder:text-gray-600_05 text-[15px] text-left w-full"
                  wrapClassName="border border-gray-300 border-solid mt-0.5 w-full"
                  type="email"
                  shape="square"
                  color="white_A700"
                  size="xl"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-[17px] w-[41%] md:w-full">
                <div className="flex flex-row items-end justify-start md:pr-10 sm:pr-5 pr-[337px] w-full">
                  <Text
                    className="mt-[9px] text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Type of profile{" "}
                  </Text>
                  <Text
                    className="mb-0.5 ml-0.5 text-lg text-red-700"
                    size="txtRobotoBold18"
                  >
                    *
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[3px] pr-[5px] py-[5px] w-full">
                  <div className="flex sm:flex-1 flex-col items-start justify-start pb-0.5 pr-0.5 w-[18%] sm:w-full">
                    <Radio
                      value="Female"
                      className="leading-[normal] text-black-900 text-left text-xs"
                      inputClassName="bg-white-A700 border border-light_blue-A700 border-solid h-[13px] mr-[5px] rounded-md w-[13px]"
                      checked={true}
                      name="female"
                      label=" Female"
                      id="Female"
                    ></Radio>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-0.5 sm:ml-[0] pb-0.5 pr-0.5 w-[15%] sm:w-full">
                    <Radio
                      value="Male"
                      className="leading-[normal] text-black-900 text-left text-xs"
                      inputClassName="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mr-[5px] rounded-md w-[13px]"
                      checked={false}
                      name="male"
                      label=" Male"
                      id="Male"
                    ></Radio>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-0.5 sm:ml-[0] pb-0.5 pr-0.5 w-[16%] sm:w-full">
                    <Radio
                      value="Trans"
                      className="leading-[normal] text-black-900 text-left text-xs"
                      inputClassName="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mr-[5px] rounded-md w-[13px]"
                      checked={false}
                      name="trans"
                      label=" Trans"
                      id="Trans"
                    ></Radio>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-0.5 sm:ml-[0] w-1/4 sm:w-full">
                    <Radio
                      value="Duowithgirl"
                      className="leading-[normal] text-black-900 text-left text-xs"
                      inputClassName="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mr-[5px] rounded-md w-[13px]"
                      checked={false}
                      name="duowithgirl"
                      label=" Duo with girl"
                      id="Duowithgirl"
                    ></Radio>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-0.5 sm:ml-[0] w-[18%] sm:w-full">
                    <Radio
                      value="Couple"
                      className="leading-[normal] text-black-900 text-left text-xs"
                      inputClassName="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mr-[5px] rounded-md w-[13px]"
                      checked={false}
                      name="couple"
                      label=" Couple"
                      id="Couple"
                    ></Radio>
                  </div>
                </div>
              </div>
              <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-5 w-full">
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Age
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Height
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Weight
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Ethnicity
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-0.5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Hair color
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Hair length
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-0.5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Breast size
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Breast type
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-0.5 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Available for
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-[3px] pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start pb-[3px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Nationality
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start pb-2.5 px-2.5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start mb-2.5 pb-0.5 w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Travel
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[9px] pb-[3px] w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Languages (max 6)
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-end justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start mb-1.5 ml-1 mt-[9px] w-[18%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="font-inter md:h-[25px] h-[29px] mb-[3px] relative w-[4%]">
                      <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] pr-0.5 py-0.5">
                        <Text
                          className="text-[8px] text-red-700"
                          size="txtInterRegular8"
                        >
                          C
                        </Text>
                      </div>
                      <div className="absolute flex flex-col font-roboto items-center justify-start right-[0] top-[0]">
                        <Text
                          className="text-lg text-red-700"
                          size="txtRobotoBold18"
                        >
                          *
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start pb-2.5 px-2.5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start pb-0.5 w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Tattoo
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[9px] pb-[3px] w-[41%] md:w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-start md:pr-10 sm:pr-5 pr-[332px] w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Piercing
                    </Text>
                    <Text
                      className="bg-red-A700_01 h-[15px] justify-center px-1 rounded-[3px] text-[11px] text-white-A700 w-[33px]"
                      size="txtRobotoRegular11"
                    >
                      NEW
                    </Text>
                  </div>
                  <div className="h-10 relative w-full">
                    <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-row h-full inset-[0] items-start justify-between m-auto p-[9px] w-full">
                      <div className="flex flex-col items-start justify-start mb-1 ml-0.5 w-[18%]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-900"
                            size="txtRobotoRegular15Gray900"
                          >
                            Choose
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter items-start justify-start mr-1 my-0.5 pr-0.5 py-0.5">
                        <Text
                          className="text-[8px] text-red-700"
                          size="txtInterRegular8"
                        >
                          C
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col items-center justify-start right-[1%] top-[0]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start pb-2.5 px-2.5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start mb-2.5 pb-0.5 w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Smoker
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mt-0.5 pb-1.5 px-1.5 w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 w-[21%]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[11px]">
                      <Text
                        className="text-lg text-red-700"
                        size="txtRobotoBold18"
                      >
                        *
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[9px] pb-[3px] w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Eye color
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mt-0.5 p-[11px] w-full">
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[22%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start pb-2.5 px-2.5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[9px] pb-0.5 w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Orientation
                    </Text>
                  </div>
                  <Input
                    name="divselectizeinp"
                    placeholder="Choose"
                    className="!placeholder:text-gray-900 !text-gray-900 leading-[normal] p-0 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid mt-0.5 w-full"
                    shape="square"
                    color="white_A700"
                    size="xl"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-2.5 pb-0.5 w-[41%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Pubic hair
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mt-0.5 p-[11px] w-full">
                    <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[22%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtRobotoRegular15Gray900"
                        >
                          Choose
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] pb-[3px] w-2/5 md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Are you pornstar?
                  </Text>
                </div>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid h-10 justify-center mt-0.5 pl-[21px] pr-[35px] sm:px-5 py-2.5 text-[15px] text-gray-900 w-[415px]"
                  size="txtRobotoRegular15Gray900"
                >
                  No
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-[19px] pb-0.5 w-[82%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Services
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid h-[58px] mt-0.5 w-full"></div>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-5 pb-[3px] w-[41%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Meeting with
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mt-0.5 p-[11px] w-full">
                  <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[21%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15px] text-gray-900"
                        size="txtRobotoRegular15Gray900"
                      >
                        Choose
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-[19px] w-[41%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Web
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid h-10 mt-0.5 w-full"></div>
              </div>
              <div className="h-28 ml-2.5 md:ml-[0] relative w-[41%] sm:w-full">
                <div className="absolute bg-gradient1  border border-red-900_01 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-2.5 top-[21%] w-full">
                  <Text
                    className="text-[15px] text-white-A700 uppercase"
                    size="txtRobotoBold15"
                  >
                    <>Don&#39;t have your own website?</>
                  </Text>
                  <Text
                    className="text-[15px] text-white-A700"
                    size="txtRobotoRegular15WhiteA700"
                  >
                    Create a Free Escort Website here
                  </Text>
                </div>
                <Img
                  className="absolute h-28 inset-y-[0] my-auto object-cover right-[0] w-2/5"
                  src="images/img_after_112x170.png"
                  alt="after_One"
                />
              </div>
              <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-5 pb-[3px] w-[41%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xs"
                      size="txtRobotoRegular12Black900"
                    >
                      Cell phone
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-0.5 w-full">
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[11px]">
                      <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[71%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-900"
                            size="txtRobotoRegular15Gray900"
                          >
                            Choose
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-300 border-solid h-10 w-[70%]"></div>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-inter gap-3 grid sm:grid-cols-1 grid-cols-6 ml-2.5 md:ml-[0] mt-5 md:pr-10 pr-24 sm:pr-5 w-[41%]"
                orientation="horizontal"
              >
                <div className="flex flex-row items-start justify-evenly w-full">
                  <div className="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mb-[9px] mt-[3px] rounded-sm w-[13px]"></div>
                  <Text
                    className="bg-deep_purple-400 border-[3px] border-gray-300_05 border-solid flex h-[26px] items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-[26px]"
                    size="txtInterRegular12"
                  >
                    H
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-center w-full">
                  <div className="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mb-[9px] mt-[3px] rounded-sm w-[13px]"></div>
                  <Text
                    className="bg-green-600 border-[3px] border-light_green-100 border-solid flex h-[26px] items-center justify-center ml-[5px] rounded-[50%] text-center text-white-A700 text-xs w-[26px]"
                    size="txtInterRegular12"
                  >
                    G
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-center w-full">
                  <div className="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mb-[9px] mt-[3px] rounded-sm w-[13px]"></div>
                  <Text
                    className="bg-light_green-600_01 border-[3px] border-light_green-100_01 border-solid flex h-[26px] items-center justify-center ml-[5px] rounded-[50%] text-center text-white-A700 text-xs w-[26px]"
                    size="txtInterRegular12"
                  >
                    P
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-center w-full">
                  <div className="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mb-[9px] mt-[3px] rounded-sm w-[13px]"></div>
                  <Text
                    className="bg-blue-400 border-[3px] border-light_blue-50 border-solid flex h-[26px] items-center justify-center ml-[5px] rounded-[50%] text-center text-white-A700 text-xs w-[26px]"
                    size="txtInterRegular12"
                  >
                    I
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-center w-full">
                  <div className="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mb-[9px] mt-[3px] rounded-sm w-[13px]"></div>
                  <Text
                    className="bg-green-A700 border-[3px] border-green-A100 border-solid flex h-[26px] items-center justify-center ml-[5px] rounded-[50%] text-center text-white-A700 text-xs w-[26px]"
                    size="txtInterRegular12"
                  >
                    Q
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-center w-full">
                  <div className="bg-white-A700 border border-gray-600_06 border-solid h-[13px] mb-[9px] mt-[3px] rounded-sm w-[13px]"></div>
                  <Text
                    className="bg-blue-A700 border-[3px] border-indigo-100_01 border-solid flex h-[26px] items-center justify-center ml-[5px] rounded-[50%] text-base text-center text-white-A700 w-[26px]"
                    size="txtInterRegular16"
                  >
                    9
                  </Text>
                </div>
              </List>
              <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mt-5 w-[41%] md:w-full">
                <div className="bg-gradient1  border border-red-300 border-solid flex flex-col justify-start p-1.5">
                  <Text
                    className="md:ml-[0] ml-[5px] text-center text-white-A700 text-xs"
                    size="txtInterRegular12"
                  >
                    r
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[17px] mr-1 text-center text-white-A700 text-xs uppercase"
                    size="txtRobotoBold12"
                  >
                    {" "}
                    Add another phone
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start ml-2.5 md:ml-[0] mt-[50px]">
                <Text
                  className="text-red-700 text-sm"
                  size="txtRobotoBold14Red700"
                >
                  Block country (optional)
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-center justify-start ml-2.5 md:ml-[0] mt-3.5 w-[41%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    Block country
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col font-inter items-end justify-end mt-[3px] p-2.5 w-full">
                  <div className="flex flex-col items-center justify-start mr-0.5 mt-0.5">
                    <Text
                      className="leading-[18.00px] text-[8px] text-red-700 w-full"
                      size="txtInterRegular8"
                    >
                      C
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-roboto items-center justify-start mt-[3px] w-full">
                  <Text
                    className="text-black-900 text-xs"
                    size="txtRobotoRegular12Black900"
                  >
                    You can set restrictions on certain countries that cannot be
                    seen your profile.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start ml-2.5 md:ml-[0] mt-5 w-[41%] md:w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[72px] text-center text-xs uppercase"
                  shape="square"
                  color="red_300"
                  size="xl"
                  variant="outline"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThirtySevenPage;
