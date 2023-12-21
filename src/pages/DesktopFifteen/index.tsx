import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const DesktopFifteenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[66px] items-center justify-start mx-auto py-[11px] w-full">
        <Header className="bg-white-A700 border-b border-gray-200_03 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="md:h-[1109px] h-[1444px] mb-[77px] md:px-5 relative w-full">
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
            className="absolute bg-cover bg-no-repeat flex flex-col h-[1032px] inset-x-[0] items-center justify-start mx-auto p-10 sm:px-5 top-[0] w-full"
            style={{
              backgroundImage:
                "url('images/img_loginbannermasksvg_black_900.png')",
            }}
          >
            <div className="flex flex-col items-center justify-start mb-[203px] mt-[78px] md:px-10 sm:px-5 px-[97px] w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start pb-5 w-full">
                <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
                  <div className="bg-gradient12  h-[651px] relative rounded-md shadow-bs6 w-full">
                    <Img
                      className="h-[651px] m-auto object-cover rounded-md w-full"
                      src="images/img_pseudo_651x718.png"
                      alt="pseudo"
                    />
                    <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[84%]">
                      <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
                        <div className="bg-gray-800_75 flex flex-col gap-[9px] items-center justify-center p-[25px] sm:px-5 w-full">
                          <Img
                            className="h-8 mt-[5px] w-8"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                          <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[52px]">
                            <Text
                              className="text-base text-center text-pink-50"
                              size="txtMontserratRegular16Pink50"
                            >
                              Avatar
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                        <div className="bg-blue-500_75 flex flex-col gap-[9px] items-center justify-center p-[25px] sm:px-5 w-full">
                          <Img
                            className="h-8 mt-[5px]"
                            src="images/img_file.svg"
                            alt="file"
                          />
                          <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[52px]">
                            <Text
                              className="text-base text-center text-pink-50"
                              size="txtMontserratRegular16Pink50"
                            >
                              Info
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[35%] md:w-full">
                        <div className="bg-blue-500_75 flex flex-col gap-[9px] items-center justify-center p-[25px] sm:px-5 w-full">
                          <Img
                            className="h-8 mt-[5px]"
                            src="images/img_television.svg"
                            alt="television"
                          />
                          <div className="flex flex-col items-center justify-start mb-1 md:px-10 sm:px-5 px-[52px]">
                            <Text
                              className="text-base text-center text-pink-50"
                              size="txtMontserratRegular16Pink50"
                            >
                              Finish
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[2%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[95%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-end pt-12 w-full">
                          <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start w-full">
                            <div className="flex flex-col gap-[35px] items-start justify-start w-[86%] md:w-full">
                              <div className="sm:gap-5 grid sm:grid-cols-1 grid-cols-2 gap-[6%] justify-center min-h-[auto] w-full">
                                <div className="h-[61px] relative w-full">
                                  <Text
                                    className="mb-[-9.43px] text-[15px] text-pink-50 z-[1]"
                                    size="txtMontserratRegular15"
                                  >
                                    Height
                                  </Text>
                                  <div className="md:h-[50px] h-[52px] w-[93%]">
                                    <Img
                                      className="h-6 ml-auto my-auto w-6 absolute top-[10%] right-[0]"
                                      src="images/img_svg.svg"
                                      alt="svg"
                                    />
                                    <div className="absolute border-b-2 border-solid border-white-A700_7f flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full">
                                      <div className="flex flex-col items-start justify-start mb-0.5 w-full">
                                        <Text
                                          className="text-sm text-white-A700"
                                          size="txtMontserratMedium14"
                                        >
                                          Height
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[61px] relative w-full">
                                  <Text
                                    className="mb-[-7.98px] text-[15px] text-pink-50 z-[1]"
                                    size="txtMontserratRegular15"
                                  >
                                    Hair color
                                  </Text>
                                  <div className="md:h-[50px] h-[52px] w-[93%]">
                                    <Img
                                      className="h-6 ml-auto my-auto w-6 absolute right-[0]"
                                      src="images/img_svg.svg"
                                      alt="svg"
                                    />
                                    <div className="absolute border-b-2 border-solid border-white-A700_7f flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full">
                                      <div className="flex flex-col items-start justify-start mb-0.5 w-full">
                                        <Text
                                          className="text-sm text-white-A700"
                                          size="txtMontserratMedium14"
                                        >
                                          Choose your Hair Color
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="md:h-[50px] h-[61px] relative w-full">
                                  <div className="absolute bottom-[0] md:h-[50px] h-[52px] inset-x-[0] w-[100%]">
                                    <Img
                                      className="h-6 ml-auto w-6 absolute right-[0]"
                                      src="images/img_svg.svg"
                                      alt="svg"
                                    />
                                    <div className="absolute border-b-2 border-solid border-white-A700_7f flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full">
                                      <div className="flex flex-col items-start justify-start mb-0.5 w-full">
                                        <Text
                                          className="text-sm text-white-A700"
                                          size="txtMontserratMedium14"
                                        >
                                          Choose your country
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="absolute left-[0%] text-[15px] text-pink-50 top-[0]"
                                    size="txtMontserratRegular15"
                                  >
                                    Country
                                  </Text>
                                </div>
                                <div className="h-[61px] relative w-full">
                                  <Text
                                    className="mb-[-7.98px] text-[15px] text-pink-50 z-[1]"
                                    size="txtMontserratRegular15"
                                  >
                                    Gender
                                  </Text>
                                  <div className="md:h-[50px] h-[52px] mt-auto mx-auto w-[93%]">
                                    <Img
                                      className="h-6 ml-auto my-auto w-6 absolute right-[0]"
                                      src="images/img_svg.svg"
                                      alt="svg"
                                    />
                                    <div className="absolute border-b-2 border-solid border-white-A700_7f flex flex-col h-full inset-[0] items-center justify-center m-auto py-4 w-full">
                                      <div className="flex flex-col items-start justify-start mb-0.5 w-full">
                                        <Text
                                          className="text-sm text-white-A700"
                                          size="txtMontserratMedium14"
                                        >
                                          Choose your Gender
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[52px] relative w-1/2">
                                <div className="border-b-2 border-solid border-white-A700_7f h-[52px] w-[93%]"></div>
                                <Text
                                  className="absolute h-max inset-y-[0] left-[0%] my-auto text-[15px] text-pink-50"
                                  size="txtMontserratRegular15"
                                >
                                  Birthday
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between p-[23px] sm:px-5 w-full">
                              <div className="flex flex-col items-center justify-end sm:mt-0 mt-[25px] py-[5px]">
                                <Text
                                  className="text-base mr-2 text-pink-50 text-right"
                                  size="txtMontserratRegular16Pink50"
                                >
                                  2 of 3 steps to complete to access PRO
                                  upgrade, features
                                </Text>
                              </div>
                              <Button
                                className="!text-blue-500 capitalize cursor-pointer font-medium mb-[11px] min-w-[115px] sm:mt-0 mt-5 rounded-[21px] text-center text-lg tracking-[0.50px]"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              >
                                Next
                              </Button>
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
    </>
  );
};

export default DesktopFifteenPage;
