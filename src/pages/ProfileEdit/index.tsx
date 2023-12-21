import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import { Link } from "react-router-dom";
const ProfileEditPage: React.FC = () => {
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [currentpassword, setCurrentPassword] = useState({
    text: "",
    showPass: false,
  });
  const [newPassword, setNewPasword] = useState({
    text: "",
    showPass: false,
  });
  const [confirmNewPassword, setConfirmNewPassword] = useState({
    text: "",
    showPass: false,
  });
  const [edLevel, setEdLevel] = useState("");

  const handleUpdate = () => {};

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[836px] items-center justify-start mx-auto pb-[83px] w-full">
        <div className="md:h-[1046px] h-[1200px] md:px-5 relative w-full">
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
                {/* <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-montserrat items-start justify-start p-[30px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl"
                  >
                    <Text size="txtMontserratRegular24Black900dd">Privacy</Text>
                  </a>
                  <div className="border border-gray-300 border-solid flex flex-row gap-[13px] items-end justify-start mt-[42px] p-1 rounded-[20px] w-[39%] md:w-full">
                    <div className="bg-gray-300 h-[34px] w-[34px]"></div>
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
                    <div className="bg-gray-300 h-[34px] w-[34px]"></div>
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
                </div> */}
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start mb-[266px] w-4/5 md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-montserrat items-start justify-start p-[30px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
                  <a
                    href="#"
                    className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl"
                  >
                    <Text size="txtMontserratRegular24Black900dd">Profile</Text>
                  </a>
                  <div className=" flex flex-col gap-[13px] items-start justify-start mt-[42px] p-1 rounded-[20px] w-full md:w-full">
                    <form className="flex flex-col w-full">
                      <div className="flex flex-col gap-2 justify-center">
                        <div className="flex flex-col gap-5">
                          <div className="w-full items-center">
                            <textarea
                              placeholder="ellytasha"
                              className="w-full rounded border-b border-gray-500 resize-none h-20"
                              value={profile}
                              onChange={(e) => setProfile(e.target.value)}
                            />
                          </div>
                          <div className="w-full items-center">
                            <textarea
                              placeholder="ellytasha"
                              className="w-full rounded border-b border-gray-500 resize-none h-10"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col my-3">
                          <Text
                            size="txtMontserratRegular18Gray70003"
                            className=""
                          >
                            Current e-mail address
                          </Text>
                          <Text
                            style={{
                              fontWeight: "lighter",
                              fontSize: "14px",
                              font: "Roboto",
                            }}
                          >
                            user@gmail.com
                          </Text>
                        </div>
                        <div className="flex gap-5">
                          <div className="w-1/2 flex justify-between items-center rounded border border-gray-500">
                            <input
                              type="text"
                              placeholder="New Email Address"
                              className="border-none w-full"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <IoIosArrowForward />
                          </div>
                          <div className="w-1/2 flex justify-between items-center rounded border border-gray-500">
                            <select
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                              className="border-none w-full placeholder-"
                              placeholder="Preffred language"
                              style={{ color: !language && "#888888" }}
                            >
                              <option value="">Preffered Language</option>
                              <option value="English">English</option>
                              <option value="French">French</option>
                              <option value="German">German</option>
                              <option value="Spanish">Spanish</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <div className="w-1/2 flex justify-between items-center rounded border border-gray-500">
                            <input
                              type="text"
                              placeholder="Repeat Email Address"
                              className="border-none w-full"
                              value={confirmEmail}
                              onChange={(e) => setConfirmEmail(e.target.value)}
                            />
                            <IoIosArrowForward />
                          </div>
                          <div className="w-1/2 items-center">
                            <div className="w-full flex justify-between items-center rounded border border-gray-500">
                              <select
                                value={edLevel}
                                onChange={(e) => setEdLevel(e.target.value)}
                                className="border-none w-full placeholder-"
                                placeholder="Education Level"
                                style={{ color: !edLevel && "#888888" }}
                              >
                                <option value="">Education Level</option>
                                <option value="High School">High School</option>
                                <option value="Bsc">Bsc</option>
                                <option value="Masters Degree">
                                  Masters Degree
                                </option>
                                <option value="Doctorate">Doctorate</option>
                              </select>
                            </div>
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
                      Save
                    </Button>

                    <div className="w-full">
                      <Text
                        size="txtMontserratRegular24Black900dd"
                        className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl mb-5"
                      >
                        Change Password
                      </Text>
                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-2 w-full">
                          <Text
                            size="txtMontserratRegular18Gray70003"
                            className=""
                          >
                            Current Passsword
                          </Text>
                          <div className="w-full px-2 flex justify-between items-center rounded border border-gray-500">
                            <input
                              type={
                                currentpassword.showPass ? "text" : "password"
                              }
                              placeholder="current password"
                              className="border-none w-full"
                              value={currentpassword.text}
                              onChange={(e) =>
                                setCurrentPassword({
                                  text: e.target.value,
                                  showPass: currentpassword.showPass,
                                })
                              }
                            />
                            <Img
                              className="h-4 cursor-pointer"
                              src="images/seePassword.svg"
                              alt="arrowdown_Two"
                              onClick={() =>
                                setCurrentPassword({
                                  text: currentpassword.text,
                                  showPass: !currentpassword.showPass,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex flex-col gap-2 w-1/2">
                            <Text
                              size="txtMontserratRegular18Gray70003"
                              className=""
                            >
                              New Passsword
                            </Text>
                            <div className="w-full px-2 flex justify-between items-center rounded border border-gray-500">
                              <input
                                type={
                                  newPassword.showPass ? "text" : "password"
                                }
                                placeholder="new password"
                                className="border-none w-full"
                                value={newPassword.text}
                                onChange={(e) =>
                                  setNewPasword({
                                    text: e.target.value,
                                    showPass: newPassword.showPass,
                                  })
                                }
                              />
                              <Img
                                className="h-4 cursor-pointer"
                                src="images/seePassword.svg"
                                alt="arrowdown_Two"
                                onClick={() =>
                                  setNewPasword({
                                    text: newPassword.text,
                                    showPass: !newPassword.showPass,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 w-1/2">
                            <Text
                              size="txtMontserratRegular18Gray70003"
                              className=""
                            >
                              New Passsword Confirmation
                            </Text>
                            <div className="w-full px-2 flex justify-between items-center rounded border border-gray-500">
                              <input
                                type={
                                  confirmNewPassword.showPass
                                    ? "text"
                                    : "password"
                                }
                                placeholder="confirm new password"
                                className="border-none w-full"
                                value={confirmNewPassword.text}
                                onChange={(e) =>
                                  setConfirmNewPassword({
                                    text: e.target.value,
                                    showPass: confirmNewPassword.showPass,
                                  })
                                }
                              />
                              <Img
                                className="h-4 cursor-pointer"
                                src="images/seePassword.svg"
                                alt="arrowdown_Two"
                                onClick={() =>
                                  setConfirmNewPassword({
                                    text: confirmNewPassword.text,
                                    showPass: !confirmNewPassword.showPass,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="px-7 capitalize w-32px cursor-pointer mb-[30px] mt-[35px] rounded-[12px] text-center text-xl tracking-[0.50px]"
                        color="orange_600"
                        size="lg"
                        variant="fill"
                      >
                        Update Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <header className="absolute flex md:flex-col font-montserrat md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
              <div className="bg-white-A700 border-b border-gray-200_03 border-solid h-[58px] mb-5 md:ml-[0] ml-[119px] mr-[7px] w-[92%]"></div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[200px] items-start justify-end pb-2 px-2 w-full">
                <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center mb-3 pr-[18px] w-[26%] md:w-full">
                  <div className="flex flex-row items-center justify-start p-4 shadow-bs4 w-[51%]">
                    <Img
                      className="h-6 ml-[3px] w-6"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                    <Text
                      className="ml-1 text-base text-purple-400"
                      size="txtMontserratMedium16Purple400"
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
                <div className="sm:h-[287px] h-[57px] relative w-[44%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-2 right-[0] w-[51%]">
                    <div className="bg-blue-500 border border-blue-500 border-solid flex flex-row items-center justify-start ml-0.5 md:ml-[0] rounded-[20px] w-[57%] md:w-full">
                      <div className="flex flex-col items-start justify-start ml-3 w-[38px]">
                        <Img
                          className="h-[39px] md:h-auto object-cover rounded-[20px] w-[74%]"
                          src="images/img_davatarjpg.png"
                          alt="davatarjpg"
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
                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-y-[0] items-center justify-evenly left-[0] my-auto w-[79%]">
                    <div className="flex flex-col items-center justify-end p-3 w-[32%] sm:w-full">
                      <div className="border border-gray-200_03 border-solid flex flex-row items-center justify-center p-[5px] rounded-[15px] w-[97%] md:w-full">
                        <Text
                          className="ml-2.5 text-base text-gray-800_02"
                          size="txtMontserratMedium16Gray80002"
                        >
                          Token  {" "}
                        </Text>
                        <Img
                          className="h-[15px] ml-3.5"
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
                            alt="arrowdown_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <Text
              className="absolute bg-white-A700 bottom-[7%] h-[17px] justify-center left-[5%] pl-[9px] pr-3 text-[13px] text-gray-700_04 w-[86px]"
              size="txtMontserratRegular13"
            >
              About Me
            </Text>

            {/* <div className=" mt-auto absolute bottom-[0] flex flex-col mt-8 font-montserrat gap-4 items-center justify-start sm:px-5 px-6 right-[3%] w-[76%]">
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
            </div> */}
          </div>
          <div className="absolute bottom-[8%] md:h-[917px] h-[952px] left-[0] w-[21%]">
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
            </div>
            <div className="absolute bottom-[3%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[97%]">
              <div className="  cursor-pointer hover:bg-gray-500 flex flex-row items-center justify-start px-4 w-full">
                <Link to="/" className="flex">
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
                </Link>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-14 relative w-full hover:bg-gray-500 cursor-pointer">
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
                    <Img
                      className="h-4"
                      src="images/img_arrowdown_gray_600_01.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                  <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    {/* <div className="flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                      <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Overview
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="flex flex-1 flex-col items-end justify-start my-0 px-8 w-full cursor-pointer hover:bg-gray-500 py-3">
                      <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex gap-3 items-center">
                            <Link to="advert" className="flex gap-3">
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
                  </List>
                </div>
                <div className="flex flex-row items-center justify-start mt-5 py-[11px] px-4 w-full pl-8 gap-3 cursor-pointer hover:bg-gray-500 ">
                  <Link to="message" className="flex gap-3">
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
                  </Link>
                </div>
                <div className=" flex flex-col justify-start w-full">
                  <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                </div>
              </div>
              <List
                className="flex flex-col gap-4 items-center mb-4 w-full"
                orientation="vertical"
              >
                <div className="bg-orange-600 flex flex-1 flex-row items-center justify-start px-4 w-full cursor-pointer">
                  <Link to="/profile" className="flex">
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
                  </Link>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start px-4 w-full cursor-pointer hover:bg-gray-500">
                  <Link to="" className="flex">
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
                  </Link>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start px-4 w-full cursor-pointer  hover:bg-gray-500">
                  <Link to="/ladies-star" className="flex">
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
                  </Link>
                </div>

                <div className="flex flex-row items-center justify-start mt-8 pr-[11px] py-[11px] w-full cursor-pointer hover:bg-gray-500">
                  <Link to="/live-video" className="flex">
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
                  </Link>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
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

export default ProfileEditPage;
