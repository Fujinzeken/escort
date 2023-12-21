import React from "react";

import { Button, Img, Input, Text } from "components";

const DivdtindexfootPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1049px] mt-7 mx-auto pb-[98px] w-full">
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
          <div className="flex flex-col items-center justify-start max-w-[1049px] mx-auto w-full">
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
    </>
  );
};

export default DivdtindexfootPage;
