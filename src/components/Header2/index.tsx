import React from "react";

import { Button, Img, Text } from "components";

type Header2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header2: React.FC<Header2Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-2.5 sm:h-auto object-cover w-full"
          src="images/img_pseudo_4.png"
          alt="pseudo"
        />
        <div className="md:h-[171px] h-[73px] sm:h-[85px] md:ml-[0] ml-[25px] mr-[61px] mt-4 relative w-[95%] md:w-full">
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
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
