import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
    const navigate = useNavigate();

    const [isOtpMode, setIsOtpMode] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const otpInputRefs = useRef(new Array(6).fill(null));
    const [counter, setCounter] = useState(11); // Set the initial counter to 11 seconds

    useEffect(() => {
        let interval = null;
        if (isOtpMode && counter > 0) {
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
        } else if (counter === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isOtpMode, counter]);

    const handleOtpChange = (element, index) => {
        const value = element.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value.length === 1 && index < 5) {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleButtonClick = () => {
        if (!isOtpMode) {
            setIsOtpMode(true);
            setCounter(11); // Reset counter when moving to OTP mode
        } else {
            navigate('/menu'); // Navigate to the "another" screen on success
        }
    };

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
                                    <span className="font-bold text-black mr-2">
                                        Pizza
                                    </span>
                                    {/* Vertical bar separator */}
                                    {/* Percentage and color-coded arrow */}
                                    <span className={`font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}
                                    </span>
                                    {index % 2 === 0
                                        ? <svg className="w-4 h-4 ml-1 mr-1 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l5 9H7z" /></svg>  // Arrow up
                                        : <svg className="w-4 h-4 ml-1 mr-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22l-5-9h10z" /></svg> // Arrow down
                                    }
                                    {/* Vertical bar separator */}
                                    {/* Another random number */}
                                    <span className={`font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}
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
                                    <span className={`font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}
                                    </span>
                                    {index % 2 === 0
                                        ? <svg className="w-4 h-4 ml-1 mr-1 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l5 9H7z" /></svg>  // Arrow up
                                        : <svg className="w-4 h-4 ml-1 mr-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22l-5-9h10z" /></svg> // Arrow down
                                    }
                                    {/* Vertical bar separator */}
                                    {/* Another random number */}
                                    <span className={`font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}
                                    </span>
                                    <span className="mx-2 text-gray-500">|</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Center content with padding top to account for fixed header */}
            <div className="flex flex-col items-center justify-center w-full pt-24">
                {/* Image in the center with fixed square size */}
                <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png"
                    alt="Center Image"
                    className="mt-0 w-175 h-135 object-cover" />

                <div className="px-10">
                    {!isOtpMode ? (
                        <input
                            type="text"
                            placeholder="Phone number"
                            className="mt-8 px-10 py-2 border border-black rounded-md shadow-sm w-full max-w-md text-center"
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
                            onClick={handleButtonClick}
                            className="mt-4 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-12 rounded-xl w-full max-w-md">
                            {isOtpMode ? "Verify OTP" : "Get Started"}
                        </button>
                        {isOtpMode && counter > 0 && (
                            <p className="mt-2 text-sm flex justify-center text-gray-500">
                                Resend OTP in {counter} sec
                            </p>
                        )}
                        {isOtpMode && counter === 0 && (
                            <button onClick={resendOtp} className="flex justify-center mt-2 text-sm underline text-blue-500">
                                Resend the OTP
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
