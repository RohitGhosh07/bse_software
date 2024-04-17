import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [seconds, setSeconds] = useState(30); // Start the countdown from 30 seconds

    useEffect(() => {
        // Check if the countdown is not already finished
        if (seconds > 0) {
            // Set a timeout to update the countdown every second
            const timerId = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            // Clear the timeout if the component unmounts
            return () => clearTimeout(timerId);
        }
    }, [seconds]); // Effect dependencies include 'seconds' to ensure updates

    return (
        <>
            <div className="flex justify-center items-center w-full mt-4">
                <div className="text-center text-xs font-black">
                    <span className="text-red-700 font-bold">{seconds}</span>
                    <span className="text-black"> seconds remaining</span>
                </div>
            </div>
            <div className="flex justify-center items-center w-full  text-black text-xs"> before price updates</div></>

    );
};

export default CountdownTimer;
