import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import { ToastContainer, toast } from "react-toastify";
import useProfile from "store/userProfile";

const LoginPage: React.FC = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    usernameEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameEmail: "",
    password: "",
  });
  const { setUserProfile, userProfile } = useProfile();
  const navigate = useNavigate();
  // const googleSignIn = useGoogleLogin({
  //   onSuccess: (res) => {
  //     console.log("res", res);
  //     alert("Login successfull. 😍");
  //   },
  // });

  const switchPage = () => {
    navigate("/Signup");
  };

  const switchForget = () => {
    navigate("/ForgotPasswordOne");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const camelCaseData = {
    usernameEmail: formData?.usernameEmail,
    password: formData?.password,
  };
  console.log(userProfile);

  const handleRegisterButtonClick = async (e) => {
    await handleFormSubmit(e);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Make API call using Axios
      const response = await axios.post(
        `https://lazer-escort.onrender.com/login`,
        camelCaseData
      );

      // Handle the response as needed
      localStorage.setItem("token", response?.data?.token);
      setUserProfile(response?.data);
      localStorage.setItem("user", JSON.stringify(response?.data));

      setLoading(false);
      if (response?.status === 200) {
        if (response?.data?.profile) {
          navigate("/EscortDashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      setLoading(false);
      if (error?.response) {
        const responseData = error?.response?.data;
        if (responseData?.errors) {
          setErrors(responseData?.errors);
        }
        if (responseData?.message) {
          setEmailError("");
          setPasswordError("");

          if (
            responseData?.message?.includes('"email" must be a valid email')
          ) {
            setEmailError("Email must be a valid Email Address");
          }
          if (
            responseData?.message?.includes(
              '"password" length must be at least 7 characters long'
            )
          ) {
            setPasswordError("Password must be more than 6 characters");
          }
        }
        window.scrollTo(0, 0);
        toast.error("Something went wrong");
        console.log(error);
      } else {
        // Handle other types of errors
        toast.error("Something went wrong");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      if (user.profile) {
        navigate("/EscortDashboard");
      } else {
        navigate("/dashboard");
      }
    }
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[42px] items-center justify-end mx-auto w-full">
        <Img
          className="h-2.5 sm:h-auto object-cover w-full"
          src="images/img_pseudo.png"
          alt="pseudo"
        />
        <div className="h-[1062px] md:h-[897px] md:px-5 relative w-full">
          <div className="absolute h-[1062px] md:h-[897px] inset-[0] justify-center m-auto w-[98%] md:w-full">
            <div className="bg-gradient10  md:h-[819px] h-[859px] mx-auto pb-[39px] w-[97%] md:w-full">
              <Img
                className="h-[756px] mx-auto object-cover w-full"
                src="images/img_loginbannerpng.png"
                alt="loginbannerpng"
              />
              <Img
                className="absolute h-[819px] loginimg items-center inset-x-[0] mx-auto top-[0]"
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
              <div className="absolute h-[779px] sm:h-[789px] inset-x-[0] mx-auto md:px-10 sm:px-5 px-[74px] top-[8%] w-[97%] md:w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[84%]">
                  <div className="flex flex-col items-center justify-start py-6 w-full">
                    <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[185px] w-full">
                      <div className="bg-gradient11  h-[731px] sm:h-[741px] relative rounded-md w-full">
                        <div className="h-[731px] sm:h-[741px] m-auto w-full">
                          <Img
                            className="h-[731px] m-auto object-cover rounded-md w-full"
                            src="images/img_pseudo_731x750.png"
                            alt="pseudo_One"
                          />
                          <form onSubmit={handleFormSubmit}>
                            <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[89%]">
                              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[95%] md:w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                                    size="txtMontserratSemiBold52WhiteA700"
                                  >
                                    Welcome back,
                                  </Text>
                                </div>
                                <Text
                                  className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                                  size="txtMontserratRegular24Gray50"
                                >
                                  Login to your account to continue.
                                </Text>
                              </div>
                              <div className="flex flex-col font-roboto items-center justify-start mt-[5px] w-[88%] md:w-full">
                                <div className="flex flex-col items-start justify-start pt-0.5 px-0.5 w-full">
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[13px] text-white-A700"
                                    size="txtRobotoRegular13"
                                  >
                                    Note: you can also log in using your
                                    existing Ladies-Forum account. Simply log in
                                    here!
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col font-montserrat items-center justify-start md:ml-[0] ml-[23px] mt-[34px] w-[95%] md:w-full">
                                <List
                                  className="flex flex-col gap-5 items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 flex-col items-center justify-start my-0 pb-[35px] w-full">
                                    <div className="border-b-2 border-solid border-white-A700_7f flex flex-col items-center justify-start py-3.5 w-full">
                                      <div className="flex relative flex-col items-start justify-start mb-[3px] w-full">
                                        <input
                                          type="text"
                                          autoComplete="off"
                                          onChange={handleInputChange}
                                          name="usernameEmail"
                                          className="input-user"
                                        />
                                        {emailError && (
                                          <p className="error-text">
                                            {emailError}
                                          </p>
                                        )}
                                        <Text
                                          className="text-[15px] text-pink-50"
                                          size="txtMontserratRegular15"
                                        >
                                          Email
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start my-0 pb-[35px] w-full">
                                    <div className="border-b-2 border-solid border-white-A700_7f flex flex-col items-center justify-start py-3.5 w-full">
                                      <div className="flex relative flex-col items-start justify-start mb-[3px] w-full">
                                        <input
                                          type="password"
                                          autoComplete="off"
                                          onChange={handleInputChange}
                                          name="password"
                                          className="input-user"
                                        />
                                        <Text
                                          className="text-[15px] text-pink-50"
                                          size="txtMontserratRegular15"
                                        >
                                          Password
                                        </Text>
                                        {passwordError && (
                                          <p className="error-text">
                                            {passwordError}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                    <Button
                                      className="capitalize cursor-pointer log min-w-[150px] rounded-[30px] text-center text-xl tracking-[0.50px]"
                                      color="orange_600"
                                      size="2xl"
                                      variant="fill"
                                      type="submit"
                                      onClick={() => handleFormSubmit}
                                    >
                                      {!loading ? (
                                        "Login"
                                      ) : (
                                        <div className="dotWrapper">
                                          <div className="loadingDot"></div>
                                        </div>
                                      )}
                                    </Button>
                                    <Button
                                      className="common-pointer bg-transparent cursor-pointer min-w-[162px] text-center text-lg text-pink-50"
                                      onClick={switchForget}
                                      size="xs"
                                    >
                                      Forgot Password?
                                    </Button>
                                  </div>
                                </List>
                              </div>
                              {/* <div className="flex flex-col flex-row font-inter gap-[26px] items-start justify-between md:ml-[0] ml-[11px] mt-[50px] p-2.5 w-[99%] md:w-full">
                              <div className="flex flex-col font-inter h-12 md:h-auto items-start justify-start goog mr-[115px] w-[510px] sm:w-full">
                                <div className="bg-gray-100 border border-gray-100 border-solid flex flex-col h-12 md:h-auto goog-wrap items-start justify-start px-[17px] py-3.5 rounded-lg w-full">
                                   <div
                                    className="common-pointer flex flex-row gap-[9px] items-center justify-start md:px-10 sm:px-5 px-[104px] w-full"
                                    onClick={() => googleSignIn()}
                                  >
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_4a8758006edf934.png"
                                      alt="4a8758006edf934"
                                    />
                                    <Text
                                      className="text-[15px] text-black-900_01 text-center"
                                      size="txtInterSemiBold15"
                                    >
                                      Sign up with Google
                                    </Text>
                                  </div> *
                                </div>
                              </div>
                            </div> */}
                            </div>
                          </form>
                        </div>
                        <div className="absolute flex flex-col font-roboto md:gap-10 rum h-max inset-y-[0] justify-start top-[3%] right-[3%] w-[72%]">
                          <div className="flex flex-row faq mt-2 gap-[22px] items-start justify-end md:ml-[0] ml-[411px] w-[24%] md:w-full">
                            <div className="flex flex-col items-center pr-2 justify-end">
                              <Text
                                className="text-[10.5px] text-white-A700"
                                size="txtRobotoRegular105"
                              >
                                Help/FAQ
                              </Text>
                            </div>
                            <div className="flex flex-col items-center pl-2 justify-start w-[46%]">
                              <div className="flex flex-row items-center justify-start w-full">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_microphone.svg"
                                  alt="microphone"
                                />
                                <div className="flex flex-col items-end justify-start pl-2">
                                  <Text
                                    className="h-[15px] text-white-A700 text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    EN
                                  </Text>
                                </div>
                                <Img
                                  className="h-2.5"
                                  src="images/img_arrowup.svg"
                                  alt="arrowup"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[15%] flex flex-col font-roboto inset-x-[0] items-center justify-end mx-auto">
                  <Text
                    className="text-center text-sm text-white-A700"
                    size="txtRobotoRegular14"
                  >
                    Imprint Privacy policy Terms of use
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 top-[0] w-[97%]">
                <div className="flex flex-col items-end justify-start md:px-10 sm:px-5 px-[50px] w-full">
                  <div className="flex flex-row items-center justify-end w-[19%] md:w-full">
                    <div className="flex flex-col items-center justify-start px-2.5 w-[55%]">
                      <Button
                        className="cursor-pointer reg min-w-[110px] rounded-[23px] text-center text-lg tracking-[0.50px]"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                        onClick={switchPage}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] logo-wrap items-start justify-end mx-auto top-[1%] w-full">
            <div className="bg-gray-200_01 flex flex-col items-center justify-start md:ml-[0] logo ml-[564px] p-1 w-[17%] md:w-full">
              <div className="flex flex-col items-center justify-start p-4 w-full">
                <Img
                  className="h-9 md:h-auto object-cover w-full"
                  src="images/img_logopng.png"
                  alt="logopng"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
