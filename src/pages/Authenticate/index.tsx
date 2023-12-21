import React from 'react'
import logo from 'assets/images/logo.png'
import sit from 'assets/images/sit.png'
import phone from 'assets/images/phone.png'
import print from 'assets/images/print.png'
import close from 'assets/images/close.png'
import { Button, Img, Input, Text } from "components";
import { useNavigate } from "react-router-dom";

function Authenticate() {
    const navigate = useNavigate()

    const EscortDashboard = () => {
     navigate('/EscortDashboard');  
    }
    return (
        <div>
            <nav className='flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1433" height="10" viewBox="0 0 1433 10" fill="none">
                    <mask id="path-1-inside-1_316_1344" fill="white">
                        <path d="M-10 0H1433V10H-10V0Z" />
                    </mask>
                    <path d="M-10 0V-10H-20V0H-10ZM1433 0H1443V-10H1433V0ZM1433 10V20H1443V10H1433ZM-10 10H-20V20H-10V10ZM-10 10H1433V-10H-10V10ZM1423 0V10H1443V0H1423ZM1433 0H-10V20H1433V0ZM0 10V0H-20V10H0Z" fill="#FD00B3" mask="url(#path-1-inside-1_316_1344)" />
                </svg>
                <section className='logot items-center mt-4 p- flex justify-between' style={{ width: '100%', backgroundColor: 'white' }}>
                    <img src={logo} className='h-fit' alt="" />
                    <ul className='flex auth-list'>
                        <li>
                            Home
                        </li>
                        <li>
                            Packages
                        </li>
                        <li>
                            Members
                        </li>
                        <li>
                            Stones
                        </li>
                        <li>
                            Contacts
                        </li>
                    </ul>
                    <div className='flex'>
                        <button className='mr-2 english'>
                            English
                        </button>
                        <button onClick={EscortDashboard} className='mr-2 dahs-btn'>
                            Dashboard
                        </button>
                        <button className='mr-2 log'>
                            Logout
                        </button>
                    </div>
                </section>
            </nav>
            <div className='main mt-6 bg-cover bg-no-repeat ' style={{
                backgroundImage:
                    "url('images/img_loginbannermasksvg_black_900.png')",
            }}>
                <section className='flex justify-center'>
                    <div className='w-[85%] p-[2rem] mt-[4rem] p-[2rem]' style={{ backgroundColor: 'white', boxShadow: '1px 2px 11px lightgray', borderRadius: '.5rem' }}>
                        <div className='flex items-center p-4 mt-[3rem] justify-between ' style={{ backgroundColor: '#FCB8B8', borderRadius: '.5rem', }}>
                            <p>
                                This account has not been set up for 2-step login
                            </p>
                            <img className='h-fit' src={close} alt="" />
                        </div>
                        <section className='flex mt-[2rem]'>
                            <div className='w-[50%]'>
                                <h1 style={{ fontSize: '30px', fontWeight: '500' }}>
                                    Set up 2-step login
                                </h1>
                                <p className='mb-4'>
                                    It's time to protect your account by setting up 2-step login.
                                </p>
                                <p className='mb-4'>
                                    With 2-step login, you'll need both your password and a verification app code or
                                    security key / passkey to log in. It's the best way to defeat scammers and secure
                                    your account.
                                </p>
                                <p>
                                    Learn more about 2-step login
                                </p>
                            </div>
                            <div>
                                <img src={sit} alt="" />
                            </div>
                        </section>
                        <section className='justify-between flex mt-4'>
                            <div className='p-[2rem] w-[47%]' style={{ borderRadius: '.5rem', boxShadow: '1px 2px 11px lightgrey' }}>
                                <img src={phone} alt="" />
                                <h1 style={{ fontSize: '25px', fontWeight: '500' }} className='mt-4'>
                                    Authenticator app
                                </h1>
                                <p style={{ fontSize: '15px' }}>
                                    Generate a code using an app such as Google Authenticator (Android, iOS),
                                    Microsoft Authenticator (Android, iOS), 1Password, Authy (Android, iOS,
                                    Windows, macOS, or Linux), or FreeOTP (Android, iOS).
                                </p>
                                <button className='p-[.3rem] mt-[.5rem] pr-[.7rem] pl-[.7rem]' style={{ borderRadius: '2rem', backgroundColor: '#FD00B3', color: 'white' }}>
                                    set-up autheticator app
                                </button>
                            </div>
                            <div className='w-[47%] p-[2rem]' style={{ borderRadius: '.5rem', boxShadow: '1px 2px 11px lightgrey' }}>
                                <img src={print} alt="" />
                                <h1 className='mt-4' style={{ fontSize: '25px', fontWeight: '500' }}>
                                    Security Key / Passkey
                                </h1>
                                <p className='text-[15px]'>
                                    Use the login credentials for your device (such as fingerprint, facial recognition,
                                    phone pin, or swipe pattern).
                                </p>
                                <button className='p-[.3rem] mt-[.5rem] pl-[.7rem] pr-[.7rem]' style={{ backgroundColor: '#FD00B3', borderRadius: '1rem', color: 'white' }}>
                                    Set-up security / Passkey
                                </button>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <section>
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
            </section>
        </div>
    )
}

export default Authenticate
