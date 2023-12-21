import React from "react";

import { Button, Img, Text } from "components";
import LoginPage from "pages/Login";
import Forget from "pages/ForgotPassword";
import { useNavigate } from "react-router-dom";

const ForgotPasswordOnePage: React.FC = () => {

  const logs = useNavigate();
  const recover = useNavigate();

  const Login = () => {
    logs('/Login')
  }

  const recoverPage = () => {
    recover('/ForgotPassword')
  }

  const history = useNavigate()

  const switchPage = () => {
   history('/signup');
   
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto sm:pr-5 pr-[37px] pl-[37px] pt-[37px] w-full">
        <div className="h-[1062px] md:h-[911px] max-w-[1402px] mt-3.5 mx-auto md:px-5 relative w-full">
          <div className="bg-gradient10  md:h-[819px] h-[859px] mx-auto pb-[39px] w-[97%] md:w-full">
            <Img
              className="h-[756px] mx-auto object-cover w-full"
              src="images/img_loginbannerpng.png"
              alt="loginbannerpng"
            />
            <Img
              className="absolute h-[819px] inset-x-[0] mx-auto top-[0]"
              src="images/img_loginbannermasksvg.svg"
              alt="loginbannermask"
            />
          </div>
          <div className="absolute h-[1062px] md:h-[897px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[897px] mx-auto object-cover"
              src="images/img_loginbannerlinessvg.png"
              alt="loginbannerline"
            />
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[114px] top-[8%] w-[97%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start py-6 w-full">
                  <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[185px] w-full">
                    <div className="bg-gradient11  h-[731px] relative rounded-md w-full">
                      <Img
                        className="h-[731px] m-auto object-cover rounded-md w-full"
                        src="images/img_pseudo_731x750.png"
                        alt="pseudo"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[84%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                              size="txtMontserratSemiBold52WhiteA700"
                            >
                              Recover Password
                            </Text>
                          </div>
                          <Text
                            className="mt-[3px] text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                            size="txtMontserratRegular24Gray50"
                          >
                            Enter email associated with account
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[61px] pb-[35px] w-full">
                          <div className="border-b-2 relative border-solid border-white-A700_7f flex flex-col items-center justify-start py-3.5 w-full">
                            <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                              <Text
                                className="text-[15px] text-pink-50"
                                size="txtMontserratRegular15"
                              >
                                Email
                              </Text>
                            </div>
                            <input className="recover-input top-[2%]" type="text"  />
                          </div>
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            onClick={recoverPage}
                            className="capitalize cursor-pointer min-w-[150px] rounded-[30px] text-center text-xl tracking-[0.50px]"
                            color="orange_600"
                            size="2xl"
                            variant="fill"
                          >
                            Recover
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-end ml-3 md:ml-[0] mt-[76px] pr-[3px] py-[3px]">
                          <p
                            className="mt-0.5 cursor text-lg text-pink-50"
                            onClick={Login}
                            size="txtMontserratRegular18"
                          >
                            Proceed to login
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 top-[0] w-[97%]">
              <div className="flex flex-col items-end justify-start md:px-10 sm:px-5 px-[50px] w-full">
                <div className="flex flex-row items-center justify-end w-[19%] md:w-full">
                  <div className="flex flex-col items-center justify-end p-[11px]">
                    <a
                      href="javascript:"
                      className="mt-0.5 text-blue_gray-900_01 text-center text-lg tracking-[0.50px]"
                    >
                      <Text onClick={Login} size="txtMontserratMedium18Bluegray90001">
                        Login
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-start px-2.5 w-[55%]">
                    <Button
                      className="cursor-pointer min-w-[110px] rounded-[23px] text-center text-lg tracking-[0.50px]"
                      color="white_A700"
                      size="xl"
                      onClick={switchPage}
                      variant="fill"
                    >
                      Register
                    </Button>
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

export default ForgotPasswordOnePage;
