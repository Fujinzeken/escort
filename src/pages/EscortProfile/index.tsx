import React from 'react'
import { Button, Img, Input, Text } from "components";
import logo from 'assets/images/logo.png'
import { useNavigate } from "react-router-dom";

function EscortProfile() {
  const navigate = useNavigate()

 const ConfirmEmail = () => {
  navigate('/ConfirmEmail');  
 }
  return (
    <div>
      <div className='main bg-cover bg-no-repeat ' style={{
        backgroundImage:
                "url('images/img_loginbannermasksvg_black_900.png')", }}>
        <nav className='flex flex-col'>
           <svg xmlns="http://www.w3.org/2000/svg" width="1433" height="10" viewBox="0 0 1433 10" fill="none">
                <mask id="path-1-inside-1_316_1344" fill="white">
                    <path d="M-10 0H1433V10H-10V0Z"/>
                </mask>
                <path d="M-10 0V-10H-20V0H-10ZM1433 0H1443V-10H1433V0ZM1433 10V20H1443V10H1433ZM-10 10H-20V20H-10V10ZM-10 10H1433V-10H-10V10ZM1423 0V10H1443V0H1423ZM1433 0H-10V20H1433V0ZM0 10V0H-20V10H0Z" fill="#FD00B3" mask="url(#path-1-inside-1_316_1344)"/>
            </svg>
            <section className='logot mt-4' style={{height : '50px', width: '100%', backgroundColor: 'white'}}>
                <img src= {logo} alt="" />
             </section>
        </nav>
         <div className='items-center justify-center flex flex-col mb-[2rem]'>
            <h1 style={{color: 'pink'}} className='text-[42px]'>
              Join Ladies
            </h1>
            <h5>Home of the independent escort, a platform by us, for us</h5>
         </div>
         <section className='flex mt-[5rem] items-center justify-center '>
          <div className='escort-cruel w-[70%] flex p-[3rem]' style={{borderRadius: '1rem', backgroundColor: 'white'}}>
          <div className='p-4' style={{borderRight: '1px solid gainsboro'}}>
              <h1 className='text-[32px] mb-4'>Policies</h1>
              <p>
                Welcome to Tryst.link, home of the independent
                escort! We’re excited that you want to join us.
                Before you create your account there are some
                important things you need to agree to:
              </p>
              <ul className='p-4 escort-list'>
                <li>
                    <p>
                      <span style={{fontWeight: '600'}} > You must be over the age of 18 </span> 
                        agree not to offer any services that are
                        prohibited in that jurisdiction.
                    </p>
                </li>
                <li>
                    <p>
                      <span style={{fontWeight: '600'}}>You must provide valid identification to verify your age </span> 
                      before you can create a profile.
                    </p>
                </li>
                <li>
                    <p>
                      <span style={{fontWeight: '600'}}>You must have your own contact details </span>  
                      that you do not share with any other worker
                        or business.
                    </p>
                </li>
                <li>
                    <p>
                      <span style={{fontWeight: '600'}}> Your photos must be of you </span> 
                      and of a high quality. This doesn’t mean they need to be
                        professionally taken but they must be high
                        resolution..
                    </p>
                </li>
                <li>
                    <p>
                      <span style={{fontWeight: '600'}} > You must have the rights to use all photos </span> 
                      and they must be an accurate representation of yourself.
                    </p>
                </li>
              </ul>
              <p>
              TRYST RESERVES THE RIGHT TO REFUSE
                ADVERTISING AT OUR DISCRETION, AS WE
                ENDEAVOUR TO MAINTAIN A HIGH STANDARD
                IN QUALITY, IMAGE PRESENTATION, AND
                INTEGRITY.
              </p>
           </div>
           <div className='p-4'>
             <h1 className='text-[32px] mb-4'>Provider sign up</h1>
             <section className='p-[.8rem] mb-[.5rem]' style={{backgroundColor: '#D5DDE4' , borderRadius: '.3rem'}}>
                <p>
                    <span style={{fontWeight: '600'}} >Want contact Provides? </span> 
                    create a Client account instead
                </p>
             </section>
             <div className='page-inputs flex flex-col'>
               <span style={{fontWeight: '600'}}>
                Working Name
               </span>
               <input type="text" name="" id="" />
               <p>
               Your working name, not your legal name. No locations,
                emojis, or symbols please.
               </p>
             </div>
             <div className='page-inputs flex flex-col '>
               <span style={{fontWeight: '600'}}>
                Password
               </span> 
               <input type="text" name="" id="" />
               <p>
               8 characters minimum. Make sure to set a <span style={{fontWeight: '600'}}> strong, unique </span> 
               password to protect your account. <span style={{fontWeight: '600'}}>Check out our password recommendations page </span> 
               for tips on creating and managing passwords.
               </p>
             </div>
             <div className='page-inputs flex flex-col'>
               <span style={{fontWeight: '600'}} >
                Working Name
               </span> 
               <input type="text" name="" id="" />
               <p>
               Your working name, not your legal name. No locations,
                emojis, or symbols please.
               </p>
             </div>
             <div className='page-inputs flex flex-col'>
               <span style={{fontWeight: '600'}}>
                Repeat your password
               </span> 
               <input type="text" name="" id="" />
               <p>
               Your working name, not your legal name. No locations,
                emojis, or symbols please.
               </p>
             </div>
             <section className='flex pb-4'>
                <input type="checkbox" className='mt-[.2rem]' />
                <p>
                I agree to the platform policies and that I am
                over the age of 18 and the age of majority in my
                jurisdiction
                </p>
             </section>
             <section className='items-center flex flex-col'>
                <p>
                By signing up to Tryst.link you agree that you are
                doing so of your own free will, free of outside
                pressure, and that you have read and agreed to
                our <span style={{fontWeight: '600'}}>Advertising Policy, Terms and conditions , Code of Conduct </span>  and Privacy Policy
                </p>
                <button onClick={ConfirmEmail} className='p-[.5rem] w-[90%] mt-[1rem]' style={{color: 'white', borderRadius: '.4rem' , backgroundColor : '#FD4A5C'}}>
                    Sign Up
                </button>
             </section>
           </div>
          </div>
         </section>
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
      </div>
    </div>
  )
}

export default EscortProfile
