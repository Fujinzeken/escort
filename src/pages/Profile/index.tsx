import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import catchErrorFunc from "utils/authErrorHandler";
import Footer from "components/Footer/Footer";

const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const [phone, setPhone] = useState("");
  const [ad, setAd] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isrotate, setRotate] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [isHidden, setisHidden] = useState(true);

  const handleToggle = () => {
    setisHidden(!isHidden);
  };

  const account = useNavigate();

  const ratedPage = () => {
    account("/dashboard");
  };

  const AccountPage = () => {
    account("/profile");
  };

  const Advert = () => {
    account("/advert");
  };
  const home = () => {
    account("/");
  };
  const messages = () => {
    account("/messages");
  };

  const member = () => {
    account("/Becomeamember");
  };

  const liveVideo = () => {
    account("/live-video");
  };

  const ladiesStar = () => {
    account("/ladies-star");
  };

  const toggle = () => {
    setIsVisible(!isVisible);
    setRotate(!isrotate);
  };

  const rotate = {
    transform: isrotate ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all .5s ease-in-out",
  };

  const handleUpdate = () => {
    account("/profile-edit");
  };

  const getClientSettings = async () => {
    console.log("loading");

    try {
      const res = await axios.get(
        `https://lazer-escort.onrender.com/client/settings`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(res?.data);
    } catch (err) {
      console.log(err);
      catchErrorFunc(err, account);
    }
  };

  useEffect(() => {
    getClientSettings();
  }, []);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[836px] items-center justify-start mx-auto pb-[83px] w-full">
        <div className="md:h-[1046px] h-[1200px] md:px-5 relative w-full sm:h-[1500px]">
          <div className="md:h-[1046px] h-[1200px] m-auto w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-[1010px] inset-x-[0] items-end justify-start mx-auto p-[30px] sm:px-5 top-[5%] w-full"
              style={{
                backgroundImage:
                  "url('images/img_loginbannermasksvg_black_900.png')",
              }}
            >
              <div className="flex flex-col gap-[11px] items-center justify-start mb-[30px] mt-[125px] w-4/5 md:w-full">
                <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-col items-end justify-start pl-5">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtPoppinsBold30"
                    >
                      General Settings
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-montserrat items-start justify-start p-[30px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl"
                  >
                    <Text size="txtMontserratRegular24Black900dd">Privacy</Text>
                  </a>
                  <div className="border border-gray-300 border-solid flex flex-row gap-[13px] items-end justify-start mt-[42px] p-1 rounded-[20px] w-[39%] md:w-full">
                    <input type="checkbox" id="myCheckbox" className="hidden" />

                    <label
                      htmlFor="myCheckbox"
                      className="inline-block w-[34px] h-[34px] border border-gray-500 rounded cursor-pointer bg-gray-300 transition-all duration-300 ease-in-out hover:border-blue-500 checked:bg-blue-500 checked:border-blue-500"
                    ></label>

                    <Text
                      className="mb-1 mt-[7px] text-gray-700_03 text-lg"
                      size="txtMontserratRegular18Gray70003"
                    >
                      Show my profile on search engines?
                    </Text>
                  </div>
                  <div className="bg-orange-200 border border-orange-600 border-solid flex flex-row gap-[13px] items-end justify-start mt-[30px] p-1 rounded-[20px] shadow-bs13 w-[37%] md:w-full">
                    <div className="bg-orange-600 h-[34px] w-[34px]"></div>
                    <Text
                      className="mb-1 mt-[7px] text-lg text-purple-700_01"
                      size="txtMontserratRegular18Purple70001"
                    >
                      Show my profile in random users?
                    </Text>
                  </div>
                  <div className="bg-orange-200_01 border border-orange-600 border-solid flex sm:flex-col flex-row gap-[13px] items-end justify-start mt-[30px] p-1 rounded-[20px] shadow-bs13 w-2/5 md:w-full">
                    <div className="bg-orange-600 h-[34px] w-[34px]"></div>
                    <Text
                      className="mb-1 sm:mt-0 mt-[7px] text-lg text-purple-700_01"
                      size="txtMontserratRegular18Purple70001"
                    >
                      Show my profile in find match page?
                    </Text>
                  </div>
                  <div className="border border-gray-300 border-solid flex md:flex-col flex-row gap-[13px] items-end justify-start mt-[30px] p-1 rounded-[20px] w-[65%] md:w-full">
                    <input type="checkbox" id="myCheckbox" className="hidden" />

                    <label
                      htmlFor="myCheckbox"
                      className="inline-block w-[34px] h-[34px] border border-gray-500 rounded cursor-pointer bg-gray-300 transition-all duration-300 ease-in-out hover:border-blue-500 checked:bg-blue-500 checked:border-blue-500"
                    ></label>

                    <Text
                      className="mb-1 md:mt-0 mt-[7px] text-gray-700_03 text-lg"
                      size="txtMontserratRegular18Gray70003"
                    >
                      Confirm request when someone request to be a friend with
                      you?
                    </Text>
                  </div>
                  <Button
                    className="capitalize cursor-pointer mb-[30px] min-w-[132px] mt-[35px] rounded-[22px] text-center text-xl tracking-[0.50px]"
                    color="orange_600"
                    size="lg"
                    variant="fill"
                  >
                    Save
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start mb-[30px] w-4/5 md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-montserrat items-start justify-start p-[30px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
                  <a
                    href="#"
                    className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl"
                  >
                    <Text size="txtMontserratRegular24Black900dd">
                      Profile Settings
                    </Text>
                  </a>
                  <div className=" flex flex-col gap-[13px] items-start justify-start mt-[42px] p-1 rounded-[20px] w-full md:w-full">
                    <form className="flex flex-col w-full">
                      <div className="flex flex-col gap-2 justify-center">
                        <div className="flex gap-5">
                          <div className="w-1/2 items-center">
                            <div className="flex justify-between items-center">
                              <Text
                                size="txtMontserratRegular18Gray70003"
                                className="pl-3"
                              >
                                user name
                              </Text>
                              <IoIosArrowForward />
                            </div>
                            <input
                              type="text"
                              placeholder="ellytasha"
                              className="border-none rounded-full border-b border-gray-500"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="w-1/2 items-center">
                            <div className="flex justify-between items-center">
                              <Text
                                size="txtMontserratRegular18Gray70003"
                                className="pl-3"
                              >
                                E-mail address
                              </Text>
                              <IoIosArrowBack />
                            </div>
                            <input
                              type="email"
                              placeholder="Enter email"
                              className="border-none rounded-full border-b border-gray-500"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 ">
                          <div className="w-1/2 items-center">
                            <div className="flex justify-between items-center">
                              <Text
                                size="txtMontserratRegular18Gray70003"
                                className="pl-3"
                              >
                                Phone
                              </Text>
                              <IoIosArrowForward />
                            </div>
                            <input
                              type="text"
                              placeholder="Not Specified"
                              className="border-none rounded-full border-b border-gray-500"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="w-1/2 items-center">
                            <div className="flex justify-between items-center">
                              <Text
                                size="txtMontserratRegular18Gray70003"
                                className="pl-3"
                              >
                                Language
                              </Text>
                              <IoIosArrowForward />
                            </div>
                            <input
                              type="text"
                              placeholder="English"
                              className="border-none rounded-full border-b border-gray-500"
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 mt-8 sm:flex-col">
                          <div className="w-1/2 items-center">
                            <div className="flex justify-between items-center sm:gap-5">
                              <Text
                                size="txtMontserratRegular18Gray70003"
                                className="pl-3"
                              >
                                Age
                              </Text>
                              <Button
                                className="capitalize border cursor-pointer min-w-[132px]  text-center tracking-[0.50px]"
                                size="sm"
                                variant="fill"
                              >
                                Verify
                              </Button>
                            </div>
                            <input
                              disabled
                              type="text"
                              placeholder="Not verified"
                              className="border-none rounded-full border-b border-gray-500 placeholder-red-500"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                          <div className="w-1/2 items-center">
                            <div className="flex justify-between items-center sm:gap-5">
                              <Text
                                size="txtMontserratRegular18Gray70003"
                                className="pl-3"
                              >
                                Advert free
                              </Text>
                              <Button
                                className="capitalize border cursor-pointer min-w-[132px]  text-center tracking-[0.50px]"
                                size="sm"
                                variant="fill"
                              >
                                show
                              </Button>
                            </div>
                            <input
                              disabled
                              type="text"
                              placeholder="no ad-free"
                              className="border-none rounded-full border-b border-gray-500  placeholder-red-500"
                              value={ad}
                              onChange={(e) => setAd(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <Button
                      className="capitalize cursor-pointer mb-[30px] min-w-[132px] mt-[35px] rounded-[12px] text-center text-xl tracking-[0.50px]"
                      color="orange_600"
                      size="lg"
                      variant="fill"
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>

                    <div>
                      <Text
                        size="txtMontserratRegular24Black900dd"
                        className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl"
                      >
                        Your Applications
                      </Text>
                      <Text
                        size="txtMontserratRegular18Gray70003"
                        className="mt-3"
                      >
                        Here is the list of other applications with the
                        respective status to your Ladies.de account. If you have
                        a link, you can log in there with your account
                        credentials and use additional functions.
                      </Text>
                      <Button
                        className="px-7 capitalize w-32px cursor-pointer mb-[30px] mt-[35px] rounded-[12px] text-center text-xl tracking-[0.50px]"
                        color="orange_600"
                        size="lg"
                        variant="fill"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col font-montserrat gap-4 items-center justify-start sm:px-5 w-4/5 md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start p-[19px] rounded-[15px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtMontserratRomanRegular24"
                        >
                          Delete Account
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-[27px] text-base text-black-900"
                      size="txtMontserratRomanRegular16"
                    >
                      All content including photos and other data will be
                      permanently removed!
                    </Text>
                    <div className="flex flex-col items-start justify-start mt-4 w-full">
                      <div className="bg-red-500 border border-red-500 border-solid flex flex-col items-center justify-start p-[5px] rounded-[3px]">
                        <Text
                          className="text-center text-sm text-white-A700"
                          size="txtMontserratRomanRegular14"
                        >
                          Delete Account?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start rounded-[15px] w-full">
                  <div className="flex flex-col gap-[22px] items-center justify-start p-2 rounded-[15px] w-full">
                    <div className="flex flex-col items-start justify-start mt-3 w-[98%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtMontserratRomanRegular24"
                        >
                          Notification Settings
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-start mb-3 w-full">
                      <div className="flex flex-col font-montserrat items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                              <div className="flex md:flex-1 flex-col items-center justify-start pb-2 w-1/2 md:w-full">
                                <div className="flex flex-col items-start justify-start px-3 w-full">
                                  <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
                                    <CheckBox
                                      className="text-base text-left"
                                      inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                      name="showvisitorsnot_One"
                                      id="showvisitorsnot_One"
                                      label="Show Visitors Notification"
                                      color="pink_700"
                                      size="xs"
                                    ></CheckBox>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-start justify-start pb-2 px-2 w-1/2 md:w-full">
                                <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] w-[49%] md:w-full">
                                  <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                                    <CheckBox
                                      className="text-base text-left"
                                      inputClassName="border border-gray-600_04 border-solid h-4 mr-[5px] w-4"
                                      name="showlikesnotifi_One"
                                      id="showlikesnotifi_One"
                                      label="Show Likes Notification"
                                      color="gray_600_04"
                                    ></CheckBox>
                                    <Img
                                      className="h-6 md:h-auto object-cover w-6"
                                      src="images/img_premiumbadgesvg.png"
                                      alt="premiumbadgesvg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                              <div className="flex md:flex-1 flex-col items-start justify-start px-3 w-1/2 md:w-full">
                                <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
                                  <CheckBox
                                    className="text-base text-left"
                                    inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                    name="showgiftsnotifi_One"
                                    id="showgiftsnotifi_One"
                                    label="Show Gifts Notification"
                                    color="pink_700"
                                    size="xs"
                                  ></CheckBox>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-start justify-start px-3 w-1/2 md:w-full">
                                <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                                  <CheckBox
                                    className="text-base text-left"
                                    inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                    name="showmessagesnot_One"
                                    id="showmessagesnot_One"
                                    label="Show Messages Notification"
                                    color="pink_700"
                                    size="xs"
                                  ></CheckBox>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-end pt-2 w-1/2 md:w-full">
                            <div className="flex flex-col items-start justify-start px-3 w-full">
                              <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
                                <CheckBox
                                  className="text-base text-left"
                                  inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                  name="showloginnotifi_One"
                                  id="showloginnotifi_One"
                                  label="Show Login Notification For Your Liked Users"
                                  color="pink_700"
                                  size="xs"
                                ></CheckBox>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="border border-pink-700 border-solid cursor-pointer font-abeezee min-w-[68px] ml-3 md:ml-[0] mr-[945px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="pink_700"
                        size="md"
                        variant="fill"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <header className="absolute top-0 flex flex-col items-center justify-center md:px-5 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1436"
                height="10"
                viewBox="0 0 1436 10"
                fill="none"
              >
                <mask id="path-1-inside-1_60_11978" fill="white">
                  <path d="M0 0H1443V10H0V0Z" />
                </mask>
                <path
                  d="M0 0V-10H-10V0H0ZM1443 0H1453V-10H1443V0ZM1443 10V20H1453V10H1443ZM0 10H-10V20H0V10ZM0 10H1443V-10H0V10ZM1433 0V10H1453V0H1433ZM1443 0H0V20H1443V0ZM10 10V0H-10V10H10Z"
                  fill="#FD00B399"
                  mask="url(#path-1-inside-1_60_11978)"
                />
              </svg>
              <div className="md:h-[171px] h-[73px] m-0 sm:h-[85px] md:ml-[0] ml-[25px] mr-[57px] mt-4 relative w-[95%] md:w-full">
                <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                  <div className="nav-links flex md:flex-col flex-row md:gap-10 items-center justify-end px-[15px] w-full">
                    <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center pr-[18px] w-[29%] md:w-full">
                      <div className="flex flex-row items-center justify-start p-4 shadow-bs4 w-[51%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M3.60357 7.557L10.7416 4.448C10.8594 4.39751 10.9861 4.37112 11.1142 4.37038C11.2423 4.36963 11.3693 4.39456 11.4877 4.44367C11.6061 4.49279 11.7134 4.5651 11.8034 4.65636C11.8933 4.74761 11.9641 4.85595 12.0116 4.975L16.9356 16.877C17.0369 17.1185 17.0398 17.3899 16.9438 17.6335C16.8478 17.8771 16.6604 18.0736 16.4216 18.181L9.28457 21.29C9.16673 21.3406 9.03994 21.3672 8.91169 21.368C8.78343 21.3688 8.65631 21.3439 8.53783 21.2948C8.41935 21.2457 8.31192 21.1733 8.22187 21.082C8.13183 20.9906 8.061 20.8822 8.01357 20.763L3.08957 8.86C2.98855 8.61851 2.98574 8.34713 3.08173 8.1036C3.17773 7.86007 3.36495 7.66461 3.60357 7.557Z"
                            stroke="#cc42bd"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 4.35999H16C16.2652 4.35999 16.5196 4.46534 16.7071 4.65288C16.8946 4.84042 17 5.09477 17 5.35999V8.85999"
                            stroke="#cc42bd"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20 6.35999C20.264 6.47199 20.52 6.57699 20.768 6.67499C21.0121 6.77857 21.2051 6.97488 21.3045 7.22073C21.4039 7.46659 21.4015 7.74185 21.298 7.98599L19 13.36"
                            stroke="#cc42bd"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
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
                      <div className="flex flex-col items-center justify-end p-3 w-[32%] sm:w-full">
                        <div className=" credit-wrap border border-gray-200_03 border-solid flex flex-row items-center justify-center p-[5px] rounded-[15px] w-[97%] md:w-full">
                          <Text
                            className="ml-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            Credit  {" "}
                          </Text>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="17"
                            viewBox="0 0 14 17"
                            fill="none"
                          >
                            <path
                              d="M1.64435 11.5053H9.97416C10.175 11.5053 10.3676 11.4256 10.5097 11.2835C10.6517 11.1413 10.7316 10.9481 10.7316 10.7471C10.7316 10.5461 10.6517 10.3534 10.5097 10.2113C10.3676 10.0691 10.175 9.9894 9.97416 9.9894H3.91654C2.9125 9.9894 1.94963 9.59005 1.23967 8.87963C0.529705 8.1692 0.130859 7.20594 0.130859 6.20125C0.130859 5.19656 0.529705 4.23281 1.23967 3.52239C1.94963 2.81196 2.9125 2.4131 3.91654 2.4131H5.43149V0.898132H8.46018V2.41407H12.2456V5.44498H3.91654C3.71565 5.44498 3.52307 5.5247 3.38102 5.66684C3.23897 5.80898 3.15906 6.00169 3.15906 6.20271C3.15906 6.40373 3.23897 6.59644 3.38102 6.73858C3.52307 6.88072 3.71565 6.96044 3.91654 6.96044H9.97416C10.9782 6.96044 11.9411 7.35979 12.651 8.07021C13.361 8.78064 13.7598 9.7439 13.7598 10.7486C13.7598 11.7533 13.361 12.717 12.651 13.4275C11.9411 14.1379 10.9782 14.5372 9.97416 14.5372H8.45921V16.0527H5.43052V14.5372H1.64435V11.5053Z"
                              fill="purple"
                            />
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
                        <section className="thunder">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_60_11959)">
                              <path
                                d="M14.3854 6.76984C14.2558 6.55947 14.027 6.43108 13.7802 6.43108H10.5122L12.2785 0.926682C12.3476 0.710734 12.3099 0.474323 12.1761 0.291187C12.0428 0.108551 11.8294 0 11.6029 0H8.35465C8.04615 0 7.77285 0.199253 7.67907 0.492902L5.04466 8.70403C4.97554 8.91993 5.01323 9.15623 5.14709 9.33948C5.28034 9.52212 5.49379 9.63067 5.7202 9.63067H6.29211H8.91483L8.06835 18.6716C8.05481 18.8153 8.14543 18.948 8.2843 18.988C8.4225 19.0282 8.56998 18.9646 8.63534 18.8357L14.4131 7.46277C14.5248 7.2424 14.5143 6.98029 14.3854 6.76984Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_60_11959">
                                <rect
                                  width="19"
                                  height="19"
                                  fill="white"
                                  transform="translate(0.25)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </section>
                        <div className="flex flex-col items-end justify-start pl-2 py-2 w-4/5">
                          <div className="border border-orange-600 border-solid flex flex-row items-center justify-start user-btn rounded-[20px] w-[99%] md:w-full">
                            <div className=" user-img-wrap flex flex-col items-start justify-start ml-3 w-[38px]">
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
                                Hi, {user?.firstName}
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
                <div className="absolute logo-wrap flex flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
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
            <Text
              className="sm:hidden absolute bg-white-A700 bottom-[7%] h-[17px] justify-center left-[5%] pl-[9px] pr-3 text-[13px] text-gray-700_04 w-[86px]"
              size="txtMontserratRegular13"
            >
              About Me
            </Text>
          </div>
          {/* Sidebar  */}
          <button
            className={`hidden sm:flex absolute top-[80px] right-[5px] flex items-center justify-center w-[10%] border p-3 rounded-full`}
            style={{
              background: "#FD00B3",
              border: "1px solid #FD00B3",
              color: "#fff",
            }}
            onClick={handleToggle}
          >
            Menu
          </button>
          <div
            className={`sm:${
              isHidden ? "hidden" : "w-4/5"
            } absolute bottom-[8%] flex h-[952px] left-[0] w-[21%] md:${
              isHidden ? "hidden" : "4/5"
            }`}
          >
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[93%]">
              <div className="flex flex-col items-start justify-start mb-[674px] w-full">
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
                      {user?.firstName}
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
            </div>
            <div className="absolute bottom-[3%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[97%]">
              <div
                className=" leftNav flex flex-row items-center justify-start px-4 w-full"
                onClick={home}
              >
                <Img
                  className="h-14 w-14"
                  src="images/img_home.svg"
                  alt="home"
                />
                <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-gray-600_01"
                        size="txtRobotoRegular16"
                      >
                        Home page
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-14 relative w-full">
                  <Img
                    className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                    src="images/img_divvlistitemiconmargin.svg"
                    alt="divvlistitemico"
                  />
                  <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%] ">
                    <div className="flex flex-col items-center justify-start py-4 w-[84%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtRobotoRegular16"
                          >
                            Features
                          </Text>
                        </div>
                      </div>
                    </div>
                    <section onClick={toggle} style={rotate}>
                      <Img
                        className="h-4 cursor"
                        src="images/img_arrowdown_gray_600_01.svg"
                        alt="arrowdown_One"
                      />
                    </section>
                  </div>
                  <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    {isVisible && (
                      <div className="flex flex-1 flex-col items-end justify-start my-0 px-8 w-full cursor-pointer hover:bg-gray-500 py-3">
                        <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex gap-3 items-center">
                              <Link to="/advert" className="flex gap-3">
                                <Img
                                  className="h-6 w-6"
                                  src="images/advert_logo.png"
                                  alt="message icon"
                                />
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                >
                                  Advert Free
                                </Text>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </List>
                </div>
                <div
                  className="flex flex-row items-center justify-start mt-3 py-[11px] px-6 w-full pl-8 gap-3 leftNav "
                  onClick={messages}
                >
                  <Img
                    className="h-6 w-6"
                    src="images/message_icon.png"
                    alt="message icon"
                  />
                  <Text
                    className="text-base text-gray-600_01"
                    size="txtRobotoRegular16"
                  >
                    Messages
                  </Text>
                </div>
                <div className=" flex flex-col justify-start w-full">
                  <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                </div>
              </div>
              <List
                className="flex flex-col gap-4 items-center mb-4 w-full"
                orientation="vertical"
              >
                <div
                  className="bg-orange-600 flex flex-1 flex-row items-center justify-start px-4 w-full leftNav"
                  onClick={AccountPage}
                >
                  <Img
                    className="h-14 w-14"
                    src="images/img_lock_gray_600_01.svg"
                    alt="lock"
                  />
                  <div className=" flex flex-col items-center justify-start py-4 w-[79%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-white-A700"
                          size="txtRobotoRegular16"
                        >
                          Account settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-1 flex-row items-center justify-start px-4 w-full leftNav"
                  onClick={member}
                >
                  <Img
                    className="h-14 w-14"
                    src="images/img_divvlistitemiconmargin_gray_600_01.svg"
                    alt="divvlistitemico"
                  />
                  <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-600_01"
                          size="txtRobotoRegular16"
                        >
                          Become a customer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-1 flex-row items-center justify-start px-4 w-full leftNav"
                  onClick={ladiesStar}
                >
                  <Img
                    className="h-14 w-14"
                    src="images/img_divvlistitemiconmargin_gray_600_01_56x56.svg"
                    alt="divvlistitemico"
                  />
                  <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-600_01"
                          size="txtRobotoRegular16"
                        >
                          LadiesSTARS
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-row items-center justify-start mt-8 pr-[11px] py-[11px] w-full leftNav"
                  onClick={liveVideo}
                >
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
              </List>
            </div>
          </div>
        </div>
        {/* Footer  */}
        <div className="flex mt-[100px] flex-col items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
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
    </>
  );
};

export default ProfilePage;
