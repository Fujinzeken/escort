import React from "react";

import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import LoginPage from "pages/Login";

const ForgotPasswordPage: React.FC = () => {
  const login = useNavigate();
  
  const  LoginPage = () => {
    login('/Login')
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
          <div className="absolute h-[1062px] md:h-[897px] inset-[0] justify-center m-auto pb-[165px] w-full">
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
                      <div className="absolute flex flex-col md:gap-10 gap-[87px] h-max inset-[0] items-center justify-center m-auto w-[84%]">
                        <div className="flex flex-col items-start justify-start pb-0.5 w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                              size="txtMontserratSemiBold52WhiteA700"
                            >
                              Check your Email
                            </Text>
                          </div>
                          <Text
                            className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                            size="txtMontserratRegular24Gray50"
                          >
                            Follow a password recovery link we sent to your
                            email address
                          </Text>
                        </div>
                        <Img
                          className="h-[273px]"
                          src="images/img_illustrationemail.svg"
                          alt="illustrationema"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 top-[0] w-[97%]">
              <div className="flex flex-col items-end justify-start md:px-10 sm:px-5 px-[50px] w-full">
                <div className="flex flex-row items-center justify-end w-[19%] md:w-full">
                  <div className="flex flex-col items-center justify-end recover-logs p-[11px]">
                    <a
                      href="javascript:"
                      className="mt-0.5 text-blue_gray-900_01 text-center text-lg tracking-[0.50px]"
                    >
                      <a onClick={LoginPage} size="txtMontserratMedium18Bluegray90001">
                        Login
                      </a>
                    </a>
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

export default ForgotPasswordPage;
