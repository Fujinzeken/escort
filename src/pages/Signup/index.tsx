import React, {useState} from "react";

import axios from 'axios'

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

import validation from './validation'

  const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const loginPage = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError , setUsernameError] = useState('');
  
  const login = () => {
    loginPage('/login')
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // const [formError , setFormError] = useState({
  //   confirmpassword: ''
  // })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
    console.log(value);
    
  };


   const camelCaseData = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };

  //  console.log('values', values);
   

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });


const handleRegisterButtonClick = async (e) => {
  await handleFormSubmit(e);
};

const handleFormSubmit = async (e) => {
  e.preventDefault();


  try {
    // Make API call using Axios
    const response = await axios.post(
      'https://escort-backend-ny3u.onrender.com/api/v1/auth/signup',
      camelCaseData
    );

    if (response.status === 201) {
      navigate('/login');
    }

    // Handle the response as needed
    console.log('Signup successful:', response.data);
  } catch (error) {
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.errors) {
        setErrors(responseData.errors);
      }
      if (responseData.message) {
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
      
        if (responseData.message.includes('"username" length must be at least 4 characters long')) {
          setUsernameError('Username must have at least 4 characters');
        }
        if (responseData.message.includes('"email" must be a valid email')) {
          setEmailError('Email must be a valid Email Address');
        }
        if (responseData.message.includes('"password" length must be at least 7 characters long')) {
          setPasswordError('Password must be more than 6 characters');
        }
       
      }

      console.error('Signup failed:', error.message);
    } else {
      // Handle other types of errors
      console.error('Signup failed:', error.message);
    }
  }
};


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto sm:pr-5 pr-[38px] pl-[38px] pt-[38px] w-full">
        <div className="h-[1062px] sm:h-[910px] md:h-[918px] max-w-[1401px] mt-[11px] mx-auto md:px-5 relative w-full">
          <div className="bg-white-A700 h-[862px] mx-auto w-[97%]"></div>
           <form onSubmit={handleFormSubmit} >
           <div className="absolute h-[1062px] sm:h-[899px] md:h-[907px] inset-[0] justify-center m-auto w-full">
            <div className="bg-gradient10  md:h-[819px] h-[862px] mx-auto pb-[42px] w-[97%] md:w-full">
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
            <div className="absolute h-[1062px] sm:h-[899px] md:h-[907px] inset-[0] justify-center m-auto pb-[163px] w-full">
              <Img
                className="h-[899px] mx-auto object-cover"
                src="images/img_loginbannerlinessvg.png"
                alt="loginbannerline"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[114px] top-[8%] w-[97%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start py-6 w-full">
                    <div className="flex flex-col getCon items-center justify-start md:px-10 sm:px-5 px-[161px] w-full">
                      <div className="h-[734px] md:h-[859px] relative w-[97%] md:w-full">
                        <div className="absolute bg-gradient11  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-[98%]">
                          <Img
                            className="h-[734px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-full"
                            src="images/img_pseudo_734x750.png"
                            alt="pseudo"
                          />
                        </div>
                        <div className=" gen-container absolute flex flex-col md:gap-10 gap-[60px] h-max inset-y-[0] justify-start my-auto right-[0] w-[94%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] w-[88%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                                size="txtMontserratSemiBold52WhiteA700"
                              >
                                Get started,
                              </Text>
                            </div>
                            <Text
                              className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                              size="txtMontserratRegular24Gray50"
                            >
                              Sign up to get started finding your partner!
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className=" name-wrap md:gap-5 block w-[91%]">
                              <div className="h-[52px] mb-[4%] w-full  pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[29%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Username
                                  </Text>
                                  <input type="text" autoComplete="off" name="username" onChange={handleInputChange} className="input-sign" />
                                  {usernameError && <p className="error-text">{usernameError}</p>}
                                </div>
                              </div>
                              <div className="h-[52px] w-full mb-[4%] pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[27%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Email
                                  </Text>
                                  <input type="text" autoComplete="off" name="email" onChange={handleInputChange} className="input-sign" />
                                {emailError && <p className="error-text">{emailError}</p>}
                                </div>
                              </div>
                              <div className="h-[52px]  w-full pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[27%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Password
                                  </Text>
                                  <input type="password" autoComplete="off" name="password" onChange={handleInputChange} className="input-sign" />
                                 {passwordError && <p className="error-text">{passwordError}</p>}
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-centeer justify-space-between mt-5 pr-0.5 py-0.5 w-[88%] md:w-full">
                              <input type="checkbox" autoComplete="off" className="border-2 check border-gray-500 mr-2 border-solid h-4 md:mt-0 mt-[3px] rounded-sm w-4"></input>
                              <Text
                                className="md:ml-[0] md:mt-0  text-base text-gray-200_02"
                                size="txtMontserratRegular16Gray20002"
                              >
                                By creating your account, you agree to our{" "}
                              </Text>
                              <div className="md:h-[21px] h-fit md:ml-[0] ml-[3px] relative w-[17%] md:w-full">
                                <Text
                                  className="inset-x-[0] mx-auto text-base text-white-A700 top-[0] w-max"
                                  size="txtMontserratRegular16WhiteA700"
                                >
                                  Terms of use
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[3px] md:mt-0 text-base text-gray-200_02"
                                size="txtMontserratRegular16Gray20002"
                              >
                                {" "}
                                &{" "}
                              </Text>
                              <div className="h-[22px] md:ml-[0] ml-[3px] md:mt-0  relative w-[18%] md:w-full">
                                <a
                                  href="javascript:"
                                  className="h-max inset-[0] justify-center m-auto text-base text-white-A700 w-max"
                                >
                                  <Text size="txtMontserratRegular16WhiteA700">
                                    Privacy Policy
                                  </Text>
                                </a>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[50px] w-[87%] md:w-full">
                            <div>
            {/* Display error messages */}
            {/* {errors.username && <p className="error-text">{errors.username}</p>}
            {errors.email && <p className="error-text">{errors.email}</p>}
            {errors.password && <p className="error-text">{errors.password}</p>}
           */}</div>
                              <Button
                                className="capitalize cursor-pointer min-w-[150px] rounded-[30px] pod text-center text-xl tracking-[0.50px]"
                                color="orange_600_90"
                                size="2xl"
                                variant="fill"
                                // onClick={handleValidation}
                                onClick={handleFormSubmit}
                              >
                                Register
                              </Button>
                              <div className="flex sm:flex-col flex-row font-roboto mr7 gap-[5px] items-start justify-center">
                                <a
                                  href="javascript:"
                                  className="text-sm text-white-A700"
                                >
                                  <Text size="txtRobotoRegular14">
                                    Already have an account?
                                  </Text>
                                </a>
                                <a className="sm:mt-0 text-indigo-200 text-sm">
                                  <Text
                                    className="common-pointer"
                                    size="txtRobotoRegular14Indigo200"
                                    onClick={() => navigate("/login")}
                                  >
                                    Log In
                                  </Text>
                                </a>
                              </div>
                            </div>
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
                        <button onClick={login}>
                        <Text size="txtMontserratMedium18Bluegray90001">
                          Login
                        </Text>
                        </button>
                      </a>
                    </div>
                    <div className="flex flex-col items-center justify-start px-2.5 w-[55%]">
                      <Button
                        className="cursor-pointer min-w-[110px] rounded-[23px] text-center text-lg tracking-[0.50px]"
                        onClick={handleFormSubmit}
                        color="white_A700"
                        size="xl"
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
           </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;



