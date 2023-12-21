import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import EscortProfile from "pages/EscortProfile";

const DesktopThirtyTwoPage: React.FC = () => {

 const history = useNavigate()

 const switchPage = () => {
  history('/signup');  
 }

 const escortProfile = () => {
  history('/EscortProfile')
 }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-asap gap-[22px] justify-start mx-auto w-full">
        <div className="flex flex-col items-end md:px-10 sm:px-5 w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="1436" height="10" viewBox="0 0 1436 10" fill="none">
              <mask id="path-1-inside-1_60_11978" fill="white">
                <path d="M0 0H1443V10H0V0Z"/>
              </mask>
              <path d="M0 0V-10H-10V0H0ZM1443 0H1453V-10H1443V0ZM1443 10V20H1453V10H1443ZM0 10H-10V20H0V10ZM0 10H1443V-10H0V10ZM1433 0V10H1453V0H1433ZM1443 0H0V20H1443V0ZM10 10V0H-10V10H10Z" fill="#FD00B399" mask="url(#path-1-inside-1_60_11978)"/>
            </svg>
              <div className="md:h-[171px] h-[73px] m-0 sm:h-[85px] md:ml-[0] ml-[25px] mr-[57px] mt-4 relative w-[95%] md:w-full">
                <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                  <div className="nav-links flex md:flex-col flex-row md:gap-10 items-center justify-end px-[15px] w-full">
                    <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center pr-[18px] w-[40%] md:w-full">
                      <div className="flex flex-row items-center justify-end w-[75%] md:w-full">
                      <div className="flex flex-col items-center justify-end p-[11px]">
                        <a
                          href="javascript:"
                          className="mt-0.5 text-blue_gray-900_01 text-center text-lg tracking-[0.50px]"
                        >
                          <Text size="txtMontserratMedium18Bluegray90001">
                            Login
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-center justify-start px-2.5 w-[55%]">
                        <Button
                          className="cursor-pointer reg-btn min-w-[110px] rounded-[23px] text-center text-lg tracking-[0.50px]"
                          color="white_A700"
                          size="xl"
                          onClick={switchPage}
                          variant="fill"
                        >
                          Register
                        </Button>
                      </div>
                        <button className="becomeEscort" onClick={escortProfile}>
                          Become an Escort
                        </button>
                    </div>
                      </div>
                    </div>
                </div>
                <div className="absolute logo-wrap flex flex-col items-center justify-start left-[0] ml-[4%] py-4 top-[0] w-[22%]">
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
        <div className="flex flex-col font-montserrat md:gap-10 gap-[177px] items-center mb-[214px] w-full">
          <div className="md:h-[1695px] sm:h-[3363px] h-[3728px] md:px-5 relative w-full">
            <div className="flex flex-col md:gap-10 gap-[483px] h-full items-center justify-start m-auto w-full">
              <div className="md:h-[1309px] sm:h-[2534px] h-[2897px] relative w-full">
                <div className="md:h-[1309px] sm:h-[2534px] h-[2897px] m-auto w-full">
                  <div className="absolute md:h-[1277px] h-[2299px] sm:h-[2534px] inset-x-[0] mx-auto top-[0] w-full">
                    <div className="md:h-[1277px] h-[2299px] sm:h-[2534px] m-auto w-full">
                      <div className="absolute md:h-[1277px] h-[1279px] sm:h-[2534px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[68px] md:px-10 sm:px-5 right-[0] w-[67%]"
                          style={{
                            backgroundImage: "url('images/img_group134.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-start mb-[243px] mr-[87px] w-[71%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                              <List
                                className="flex flex-col gap-[19px] sm:mt-0 mt-[180px] w-[33%]"
                                orientation="vertical"
                              >
                                <div className="bg-white-A700 flex flex-col items-center justify-start shadow-bs5 w-[97%] md:w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[193px] md:h-auto object-cover w-full"
                                      src="images/img_36xlw6wynlujry7hjdvdfulljpg.png"
                                      alt="36xlw6wynlujrySeven"
                                    />
                                    <div className="flex flex-col gap-2.5 items-center justify-start p-2 w-full">
                                      <div className="flex flex-col items-center justify-start sm:px-5 px-[25px]">
                                        <Text
                                          className="text-[15px] text-center text-gray-800"
                                          size="txtMontserratMedium15"
                                        >
                                          United States
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="leading-[20.00px] text-[17px] text-purple-400"
                                          size="txtMontserratMedium17"
                                        >
                                          <>
                                            Dean Scott, 66
                                            <br />
                                            years
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-col items-center justify-start shadow-bs5 w-[97%] md:w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[193px] md:h-auto object-cover w-full"
                                      src="images/img_ni7u2v1cohpxpzmxtcqxfulljpg.png"
                                      alt="ni7u2v1cohpxpzm"
                                    />
                                    <div className="flex flex-col gap-2.5 items-center justify-start p-[9px] w-full">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="leading-[18.00px] text-[15px] text-center text-gray-800"
                                          size="txtMontserratMedium15"
                                        >
                                          <>
                                            I love coding! I don&#39;t
                                            <br />
                                            love playing :))
                                          </>
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="leading-[20.00px] text-[17px] text-purple-400"
                                          size="txtMontserratMedium17"
                                        >
                                          <>
                                            Deen Doughouz,
                                            <br />
                                            26 years
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </List>
                              <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start w-[31%] sm:w-full">
                                <List
                                  className="flex flex-col gap-[23px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 shadow-bs5 w-full">
                                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                      <Img
                                        className="h-[193px] md:h-auto object-cover w-full"
                                        src="images/img_dbanvv61xwnx7qt.png"
                                        alt="dbanvv61xwnx7qt"
                                      />
                                      <div className="flex flex-col gap-[9px] items-center justify-start p-2.5 w-full">
                                        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[51px]">
                                          <Text
                                            className="text-[15px] text-center text-gray-800"
                                            size="txtMontserratMedium15"
                                          >
                                            Turkey
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start">
                                          <Text
                                            className="leading-[20.00px] text-[17px] text-purple-400"
                                            size="txtMontserratMedium17"
                                          >
                                            <>
                                              Ramazan Çimen,
                                              <br />
                                              28 years
                                            </>
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 shadow-bs5 w-full">
                                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                      <Img
                                        className="h-[193px] md:h-auto object-cover w-full"
                                        src="images/img_vv4lg1ipg7xxqgi4lknufulljpg.png"
                                        alt="vv4lg1ipg7xxqgi"
                                      />
                                      <div className="flex flex-col gap-2.5 items-center justify-start p-2 w-full">
                                        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px]">
                                          <Text
                                            className="text-[15px] text-center text-gray-800"
                                            size="txtMontserratMedium15"
                                          >
                                            Viet Nam
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start">
                                          <Text
                                            className="leading-[20.00px] text-[17px] text-purple-400"
                                            size="txtMontserratMedium17"
                                          >
                                            <>
                                              Nguyễn tam, 33
                                              <br />
                                              years
                                            </>
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                                <div className="bg-white-A700 flex flex-col items-center justify-start shadow-bs5 w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[193px] md:h-auto object-cover w-full"
                                      src="images/img_zofdwdn5mjmjpsryvgtvfulljpg.png"
                                      alt="zofdwdn5mjmjpsr"
                                    />
                                    <div className="flex flex-col gap-2.5 items-center justify-start p-2 w-full">
                                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px]">
                                        <Text
                                          className="text-[15px] text-center text-gray-800"
                                          size="txtMontserratMedium15"
                                        >
                                          Brazil
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="leading-[20.00px] text-[17px] text-purple-400"
                                          size="txtMontserratMedium17"
                                        >
                                          <>
                                            Vitor Calazans, 38
                                            <br />
                                            years
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <List
                                className="flex flex-col gap-3 sm:mt-0 mt-[199px] w-[32%]"
                                orientation="vertical"
                              >
                                <div className="bg-white-A700 flex flex-col items-center justify-start shadow-bs5 w-[99%] md:w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[193px] md:h-auto object-cover w-full"
                                      src="images/img_6dgsfaneegb21n9jo5wsfulljpg.png"
                                      alt="6dgsfaneegb21nNine"
                                    />
                                    <div className="flex flex-col gap-[9px] items-center justify-start p-2.5 w-full">
                                      <div className="flex flex-col items-center justify-start px-[13px]">
                                        <Text
                                          className="text-[15px] text-center text-gray-800"
                                          size="txtMontserratMedium15"
                                        >
                                          United Kingdom
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="leading-[20.00px] text-[17px] text-purple-400"
                                          size="txtMontserratMedium17"
                                        >
                                          <>
                                            Woly man, 32
                                            <br />
                                            years
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-col items-center justify-start shadow-bs5 w-[99%] md:w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[193px] md:h-auto object-cover w-full"
                                      src="images/img_1hvodnj5khjhuimbd8cvfulljpg.png"
                                      alt="1hvodnj5khjhuim"
                                    />
                                    <div className="flex flex-col gap-2.5 items-center justify-start p-2 w-full">
                                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px]">
                                        <Text
                                          className="text-[15px] text-center text-gray-800"
                                          size="txtMontserratMedium15"
                                        >
                                          Brazil
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="leading-[20.00px] text-[17px] text-purple-400"
                                          size="txtMontserratMedium17"
                                        >
                                          <>
                                            Praveen de
                                            <br />
                                            almeida, 28 years
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col md:gap-10 gap-[120px] h-max inset-y-[0] items-end justify-start left-[0] my-auto w-2/5">
                          <div className="flex flex-col gap-[38px] items-start justify-start w-[91%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-orange-600"
                                size="txtMontserratSemiBold52"
                              >
                                <span className="text-orange-600 font-montserrat text-left font-semibold">
                                  Meet
                                </span>
                                <span className="text-black-900_dd font-montserrat text-left font-semibold">
                                  <>
                                    {" "}
                                    new and
                                    <br />
                                    interesting
                                    <br />
                                  </>
                                </span>
                                <span className="text-orange-600 font-montserrat text-left font-semibold">
                                  people.
                                </span>
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                              <Text
                                className="leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                size="txtMontserratRegular24"
                              >
                                <>
                                  Join Quickdate, where you could
                                  <br />
                                  meet anyone, anywhere!
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[54px] items-center justify-start pr-10 sm:pr-5 pt-10 w-full">
                              <Button
                                onClick={switchPage}
                                className="cursor-pointer min-w-[200px] rounded-[27px] text-center text-xl tracking-[0.50px]"
                                color="orange_600"
                                size="xl"
                                variant="fill"
                              >
                                Get Started
                              </Button>
                              <Button
                                className="bg-transparent cursor-pointer font-medium min-w-[115px] text-center text-gray-800 text-xl"
                                size="xs"
                              >
                                Know More
                              </Button>
                            </div>
                          </div>
                          <div className="bg-gradient8 box flex flex-col gap-[29px] items-center justify-center p-5 w-full">
                            <List
                              className="flex flex-col gap-5 items-center mt-[39px] w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <div className="flex flex-col justify-start pb-[29px] sm:px-5 px-[29px] w-full">
                                   <div className="input-section">
                                     <div>
                                      <p id = 'purp'>i am a:</p>
                                       <select type="number" className="homeInput" placeholder="Female">
                                        <option value="female">Female</option>
                                        <option value="Male">Male</option>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                                          <path d="M0.339844 0L5.33984 5L10.3398 0H0.339844Z" fill="black" fill-opacity="0.7"/>
                                        </svg>
                                        </select>
                                     </div>
                                    <div className = 'imputimg'>
                                      <Img
                                          src="images/img_svg.svg"
                                          alt="svg_One"
                                        />
                                    </div>
                                   </div>
                                </div>
                                <div className="flex flex-col justify-start pb-[30px] sm:px-5 px-[30px] w-full">
                                <div className="input-section">
                                     <div>
                                      <p id = 'purp'>i am looking for a:</p>
                                      <select type="number" className="homeInput">
                                        <option value="female">Male</option>
                                        <option value="Male">Female</option>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                                          <path d="M0.339844 0L5.33984 5L10.3398 0H0.339844Z" fill="black" fill-opacity="0.7"/>
                                        </svg>
                                        </select>
                                     </div>
                                    <div  className="inputimg">
                                      <Img               
                                          src="images/img_svg.svg"
                                          alt="svg_One"
                                        />
                                    </div>
                                   </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <div className="flex flex-col justify-start pb-[30px] sm:px-5 px-[30px] w-full">
                                <div className="input-section">
                                     <div>
                                      <p id = 'purp'>Between ages:</p>
                                      <select type="number" className="homeInput" placeholder="Female">
                                        <option value="female">20-30</option>
                                        <option value="Male">30-40</option>
                                        <option value="Male">40-50</option>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                                          <path d="M0.339844 0L5.33984 5L10.3398 0H0.339844Z" fill="black" fill-opacity="0.7"/>
                                        </svg>
                                        </select>
                                     </div>
                                    <div  className="inputimg">
                                      <Img               
                                          src="images/img_svg.svg"
                                          alt="svg_One"
                                        />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-start pb-7 sm:px-5 px-7 w-full">
                                <div className="input-section">
                                     <div>
                                      <p id = 'purp'>and:</p>
                                      <select type="number" className="homeInput">
                                      <option value="Male">50-60</option>
                                      <option value="Male">60-70</option>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                                          <path d="M0.339844 0L5.33984 5L10.3398 0H0.339844Z" fill="black" fill-opacity="0.7"/>
                                        </svg>
                                        </select>
                                     </div>
                                    <div  className="inputimg">
                                      <Img               
                                          src="images/img_svg.svg"
                                          alt="svg_One"
                                        />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </List>
                            <div className="flex flex-col items-start justify-start mb-[30px] pr-2.5 py-2.5 w-[89%] md:w-full">
                              <Button
                                onClick={switchPage}
                                className="capitalize cursor-pointer mb-2.5 min-w-[353px] rounded-[30px] text-center text-xl tracking-[0.50px]"
                                color="lime_900"
                                size="2xl"
                                variant="fill"
                              >
                                <>Let&#39;s Begin Finding Matches</>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[1132px] left-[0] object-cover"
                        src="images/img_svg_purple_400.png"
                        alt="svg"
                      />
                    </div>
                    <div className="absolute bottom-[15%] flex flex-col items-center justify-start left-[-1]">
                      <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[51%] md:w-full">
                          <List
                            className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-4 w-[85%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-center justify-start sm:ml-[0] pb-3 px-3 w-full">
                              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[157px] shadow-bs5 w-full">
                                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                  <Img
                                    className="h-[127px] md:h-auto object-cover w-full"
                                    src="images/img_aw1w3mztamznnjso7ldufulljpg.png"
                                    alt="aw1w3mztamznnjs"
                                  />
                                  <div className="flex flex-col gap-2.5 items-center justify-start p-2.5 w-full">
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-center text-gray-800 text-xs"
                                        size="txtMontserratMedium12"
                                      >
                                        Åland Islands
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-[13px] text-purple-400"
                                        size="txtMontserratMedium13"
                                      >
                                        George kO, 2…
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-end sm:ml-[0] pt-[65px] w-full">
                              <div className="flex flex-col items-center justify-start pb-3 px-3 w-full">
                                <div className="bg-white-A700 flex flex-col items-center justify-start mb-[92px] shadow-bs5 w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[127px] md:h-auto object-cover w-full"
                                      src="images/img_mamfqnislj6etdv1vebnfullpng.png"
                                      alt="mamfqnislj6etdv"
                                    />
                                    <div className="flex flex-col gap-2.5 items-center justify-start p-2.5 w-full">
                                      <div className="flex flex-col items-center justify-start sm:px-5 px-[23px]">
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtMontserratMedium12"
                                        >
                                          Albania
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-[13px] text-purple-400"
                                          size="txtMontserratMedium13"
                                        >
                                          Fdgdfg dfgf…
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] pb-3 px-3 w-full">
                              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[157px] shadow-bs5 w-full">
                                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                  <Img
                                    className="h-[127px] md:h-auto object-cover w-full"
                                    src="images/img_9miwkacziokpwxbl2v35fullpng.png"
                                    alt="9miwkacziokpwxb"
                                  />
                                  <div className="flex flex-col gap-2.5 items-center justify-start p-2.5 w-full">
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-center text-gray-800 text-xs"
                                        size="txtMontserratMedium12"
                                      >
                                        Turkey
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-[13px] text-purple-400"
                                        size="txtMontserratMedium13"
                                      >
                                        Kjkszpj kjksz…
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-end sm:ml-[0] pt-[145px] w-full">
                              <div className="flex flex-col items-center justify-start pb-3 px-3 w-full">
                                <div className="bg-white-A700 flex flex-col items-center justify-start mb-3 shadow-bs5 w-full">
                                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                    <Img
                                      className="h-[127px] md:h-auto object-cover w-full"
                                      src="images/img_pqqzsytiwnkihzszlwpvfulljpg.png"
                                      alt="pqqzsytiwnkihzs"
                                    />
                                    <div className="flex flex-col gap-2.5 items-center justify-start p-2.5 w-full">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtMontserratMedium12"
                                        >
                                          Algeria
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-[13px] text-purple-400"
                                          size="txtMontserratMedium13"
                                        >
                                          Sad asdasd, …
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start px-[11px] w-[51%] md:w-full">
                          <div className="flex flex-col gap-[38px] items-start justify-start py-[167px] w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-800"
                                size="txtMontserratSemiBold52Gray800"
                              >
                                <>
                                  Best dating website
                                  <br />
                                  for any age
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start mb-[3px] pr-[3px] pt-[3px] w-full">
                              <Text
                                className="leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                                size="txtMontserratRegular24"
                              >
                                <>
                                  Join Quickdate, where you could meet anyone,
                                  <br />
                                  anywhere! It\&#39;s a complete fun to find a
                                  perfect
                                  <br />
                                  match for you and continue to hook up.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute float bottom-[0] sm:h-[1295px] md:h-[1309px] h-[1325px] inset-x-[0] mx-auto w-[99%] md:w-full">
                    <div className="absolute h-[1295px] md:h-[1309px] inset-y-[0] my-auto right-[0] w-[96%] md:w-full">
                      <div className="absolute flex flex-col items-center justify-start left-[0] md:px-10 sm:px-5 px-[47px] top-[13%] w-1/2">
                        <div className="flex flex-col gap-[27px] items-center justify-end py-[148px] w-full">
                          <div className="flex flex-col items-start justify-start pb-0.5 pr-0.5 w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-orange-600 sm:text-xl"
                              size="txtMontserratMedium24"
                            >
                              How it works
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-800"
                              size="txtMontserratSemiBold52Gray800"
                            >
                              <>
                                We have made it
                                <br />
                                easy for you to have
                                <br />
                                fun while you use our
                                <br />
                                Quickdate platform.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[69%]">
                        <div className="h-[1295px] md:h-[1309px] relative w-full">
                          <div className="bg-gradient9  flex flex-col h-full items-center justify-start ml-auto my-auto p-[30px] sm:px-5 w-[73%]">
                            <List
                              className="flex flex-col gap-px items-center my-[50px] w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[70px] w-full">
                                <Img
                                  className="h-28"
                                  src="images/img_divh2de44f3029.svg"
                                  alt="divh2de44f3029"
                                />
                                <div className="flex md:flex-1 flex-col items-center justify-start md:px-10 sm:px-5 px-[50px] w-[74%] md:w-full">
                                  <div onClick={switchPage} className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                      size="txtMontserratMedium24WhiteA700"
                                    >
                                      Create Account
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-[5px] pr-[3px] pt-[3px]">
                                    <Text
                                      className="leading-[25.00px] text-base text-white-A700_7f"
                                      size="txtMontserratRegular16"
                                    >
                                      <>
                                        Register your account with quick and
                                        easy
                                        <br />
                                        steps, when you finish you will get a
                                        good
                                        <br />
                                        looking profile.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[69px] w-full">
                                <Img
                                  className="h-28"
                                  src="images/img_divh2d121f2f6d.svg"
                                  alt="divh2d121f2f6d"
                                />
                                <div className="flex md:flex-1 flex-col gap-[5px] items-center justify-start md:px-10 sm:px-5 px-[50px] w-[73%] md:w-full">
                                  <div className="flex flex-col items-start justify-start pb-0.5 pr-0.5">
                                    <Text
                                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                      size="txtMontserratMedium24WhiteA700"
                                    >
                                      Find Matches
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="leading-[25.00px] text-base text-white-A700_7f"
                                      size="txtMontserratRegular16"
                                    >
                                      <>
                                        Search & connect with matches which are
                                        <br />
                                        perfect for you to date, it&#39;s easy &
                                        a<br />
                                        complete fun.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly py-[70px] w-full">
                                <Img
                                  className="h-28"
                                  src="images/img_divh2d20d2cbd4.svg"
                                  alt="divh2d20d2cbdFour"
                                />
                                <div className="flex md:flex-1 flex-col items-center justify-start md:px-10 sm:px-5 px-[50px] w-[73%] md:w-full">
                                  <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
                                    <Text
                                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                      size="txtMontserratMedium24WhiteA700"
                                    >
                                      Start Dating
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start mt-[5px] pr-[3px] pt-[3px]">
                                    <Text
                                      className="leading-[25.00px] text-base text-white-A700_7f"
                                      size="txtMontserratRegular16"
                                    >
                                      <>
                                        Interact using our user friendly
                                        platform,
                                        <br />
                                        Initiate conversations in mints. Date
                                        your
                                        <br />
                                        best matches.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                          <Img
                            className="absolute h-[1295px] inset-[0] justify-center m-auto"
                            src="images/img_svg_orange_600.svg"
                            alt="svg_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[1187px] left-[0] object-cover top-[0]"
                      src="images/img_svg_deep_purple_a200.png"
                      alt="svg_Two"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[947px] inset-y-[0] my-auto object-cover right-[0]"
                  src="images/img_group8770.png"
                  alt="group8770"
                />
              </div>
              <div className="flex flex-col items-center abs justify-start p-[5px] w-[61%] md:w-full">
                <div className="flex flex-col gap-[27px] items-center justify-start my-[35px] w-full">
                  <div className="flex flex-col items-center justify-start pt-0.5 px-0.5 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-orange-600 sm:text-xl"
                      size="txtMontserratMedium24"
                    >
                      Anytime & Anywhere
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:px-5 px-8 w-full">
                    <Text
                      className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-800"
                      size="txtMontserratSemiBold52Gray800"
                    >
                      <>
                        Connect with your perfect
                        <br />
                        Soulmate here.
                      </>
                    </Text>
                  </div>
                  <Button
                    onClick={switchPage}
                    className="cursor-pointer min-w-[200px] rounded-[30px] text-center text-xl"
                    color="orange_600"
                    size="2xl"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            <div className="float1 absolute bottom-[8%] flex flex-col font-librefranklin inset-x-[0] items-center justify-start mx-auto w-[63%]">
              <div className="gapt flex flex-col md:gap-10 gap-[117px] items-center justify-start py-[117px] w-full">
                <div className="flex flex-col items-center h5 justify-start md:px-10 sm:px-5 px-[299px] w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-black-900_dd text-center"
                    size="txtLibreFranklinMedium34"
                  >
                    How Todate Works
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mb-[21px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start px-[11px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className=" add"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <div className="md:h-24 h-[73px] md:px-10 sm:px-5 px-[65px] relative w-full">
                        <Text
                          className="absolute h-max inset-[0] index justify-center m-auto text-black-900_dd text-center text-xl w-max"
                          size="txtLibreFranklinMedium20"
                        >
                          Create Account
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto px-[15px]">
                          <Text
                            className="num md:text-5xl text-6xl text-black-900 text-center"
                            size="txtLibreFranklinBold60"
                          >
                            1
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[5px] px-2">
                        <Text
                          className="text-[15px] text-black-900_dd text-center"
                          size="txtLibreFranklinRegular15"
                        >
                          Register for free & create up your
                        </Text>
                        <Text
                          className="text-[15px] text-black-900_dd text-center"
                          size="txtLibreFranklinRegular15"
                        >
                          good looking Profile.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start px-[11px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="add"
                        src="images/img_floatingicon.svg"
                        alt="floatingicon"
                      />
                      <div className="h-[73px] md:h-[95px] md:px-10 sm:px-5 px-[74px] relative w-full">
                        <Text
                          className="absolute h-max inset-[0] index justify-center m-auto text-black-900_dd text-center text-xl w-max"
                          size="txtLibreFranklinMedium20"
                        >
                          Find Matches
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto px-[11px]">
                          <Text
                            className="num md:text-5xl text-6xl text-black-900 text-center"
                            size="txtLibreFranklinBold60"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-1 px-3">
                        <Text
                          className="text-[15px] text-black-900_dd text-center"
                          size="txtLibreFranklinRegular15"
                        >
                          Search & Connect with Matches
                        </Text>
                        <Text
                          className="text-[15px] text-black-900_dd text-center"
                          size="txtLibreFranklinRegular15"
                        >
                          which are perfect for you.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start px-[11px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="add"
                        src="images/img_close_pink_400.svg"
                        alt="close"
                      />
                      <div className="md:h-24 h-[73px] md:px-10 sm:px-5 px-[81px] relative w-full">
                        <Text
                          className="absolute bottom-[29%] index inset-x-[0] mx-auto text-black-900_dd text-center text-xl w-max"
                          size="txtLibreFranklinMedium20"
                        >
                          Start Dating
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto px-2.5">
                          <Text
                            className="num md:text-5xl text-6xl text-black-900 text-center"
                            size="txtLibreFranklinBold60"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[5px] px-[3px]">
                        <Text
                          className="text-[15px] text-black-900_dd text-center"
                          size="txtLibreFranklinRegular15"
                        >
                          Start doing conversations and date
                        </Text>
                        <Text
                          className="text-[15px] text-black-900_dd text-center"
                          size="txtLibreFranklinRegular15"
                        >
                          your best match.
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
            <div className="flex flex-col last items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-7 pb-[98px] w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[34%] md:w-full">
                    <div className="flex flex-col items-start justify-end">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtMontserratMedium18"
                      >
                        Quick Links
                      </Text>
                    </div>
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
                          onClick={switchPage}
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
                  <div className="flex md:flex-1 flex-col items-center justify-start  w-[34%] md:w-full">
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
      </div>
    </>
  );
};

export default DesktopThirtyTwoPage;
