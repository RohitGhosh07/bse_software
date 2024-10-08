import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../components/Snackbar ';

const MainScreen = () => {
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();
    const initialOtp = Array(6).fill('');
    const [counter, setCounter] = useState(11); // Set the initial counter to 11 seconds
    const [isOtpMode, setIsOtpMode] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [id, setId] = useState(""); // Initialize id state with an empty string
    // const otpInputRefs = useRef(new Array(6).fill(null));
    const otpInputRefs = useRef([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginMode, setLoginMode] = useState(''); // '' for no selection, 'member' or 'guest'
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        setIsLoading(true);

        fetch(`${process.env.REACT_APP_BACKEND_MAIN_URI}/customers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: userName, phone: phoneNumber }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Failed to post phone number:', response.status);
                    // Handle error, such as showing an error message
                }
            })
            .then(data => {
                if (data) {
                    localStorage.setItem('phone', phoneNumber);
                    localStorage.setItem('customer_id', data.id);

                    setId(data.id);
                    console.log('the id is:', data.id);
                    setIsOtpMode(true);
                    setCounter(11); // Reset counter when moving to OTP mode
                    showSnackbar('OTP has been sent');
                }
            })
            .catch(error => {
                console.error('Error posting phone number:', error);
                // Handle error, such as showing an error message
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleVerifyOTP = () => {
        setIsLoading(true);
    
        const enteredOTP = otp.join('');
        const idValue = id;
    
        fetch(`${process.env.REACT_APP_BACKEND_MAIN_URI}/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: idValue, otp: enteredOTP }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse the JSON from the response
                } else {
                    throw new Error('OTP verification failed');
                }
            })
            .then(data => {
                console.log('OTP verification successful');
                localStorage.setItem('session_id', data.session_id); // Store the session_id in local storage
                console.log('Session ID:', data.session_id); // Log the session_id
                navigate('/menu'); // Navigate to the "menu" screen on success
            })
            .catch(error => {
                console.error('Error verifying OTP:', error);
                showSnackbar('Invalid OTP');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    

    useEffect(() => {
        let interval = null;
        if (isOtpMode && counter > 0) {
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isOtpMode, counter]);


    const handleOtpChange = (target, index) => {
        // const value = element.value;
        const newOtp = [...otp];
        newOtp[index] = target.value.slice(0, 1); // Take only the first character

        // newOtp[index] = value;
        setOtp(newOtp);

        if (index < 5 && target.value && otpInputRefs.current[index + 1]) {
            otpInputRefs.current[index + 1].focus();
        }
        if (index > 0 && !target.value && otpInputRefs.current[index - 1]) {
            otpInputRefs.current[index - 1].focus();
        }

    };
    useEffect(() => {
        if (otpInputRefs.current[0]) {
            otpInputRefs.current[0].focus();
        }
    }, []);

    // const handleButtonClick = () => {
    //     if (!isOtpMode) {
    //         setIsOtpMode(true);
    //         setCounter(11); // Reset counter when moving to OTP mode
    //         showSnackbar("OTP has been sent");

    //     } else {
    //         navigate('/menu'); // Navigate to the "another" screen on success
    //         // showSnackbar("Happy TRADING!!");

    //     }
    // };

    const resendOtp = () => {
        console.log("Resend OTP clicked"); // Implement resend OTP functionality
        setCounter(11); // Reset the countdown
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Header section fixed at the top */}
            <div className="w-full fixed top-0 pt-4 bg-white">
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-black">Top Movers</h1>
                    <div className="w-full h-8 bg-gray-200 mt-2 overflow-hidden relative">
                        <div className="ticker py-1 whitespace-nowrap">
                            {/* Repeatedly list items for a seamless ticker effect */}
                            {Array.from({ length: 80 }).map((_, index) => (
                                <div key={index} className="inline-flex items-center mr-0">
                                    {/* Food name in bold and black */}
                                    <span className="font-black text-black mr-2">
                                        Pizza
                                    </span>
                                    {/* Vertical bar separator */}
                                    {/* Percentage and color-coded arrow */}
                                    <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-600'}`}>
                                        {Math.floor(Math.random() * 100)}.00
                                    </span>
                                    {index % 2 === 0
                                        ? <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                        </svg>

                                        : <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 12.5L2 1H17L9.5 12.5Z" fill="#D82222" stroke="#D82222" strokeWidth="2" />
                                        </svg>
                                    }
                                    {/* Vertical bar separator */}
                                    {/* Another random number */}
                                    <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-600'}`}>
                                        {Math.floor(Math.random() * 100)}.00
                                    </span>
                                    <span className="mx-2 text-gray-500">|</span>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-8 bg-gray-200 mt-4 overflow-hidden relative">
                        <div className="ticker py-1 whitespace-nowrap">
                            {/* Repeatedly list items for a seamless ticker effect */}
                            {Array.from({ length: 80 }).map((_, index) => (
                                <div key={index} className="inline-flex items-center mr-0">
                                    {/* Food name in bold and black */}
                                    <span className="font-bold text-black mr-2">
                                        Pizza
                                    </span>
                                    {/* Vertical bar separator */}
                                    {/* Percentage and color-coded arrow */}
                                    <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-600'}`}>
                                        {Math.floor(Math.random() * 100)}.00
                                    </span>
                                    {index % 2 === 0
                                        ? <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                        </svg>

                                        : <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 12.5L2 1H17L9.5 12.5Z" fill="#D82222" stroke="#D82222" strokeWidth="2" />
                                        </svg>
                                    }
                                    {/* Vertical bar separator */}
                                    {/* Another random number */}
                                    <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-600'}`}>
                                        {Math.floor(Math.random() * 100)}.00
                                    </span>
                                    <span className="mx-2 text-gray-500">|</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full pt-0">
                {/* Image in the center with fixed square size */}
                <img src="/assets/icons/restraurenticon.svg"
                    alt="Center Image"
                    className="mt-0 w-179 h-135 object-cover" />

                <div className="px-10">
                    {loginMode === '' ? (
                        <div className="mt-10">
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => setLoginMode('member')}
                                    className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-12 rounded-xl w-full max-w-md border-2 border-red-800 "
                                >
                                    Member Login
                                </button>
                                <button
                                    onClick={() => setLoginMode('guest')}
                                    className="bg-white hover:bg-red-200 text-black font-bold py-2 px-12 rounded-xl w-full max-w-md border-2 border-red-800 "
                                >
                                    Guest Login
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {loginMode === 'guest' && !isOtpMode && (
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-8 px-10 py-2 border border-black rounded-md shadow-sm w-full max-w-md text-center"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            )}

                            {!isOtpMode ? (
                                <input
                                    type="number"
                                    placeholder="Phone number"
                                    className="mt-4 px-10 py-2 border border-black rounded-md shadow-sm w-full max-w-md text-center"
                                    maxLength="10"
                                    pattern="\d*"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    onInput={(e) => e.target.value = e.target.value.slice(0, 10)} // Ensures the input is restricted to 10 digits
                                />
                            ) : (
                                <div className="flex justify-center space-x-2 mt-8">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            className="w-10 h-10 text-center text-xl border border-black rounded-md"
                                            maxLength="1"
                                            value={digit}
                                            onChange={e => handleOtpChange(e.target, index)}
                                            ref={el => otpInputRefs.current[index] = el}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="px-12">
                                <button
                                    onClick={isOtpMode ? handleVerifyOTP : handleSubmit}
                                    className="mt-4 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-12 rounded-xl w-full max-w-md"
                                >
                                    {isLoading ? (
                                        <div className="flex justify-center items-center">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                        </div>
                                    ) : (
                                        isOtpMode ? 'Verify OTP' : 'Get Started'
                                    )}
                                </button>

                                {isOtpMode && counter > 0 && (
                                    <p className="mt-2 text-sm flex justify-center text-gray-500">
                                        Resend OTP in {counter} sec
                                    </p>
                                )}
                                {isOtpMode && counter === 0 && (
                                    <div className="flex justify-center text-sm">
                                        <button onClick={handleSubmit} className="flex justify-center mt-2 text-sm underline text-blue-500">
                                            Resend
                                        </button>
                                        <span className="text-sm py-2">
                                            &nbsp;the OTP
                                        </span>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
}

export default MainScreen;
