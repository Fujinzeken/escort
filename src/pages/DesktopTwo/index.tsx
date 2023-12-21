import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const DesktopTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[66px] items-center justify-start mx-auto py-[11px] w-full">
        <Header className="bg-white-A700 border-b border-gray-200_03 border-solid flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="md:h-[1109px] items-end h-[1444px] mb-[77px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto w-[94%]">
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
            className="absolute bg-cover bg-no-repeat flex flex-col h-[1032px] inset-x-[0] items-end justify-start mx-auto p-[92px] md:px-10 sm:px-5 top-[0] w-full"
            style={{ backgroundImage: "url('images/img_group18.png')" }}
          >
            <div className="flex flex-col items-center justify-start mb-36 mt-[33px] pb-5 w-[90%] md:w-full">
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
                  <div className="absolute can flex flex-col inset-x-[0] items-center justify-start mx-auto w-[95%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap gap-8 items-center justify-end pt-8 w-full">
                        <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                          <div className="flex flex-col items-center justify-start sm:px-5 px-[27px] w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtMontserratMedium20"
                            >
                              Tekena west, people want to see what you look
                              like!
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-end mt-[5px] p-[5px] w-full">
                            <Text
                              className="text-base text-center text-pink-50"
                              size="txtMontserratRegular16Pink50"
                            >
                              Upload photos to set your profile picture.
                            </Text>
                          </div>
                          <Img
                            className="h-[186px] md:h-auto mt-4 object-cover rounded-[12px] w-[186px]"
                            src="images/img_spandtselctavatar.png"
                            alt="spandtselctavat"
                          />
                          <Button
                            className="!text-pink-50 cursor-pointer min-w-[155px] mt-[18px] rounded-[15px] text-[15px] text-center"
                            color="pink_50"
                            size="md"
                            variant="outline"
                          >
                            Browse Image
                          </Button>
                        </div>
                        <div className="flex flex-col items-end justify-end p-[23px] sm:px-5 w-full">
                          <Button
                            className="capitalize cursor-pointer font-medium mb-[11px] min-w-[115px] mt-5 rounded-[21px] text-center text-lg tracking-[0.50px]"
                            color="white_A700_75"
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
    </>
  );
};

export default DesktopTwoPage;
