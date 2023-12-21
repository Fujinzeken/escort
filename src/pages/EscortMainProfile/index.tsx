import React from 'react'
import logo from 'assets/images/logo.png'
import user from 'assets/images/User.png'
import user1 from 'assets/images/User1.png'
import profile from 'assets/images/avatar.png'
import Emphasis from 'assets/images/Emphasis.png'
import { Button, Img, Input, Text } from "components";
function EscortMainProfile() {
    return (
        <div>
            <nav className='flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1433" height="10" viewBox="0 0 1433 10" fill="none">
                    <mask id="path-1-inside-1_316_1344" fill="white">
                        <path d="M-10 0H1433V10H-10V0Z" />
                    </mask>
                    <path d="M-10 0V-10H-20V0H-10ZM1433 0H1443V-10H1433V0ZM1433 10V20H1443V10H1433ZM-10 10H-20V20H-10V10ZM-10 10H1433V-10H-10V10ZM1423 0V10H1443V0H1423ZM1433 0H-10V20H1433V0ZM0 10V0H-20V10H0Z" fill="#FD00B3" mask="url(#path-1-inside-1_316_1344)" />
                </svg>
                <section className='logot mt-4' style={{ height: '50px', width: '100%', backgroundColor: 'white' }}>
                    <img src={logo} alt="" />
                </section>
            </nav>
            <section className='main pt-[4rem] bg-cover bg-no-repeat ' style={{
                backgroundImage:
                    "url('images/img_loginbannermasksvg_black_900.png')",
            }}>
                <section className='flex justify-between w-full'>
                    <div className="side-nav h-fit p-2 w-[268px] flex flex-col items-center ml-[1.5rem]" style={{ backgroundColor: 'white', boxShadow: '1px 2px 11px lightsteelblue', borderRadius: '.2rem' }} >
                        <section className='mt-4 flex flex-col w-[80%] items-center'>
                            <img src={profile} alt="" />
                            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Cruel Santino</h2>
                            <p>ID :8312630 </p>
                            <button className='p-2 w-[100%]' style={{ backgroundColor: '#FD2C7926', borderRadius: '.3rem' }}>
                                Public Profile
                            </button>
                        </section>
                        <section className='mt-4 w-[100%]'>
                            <ul className='dashboard-lists'>
                                <li className='pb-[1.5rem] pl-[1.5rem]' style={{ borderBottom: '1px solid black' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_315_421)">
                                            <path d="M2.27344 12.5508C2.07031 12.5508 1.875 12.5312 1.6875 12.4922C1.5 12.4531 1.32031 12.4023 1.14844 12.3398H1.17188C0.828125 12.1992 0.546875 11.9727 0.328125 11.6602C0.109375 11.3477 0 10.9961 0 10.6055C0 10.5273 0.0078125 10.4453 0.0234375 10.3594C0.0390625 10.2734 0.0546875 10.1914 0.0703125 10.1133C0.148438 9.94141 0.238281 9.77734 0.339844 9.62109C0.441406 9.46484 0.5625 9.32422 0.703125 9.19922C0.90625 8.99609 1.12109 8.79297 1.34766 8.58984C1.57422 8.38672 1.80469 8.19922 2.03906 8.02734L2.08594 7.98047C2.19531 7.88672 2.30859 7.79297 2.42578 7.69922C2.54297 7.60547 2.65625 7.51172 2.76562 7.41797L6.65625 4.06641C7 3.78516 7.34375 3.50391 7.6875 3.22266C8.03125 2.94141 8.375 2.66016 8.71875 2.37891C9.0625 2.09766 9.41016 1.81641 9.76172 1.53516C10.1133 1.25391 10.4609 0.964844 10.8047 0.667969C10.9609 0.527344 11.1445 0.414062 11.3555 0.328125C11.5664 0.242188 11.7891 0.199219 12.0234 0.199219C12.2578 0.199219 12.4805 0.242188 12.6914 0.328125C12.9023 0.414062 13.0938 0.527344 13.2656 0.667969C14.1562 1.43359 15.0469 2.19531 15.9375 2.95312C16.8281 3.71094 17.7266 4.46484 18.6328 5.21484L19.1016 5.61328C20.0547 6.41016 21.0078 7.21484 21.9609 8.02734C22.0391 8.08984 22.1172 8.15234 22.1953 8.21484C22.2734 8.27734 22.3438 8.33984 22.4062 8.40234C22.5625 8.52734 22.7148 8.65234 22.8633 8.77734C23.0117 8.90234 23.1562 9.03516 23.2969 9.17578C23.5156 9.36328 23.6875 9.59375 23.8125 9.86719C23.9375 10.1406 24 10.4258 24 10.7227C24 10.7695 23.9961 10.8086 23.9883 10.8398C23.9805 10.8711 23.9766 10.9023 23.9766 10.9336V10.9102C23.9297 11.3477 23.7539 11.7148 23.4492 12.0117C23.1445 12.3086 22.7812 12.4805 22.3594 12.5273C22.2969 12.543 22.2305 12.5508 22.1602 12.5508C22.0898 12.5508 22.0156 12.5508 21.9375 12.5508C21.6094 12.5508 21.293 12.5 20.9883 12.3984C20.6836 12.2969 20.4062 12.1523 20.1562 11.9648L20.1797 11.9883C20.1172 11.9414 20.0625 11.8789 20.0156 11.8008C19.9688 11.7227 19.9453 11.6445 19.9453 11.5664C19.9453 11.4258 19.9961 11.3086 20.0977 11.2148C20.1992 11.1211 20.3203 11.0742 20.4609 11.0742C20.5234 11.0742 20.5859 11.0859 20.6484 11.1094C20.7109 11.1328 20.7656 11.168 20.8125 11.2148C20.9844 11.3242 21.1641 11.4102 21.3516 11.4727C21.5391 11.5352 21.7422 11.5664 21.9609 11.5664C22.0078 11.5664 22.0547 11.5625 22.1016 11.5547C22.1484 11.5469 22.1953 11.543 22.2422 11.543C22.4297 11.5273 22.5938 11.4492 22.7344 11.3086C22.875 11.168 22.9609 11.0039 22.9922 10.8164C22.9922 10.8008 22.9922 10.7852 22.9922 10.7695C22.9922 10.7539 22.9922 10.7461 22.9922 10.7461C22.9922 10.5742 22.9609 10.4141 22.8984 10.2656C22.8359 10.1172 22.7422 9.98828 22.6172 9.87891C22.4922 9.75391 22.3594 9.63281 22.2188 9.51562C22.0781 9.39844 21.9375 9.28516 21.7969 9.17578C21.7188 9.11328 21.6406 9.05078 21.5625 8.98828C21.4844 8.92578 21.4062 8.86328 21.3281 8.80078C20.375 7.98828 19.4141 7.17578 18.4453 6.36328L17.9766 5.96484C17.0859 5.21484 16.1914 4.46094 15.293 3.70312C14.3945 2.94531 13.5 2.18359 12.6094 1.41797C12.5312 1.33984 12.4414 1.28125 12.3398 1.24219C12.2383 1.20312 12.1328 1.18359 12.0234 1.18359C11.9141 1.18359 11.8086 1.20312 11.707 1.24219C11.6055 1.28125 11.5156 1.33984 11.4375 1.41797C11.0938 1.71484 10.7461 2.00781 10.3945 2.29688C10.043 2.58594 9.69531 2.87109 9.35156 3.15234C9.00781 3.41797 8.66406 3.69141 8.32031 3.97266C7.97656 4.25391 7.64062 4.53516 7.3125 4.81641L3.39844 8.16797C3.28906 8.27734 3.17578 8.37891 3.05859 8.47266C2.94141 8.56641 2.82031 8.66016 2.69531 8.75391C2.46094 8.94141 2.23828 9.12891 2.02734 9.31641C1.81641 9.50391 1.60938 9.69922 1.40625 9.90234C1.32812 9.96484 1.25391 10.043 1.18359 10.1367C1.11328 10.2305 1.0625 10.3242 1.03125 10.418V10.4414C1.01562 10.457 1.00781 10.4805 1.00781 10.5117C1.00781 10.543 1.00781 10.5664 1.00781 10.582C1.00781 10.7695 1.05859 10.9375 1.16016 11.0859C1.26172 11.2344 1.39062 11.3477 1.54688 11.4258C1.65625 11.4727 1.76562 11.5078 1.875 11.5312C1.98438 11.5547 2.10156 11.5664 2.22656 11.5664C2.33594 11.5664 2.4375 11.5547 2.53125 11.5312C2.625 11.5078 2.71875 11.4805 2.8125 11.4492C2.84375 11.4336 2.88281 11.418 2.92969 11.4023C2.97656 11.3867 3.02344 11.3789 3.07031 11.3789C3.21094 11.3789 3.33203 11.4258 3.43359 11.5195C3.53516 11.6133 3.58594 11.7305 3.58594 11.8711C3.58594 11.9805 3.55469 12.0781 3.49219 12.1641C3.42969 12.25 3.35156 12.3086 3.25781 12.3398C3.11719 12.4023 2.96875 12.4531 2.8125 12.4922C2.65625 12.5312 2.49219 12.5508 2.32031 12.5508C2.30469 12.5508 2.29297 12.5508 2.28516 12.5508C2.27734 12.5508 2.27344 12.5508 2.27344 12.5508ZM11.9766 5.44922C12.0703 5.44922 12.1602 5.46484 12.2461 5.49609C12.332 5.52734 12.4062 5.57422 12.4688 5.63672L20.3672 12.1289C20.4609 12.207 20.5352 12.3008 20.5898 12.4102C20.6445 12.5195 20.6719 12.6367 20.6719 12.7617C20.6719 12.7617 20.6719 12.7656 20.6719 12.7734C20.6719 12.7812 20.6719 12.7852 20.6719 12.7852V22.3008C20.6719 22.5195 20.5977 22.707 20.4492 22.8633C20.3008 23.0195 20.1172 23.1055 19.8984 23.1211H15.9375C15.9219 23.1055 15.9023 23.0898 15.8789 23.0742C15.8555 23.0586 15.8438 23.0352 15.8438 23.0039V16.8867C15.8438 16.8867 15.8438 16.8789 15.8438 16.8633C15.8438 16.6445 15.7695 16.4609 15.6211 16.3125C15.4727 16.1641 15.2891 16.082 15.0703 16.0664H8.92969C8.71094 16.082 8.52734 16.1641 8.37891 16.3125C8.23047 16.4609 8.15625 16.6445 8.15625 16.8633C8.15625 16.8789 8.15625 16.8867 8.15625 16.8867V23.0273C8.15625 23.043 8.14844 23.0625 8.13281 23.0859C8.11719 23.1094 8.09375 23.1211 8.0625 23.1211H4.07812C3.85938 23.1055 3.67188 23.0195 3.51562 22.8633C3.35938 22.707 3.28125 22.5195 3.28125 22.3008C3.28125 22.3008 3.28516 22.3008 3.29297 22.3008C3.30078 22.3008 3.30469 22.3008 3.30469 22.3008V12.7148C3.30469 12.5898 3.32812 12.4727 3.375 12.3633C3.42188 12.2539 3.49219 12.1602 3.58594 12.082L11.4844 5.63672C11.5469 5.57422 11.6211 5.52734 11.707 5.49609C11.793 5.46484 11.8828 5.44922 11.9766 5.44922ZM11.9766 4.46484C11.7578 4.46484 11.5547 4.5 11.3672 4.57031C11.1797 4.64062 11.0078 4.73828 10.8516 4.86328L2.95312 11.3086C2.75 11.4805 2.58984 11.6875 2.47266 11.9297C2.35547 12.1719 2.29688 12.4336 2.29688 12.7148V22.2773C2.29688 22.293 2.29688 22.3008 2.29688 22.3008C2.29688 22.8008 2.47266 23.2266 2.82422 23.5781C3.17578 23.9297 3.59375 24.1055 4.07812 24.1055H8.0625C8.35938 24.1055 8.61328 24 8.82422 23.7891C9.03516 23.5781 9.14062 23.3164 9.14062 23.0039V17.0742H14.8594V23.0039C14.8594 23.3164 14.9648 23.5781 15.1758 23.7891C15.3867 24 15.6406 24.1055 15.9375 24.1055H19.8984C20.3828 24.1055 20.7969 23.9297 21.1406 23.5781C21.4844 23.2266 21.6562 22.8086 21.6562 22.3242C21.6562 22.3086 21.6562 22.3008 21.6562 22.3008V12.7852C21.6562 12.7852 21.6562 12.7773 21.6562 12.7617C21.6562 12.4805 21.5977 12.2188 21.4805 11.9766C21.3633 11.7344 21.2031 11.5352 21 11.3789V11.3555L13.1016 4.86328C12.9453 4.73828 12.7734 4.64062 12.5859 4.57031C12.3984 4.5 12.1953 4.46484 11.9766 4.46484Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_315_421">
                                                <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Dashboard
                                </li>
                                <li>
                                    <img src={user} alt="" />
                                    Edit Profile
                                    <img src="" alt="" />
                                </li>
                                <li className='active'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path d="M17.9156 1.3125H3.08438C2.1 1.3125 1.3125 2.1 1.3125 3.08437V17.9812C1.3125 18.9 2.1 19.6875 3.08438 19.6875H17.9813C18.9656 19.6875 19.7531 18.9 19.7531 17.9156V3.08437C19.6875 2.1 18.9 1.3125 17.9156 1.3125ZM3.08438 2.625H17.9813C18.1781 2.625 18.375 2.82187 18.375 3.08437V6.95625L16.9969 5.57812C16.3406 4.92188 15.225 4.92188 14.5031 5.57812L11.1563 8.925L9.77813 7.54688C9.12188 6.89062 8.00625 6.89062 7.28438 7.54688L2.625 12.2063V3.08437C2.625 2.82187 2.82187 2.625 3.08438 2.625ZM17.9156 18.375H3.08438C2.82187 18.375 2.625 18.1781 2.625 17.9156V14.0437L8.20313 8.46562C8.4 8.26875 8.6625 8.26875 8.79375 8.46562L14.5688 14.2406C14.7 14.3719 14.8969 14.4375 15.0281 14.4375C15.1594 14.4375 15.3563 14.3719 15.4875 14.2406C15.75 13.9781 15.75 13.5844 15.4875 13.3219L12.075 9.84375L15.4219 6.49687C15.6188 6.3 15.8813 6.3 16.0125 6.49687L18.1781 8.6625C18.2438 8.72813 18.2438 8.72813 18.3094 8.72813V17.9156C18.375 18.1781 18.1781 18.375 17.9156 18.375Z" fill="#232222" />
                                        <path d="M5.84064 5.90625H5.90626C6.30001 5.90625 6.56251 5.64375 6.56251 5.25C6.56251 4.85625 6.23439 4.59375 5.90626 4.59375H5.84064C5.44689 4.59375 5.18439 4.85625 5.18439 5.25C5.18439 5.64375 5.44689 5.90625 5.84064 5.90625Z" fill="black" />
                                    </svg>
                                    Gallery
                                </li>
                                <li>
                                    <img src={user1} alt="" />
                                    Account Settings
                                </li>
                                <li style={{ borderBottom: '1px solid black' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                        <path d="M31.9651 14.7671C32.0822 13.9696 31.5306 13.2284 30.7332 13.1113L22.4917 11.9065L18.8088 4.40118C18.6762 4.17225 18.4859 3.98212 18.2568 3.84977C17.5334 3.43169 16.6079 3.67913 16.1898 4.4026L12.5083 11.9065L4.26676 13.1114C3.95167 13.1576 3.66043 13.3057 3.43728 13.5329C2.8727 14.108 2.88133 15.032 3.45642 15.5965L9.42505 21.4484L8.01656 29.7085C8.00321 29.7875 7.99636 29.8675 7.99618 29.9478C7.99395 30.7549 8.64639 31.411 9.45353 31.4132C9.69145 31.4128 9.92573 31.3542 10.1357 31.2423L17.5 27.3487L24.8629 31.2409C25.1474 31.3919 25.4739 31.4445 25.7915 31.3904C26.5851 31.255 27.1187 30.5021 26.9834 29.7085L25.575 21.4484L31.545 15.595C31.7714 15.3721 31.9189 15.0814 31.9651 14.7671ZM24.2818 20.6736C24.1111 20.8411 24.0329 21.0814 24.0725 21.3173L25.545 29.9519L17.8404 25.8788C17.627 25.7677 17.373 25.7677 17.1596 25.8788L9.45496 29.9533L10.9274 21.3174C10.9671 21.0815 10.8889 20.8412 10.7181 20.6736L4.47745 14.5555L13.0993 13.2951C13.3374 13.2595 13.5428 13.1094 13.6491 12.8935L17.5 5.04508L21.3508 12.8934C21.4571 13.1093 21.6626 13.2594 21.9006 13.295L30.5239 14.554L24.2818 20.6736Z" fill="black" />
                                    </svg>
                                    LadiesSTARS
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14.1666 7.66732L18.5108 4.62565C18.5733 4.58186 18.6466 4.55607 18.7227 4.55107C18.7988 4.54607 18.8748 4.56207 18.9425 4.59731C19.0101 4.63256 19.0668 4.6857 19.1063 4.75094C19.1459 4.81619 19.1667 4.89103 19.1666 4.96732V15.034C19.1667 15.1103 19.1459 15.1851 19.1063 15.2504C19.0668 15.3156 19.0101 15.3687 18.9425 15.404C18.8748 15.4392 18.7988 15.4552 18.7227 15.4502C18.6466 15.4452 18.5733 15.4194 18.5108 15.3757L14.1666 12.334V15.834C14.1666 16.055 14.0788 16.267 13.9226 16.4232C13.7663 16.5795 13.5543 16.6673 13.3333 16.6673H1.66665C1.44563 16.6673 1.23367 16.5795 1.07739 16.4232C0.92111 16.267 0.833313 16.055 0.833313 15.834V4.16732C0.833313 3.9463 0.92111 3.73434 1.07739 3.57806C1.23367 3.42178 1.44563 3.33398 1.66665 3.33398H13.3333C13.5543 3.33398 13.7663 3.42178 13.9226 3.57806C14.0788 3.73434 14.1666 3.9463 14.1666 4.16732V7.66732ZM14.1666 10.2998L17.5 12.6332V7.36732L14.1666 9.70065V10.299V10.2998ZM2.49998 5.00065V15.0007H12.5V5.00065H2.49998ZM4.16665 6.66732H5.83331V8.33398H4.16665V6.66732Z" fill="#433E42" />
                                    </svg>
                                    Live videos
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <g clip-path="url(#clip0_315_410)">
                                            <path d="M14.9541 7.39062L18.5625 11L14.9541 14.6094" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.9375 11H18.56" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.9375 18.5625H4.125C3.94266 18.5625 3.7678 18.4901 3.63886 18.3611C3.50993 18.2322 3.4375 18.0573 3.4375 17.875V4.125C3.4375 3.94266 3.50993 3.7678 3.63886 3.63886C3.7678 3.50993 3.94266 3.4375 4.125 3.4375H8.9375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_315_410">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    signout
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className='w-[70%] mr-[2rem] '>
                        <section className='p-4' style={{ backgroundColor: 'white',  borderRadius: '.5rem' , boxShadow: '1px 2px 11px lightgrey'}}>
                            <h1 style={{color: '#FD00B3'}}>
                                ADD MY PROFILE
                            </h1>
                            <div className='flex mt-2 escort-add-btn' style={{color: '#6E6E6E'}}>
                                <button style={{padding: '.5rem' , backgroundColor: 'white'}}>
                                    Edit profile
                                </button>
                                <button style={{padding: '.5rem' , borderLeft: '1px solid #DDDDDD'}}>
                                    Photos
                                </button>
                                <button style={{padding: '.5rem' , borderLeft: '1px solid #DDDDDD'}}>
                                    Videos
                                </button>
                                <button style={{padding: '.5rem', borderLeft: '1px solid #DDDDDD'}}>
                                    Working time
                                </button>
                            </div>
                        </section>
                        <section className='mt-[4rem] escort-submit-form'>
                            <h1>
                                Model name
                            </h1>
                            <input style={{width: '435px'}} type="text" placeholder='Steph' />
                            <div className='flex mt-2'>
                                <section className='mr-2'>
                                    <h1>Country</h1>
                                    <input type="text" placeholder='choose' />
                                </section>
                                <section className='ml-2'>
                                    <h1>City</h1>
                                    <input type="text" placeholder='choose'/>
                                </section>
                            </div>
                            <div className='mt-4'>
                                <h1>
                                    Profile picture
                                </h1>
                                <img src={Emphasis} alt="" />
                                <p className='p-2 mt-4' style={{border: '1px solid gray'}}>
                                    NOT ALLOWED: watermark, logo, phone number, any text
                                </p>
                                <button className='mt-2 pl-[.8rem] pr-[.8rem] p-[.3rem]'>
                                    Browse
                                </button>
                            </div>
                            <div className='mt-4'>
                                <h1>
                                    Description
                                </h1>
                                <p className='p-4' style={{borderRadius: '.5rem' , border: '1px solid lightgray', color: 'grey'}}>
                                    Not allowed: Phone Number, E-mail address, Website URL
                                </p>
                            </div>
                            <div className='mt-4' style={{fontSize: 'smaller'}}>
                                <h1>
                                    Types of Profile
                                </h1>
                                <input type="radio" value='Female'/>
                                    <label className='ml-2 mr-2'>Female</label>
                                <input type="radio" value='Male'/>
                                <label className='ml-2 mr-2'>Male</label>
                                <input type="radio" value='Trans'/>
                                <label className='ml-2 mr-2'>Trans</label>
                                <input type="radio" value='Duo with girl'/>
                                <label className='ml-2 mr-2'>Duo with girl</label>
                                <input type="radio" value='couple'/>
                                <label className='ml-2 mr-2'>Couple</label>
                            </div>
                            <section className=' mt-4 grid-form gap-[20px] grid grid-cols-2' style={{color: 'black'}}>
                                <div>
                                    <h1>
                                        Age
                                    </h1>
                                    <input type="text" placeholder='Choose' />
                                </div>
                                <div>
                                    <h1>
                                        Height
                                    </h1>
                                    <input type="text" placeholder='Choose'/>
                                </div>
                                <div>
                                    <h1>
                                        Weight
                                    </h1>
                                    <input type="text" placeholder='Choose' />
                                </div>
                                <div>
                                    <h1>
                                        Available for
                                    </h1>
                                    <input type="text" placeholder='Choose'  />
                                </div>
                                <div>
                                    <h1>
                                        Breast size
                                    </h1>
                                    <input type="text" placeholder='Choose' />
                                </div>
                                <div>
                                    <h1>
                                        Breast type
                                    </h1>
                                    <input type="text" placeholder='Choose'/>
                                </div>
                                <div>
                                    <h1>
                                        Nationality
                                    </h1>
                                    <input type="text" placeholder='Choose' />
                                </div>
                                <div>
                                    <h1>
                                        Travel
                                    </h1>
                                    <input type="text" placeholder='Choose' />
                                </div>
                                <div>
                                    <h1>
                                        Languages (max 6)
                                    </h1>
                                    <input type="text" placeholder='Choose'/>
                                </div>
                                <div>
                                    <h1>
                                        Tattoo
                                    </h1>
                                    <input type="text"placeholder='Choose'  />
                                </div>
                                <div>
                                    <h1>
                                        Piercing
                                    </h1>
                                    <input type="text" placeholder='Choose'/>
                                </div>
                                <div>
                                    <h1>
                                        Are you a pornstar
                                    </h1>
                                    <input type="text" placeholder='No'/>
                                </div>
                            </section>
                            <div className='mt-2'>
                                <h1>
                                    Services
                                </h1>
                                <input type="text" style={{height: '60px' , width: '100%'}} />
                            </div>
                            <section className='mt-6'>
                                <h1>
                                    Meeting
                                </h1>
                                <input className='w-[435px]' type="text" placeholder='choose' />
                                <div className='mt-2'>
                                    <h1>
                                        Cell phone
                                    </h1>
                                    <section className='flex'>
                                        <input className='mr-2' type="text" placeholder='choose' />
                                        <input className='ml-2' type="text" />
                                    </section>
                                    <button className='mt-4 p-[.4rem]' style={{fontSize: '12px' , color: 'white' , backgroundColor: '#FD00B3' , borderRadius: '.3rem'}}>
                                        ADD ANOTHER PHONE
                                    </button>
                                </div>
                            </section>
                            <button className='w-full mt-[6rem] p-2' style={{backgroundColor: '#FD00B3', color: 'white', borderRadius: '.5rem'}}>Submit</button>
                        </section>
                     
                    </div>
                </section>
            </section>
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

export default EscortMainProfile
