import React from "react";

import { Button, Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
    <div className= {props.className}>
      <header className="flex flex-col items-center justify-center md:px-5 w-full" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1436" height="10" viewBox="0 0 1436 10" fill="none">
              <mask id="path-1-inside-1_60_11978" fill="white">
                <path d="M0 0H1443V10H0V0Z"/>
              </mask>
              <path d="M0 0V-10H-10V0H0ZM1443 0H1453V-10H1443V0ZM1443 10V20H1453V10H1443ZM0 10H-10V20H0V10ZM0 10H1443V-10H0V10ZM1433 0V10H1453V0H1433ZM1443 0H0V20H1443V0ZM10 10V0H-10V10H10Z" fill="#FD00B399" mask="url(#path-1-inside-1_60_11978)"/>
            </svg>
              <div className="md:h-[171px] h-[73px] m-0 sm:h-[85px] md:ml-[0]  mt-4 relative w-[102%] md:w-full">
                <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                  <div className="nav-links flex md:flex-col flex-row md:gap-10 items-center justify-end px-[15px] w-full">
                    <div className="flex md:flex-1 flex-row gap-3.5 items-center hidden justify-center pr-[18px] w-[29%] md:w-full">
                      <div className="flex flex-row items-center justify-start p-4 shadow-bs4 w-[51%]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M3.60357 7.557L10.7416 4.448C10.8594 4.39751 10.9861 4.37112 11.1142 4.37038C11.2423 4.36963 11.3693 4.39456 11.4877 4.44367C11.6061 4.49279 11.7134 4.5651 11.8034 4.65636C11.8933 4.74761 11.9641 4.85595 12.0116 4.975L16.9356 16.877C17.0369 17.1185 17.0398 17.3899 16.9438 17.6335C16.8478 17.8771 16.6604 18.0736 16.4216 18.181L9.28457 21.29C9.16673 21.3406 9.03994 21.3672 8.91169 21.368C8.78343 21.3688 8.65631 21.3439 8.53783 21.2948C8.41935 21.2457 8.31192 21.1733 8.22187 21.082C8.13183 20.9906 8.061 20.8822 8.01357 20.763L3.08957 8.86C2.98855 8.61851 2.98574 8.34713 3.08173 8.1036C3.17773 7.86007 3.36495 7.66461 3.60357 7.557Z" stroke="#cc42bd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 4.35999H16C16.2652 4.35999 16.5196 4.46534 16.7071 4.65288C16.8946 4.84042 17 5.09477 17 5.35999V8.85999" stroke="#cc42bd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 6.35999C20.264 6.47199 20.52 6.57699 20.768 6.67499C21.0121 6.77857 21.2051 6.97488 21.3045 7.22073C21.4039 7.46659 21.4015 7.74185 21.298 7.98599L19 13.36" stroke="#cc42bd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        <Text
                          className="ml-1 text-base match"
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
                          <Img
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center Dashboard-left-nav justify-center w-[38%] md:w-full">
                      <div className="flex flex-col items-center justify-end cursor p-3 w-[32%] sm:w-full">
                        <div className=" credit-wrap border border-gray-200_03 border-solid flex flex-row items-center justify-center p-[5px] rounded-[15px] w-[97%] md:w-full">
                          <Text
                            className="ml-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            Credit  {" "}
                          </Text>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                            <path d="M1.64435 11.5053H9.97416C10.175 11.5053 10.3676 11.4256 10.5097 11.2835C10.6517 11.1413 10.7316 10.9481 10.7316 10.7471C10.7316 10.5461 10.6517 10.3534 10.5097 10.2113C10.3676 10.0691 10.175 9.9894 9.97416 9.9894H3.91654C2.9125 9.9894 1.94963 9.59005 1.23967 8.87963C0.529705 8.1692 0.130859 7.20594 0.130859 6.20125C0.130859 5.19656 0.529705 4.23281 1.23967 3.52239C1.94963 2.81196 2.9125 2.4131 3.91654 2.4131H5.43149V0.898132H8.46018V2.41407H12.2456V5.44498H3.91654C3.71565 5.44498 3.52307 5.5247 3.38102 5.66684C3.23897 5.80898 3.15906 6.00169 3.15906 6.20271C3.15906 6.40373 3.23897 6.59644 3.38102 6.73858C3.52307 6.88072 3.71565 6.96044 3.91654 6.96044H9.97416C10.9782 6.96044 11.9411 7.35979 12.651 8.07021C13.361 8.78064 13.7598 9.7439 13.7598 10.7486C13.7598 11.7533 13.361 12.717 12.651 13.4275C11.9411 14.1379 10.9782 14.5372 9.97416 14.5372H8.45921V16.0527H5.43052V14.5372H1.64435V11.5053Z" fill="purple"/>
                          </svg>
                          <Text
                            className="ml-[7px] mr-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[57px] cursor"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Img
                        className="h-[57px] cursor"
                        src="images/img_item.svg"
                        alt="item"
                      />
                      <div className="flex flex-row items-center justify-evenly w-[47%] sm:w-full">
                        <section className="thunder cursor">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <g clip-path="url(#clip0_60_11959)">
                              <path d="M14.3854 6.76984C14.2558 6.55947 14.027 6.43108 13.7802 6.43108H10.5122L12.2785 0.926682C12.3476 0.710734 12.3099 0.474323 12.1761 0.291187C12.0428 0.108551 11.8294 0 11.6029 0H8.35465C8.04615 0 7.77285 0.199253 7.67907 0.492902L5.04466 8.70403C4.97554 8.91993 5.01323 9.15623 5.14709 9.33948C5.28034 9.52212 5.49379 9.63067 5.7202 9.63067H6.29211H8.91483L8.06835 18.6716C8.05481 18.8153 8.14543 18.948 8.2843 18.988C8.4225 19.0282 8.56998 18.9646 8.63534 18.8357L14.4131 7.46277C14.5248 7.2424 14.5143 6.98029 14.3854 6.76984Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_60_11959">
                                <rect width="19" height="19" fill="white" transform="translate(0.25)"/>
                              </clipPath>
                            </defs>
                            </svg>
                        </section>
                        <div className="flex flex-col items-end justify-start pl-2 py-2 w-4/5">
                          <div className="border border-orange-600 border-solid flex flex-row items-center justify-start user-btn rounded-[20px] cursor w-[99%] md:w-full">
                            <div className=" user-img-wrap cursor flex flex-col items-start justify-start ml-3 w-[38px]">
                              <Img
                                className=" user-img h-[39px] md:h-auto object-cover rounded-[20px] w-[74%]"
                                src="images/img_bv7mozwnhchqrqp.png"
                                alt="bv7mozwnhchqrqp"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="capitalize text-[15px] pl-2 text-white-A700"
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
                <div className="absolute ml-4 logo-wrap flex flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col logo-img-wrap items-start justify-start px-4 w-full">
                      <div className="flex flex-col items-center justify-start w-fit md:w-full">
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
    </div>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
