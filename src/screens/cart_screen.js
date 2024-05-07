import React, { useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import SwipeableToggle from '../components/SwipeToConfirm';
import CountdownTimer from '../components/CountdownTimer';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../components/Snackbar ';
import { Checkmark } from 'react-checkmark';
import './CartScreen.css'; // Import CSS file for styling

const CartScreen = () => {
    const navigate = useNavigate();
    const [showCheckmark, setShowCheckmark] = useState(false); // State to control the visibility of the checkmark

    const handleConfirmation = () => {
        console.log("Action Confirmed!");
        setShowCheckmark(true); // Show the checkmark animation

        setTimeout(() => {
            setShowCheckmark(false); // Hide the checkmark animation after 2 seconds
            navigate('/orders'); // Navigate to the "another" screen on success.

        }, 2100);
    };


    // Define categories and their items
    const categories = {
        snacks: ["Chips", "Nachos", "Cookies", "Dim Sum", "Kung Pao Chicken", "Fried Rice"],
        indian: ["Biryani", "Paneer Tikka", "Samosa"],
        chinese: ["Dim Sum", "Kung Pao Chicken", "Fried Rice"]
    };

    // Initialize item counts for each category
    const initialCounts = {
        snacks: Array(6).fill(0),
        indian: Array(3).fill(0),
        chinese: Array(3).fill(0)
    };
    const [counts, setCounts] = useState(initialCounts);

    // Handle count change for each category
    const handleCountChange = (category, index, delta) => {
        const newCounts = { ...counts };
        newCounts[category][index] = Math.max(0, newCounts[category][index] + delta);
        setCounts(newCounts);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-full fixed top-0 pt-2 bg-white z-50">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 mb-2  font-black">Cart Items</h1>
                </div>
            </div>

            {/* Main content area that scrolls */}
            <div className="flex-1 overflow-auto pt-32 pb-20">  {/* padding top and bottom to avoid overlap */}
                {Object.keys(categories).map(category => (
                    categories[category].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-1 px-2 hover:bg-slate-100">
                            <div className="flex items-center">
                                <span className="text-black mr-2">{item}</span>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center border border-red-800 rounded-md px-2 mx-2">
                                        <button className="focus:outline-none" onClick={() => handleCountChange(category, index, -1)}>➖</button>
                                        <span className="mx-2" style={{ minWidth: "2rem", textAlign: "center" }}>{counts[category][index]}</span>
                                        <button className="focus:outline-none" onClick={() => handleCountChange(category, index, 1)}>➕</button>
                                    </div>

                                    <span style={{ width: '50px', textAlign: 'right' }}>{Math.floor(Math.random() * 90) + 10}
                                        .000</span>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
                <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '8px' }}></div>
                <a href="/menu">

                    <div className="flex justify-between items-center py-2 px-4 mt-1 bg-white">
                        <span className="text-gray-800 text-xs font-medium">Add more items</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer"
                        >
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>

                    </div>
                </a>
                <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '8px' }}></div>
                <CountdownTimer />
                <div className="flex flex-col items-center justify-center py-12">
                    <SwipeableToggle onConfirm={handleConfirmation} />
                    {/* Conditional rendering of the checkmark animation */}
                    {showCheckmark && (
                        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75">
                            <div className="text-center">
                                <div className="text-green-500 mb-4">
                                    <Checkmark size="128px" color="green" />
                                </div>
                                <p className="text-white text-lg font-semibold">Order Placed</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Fixed Bottom Navbar */}
            <div className="w-full fixed bottom-0 left-0 right-0 z-50">
                <BottomNavbar />
            </div>
        </div>
    );
}

export default CartScreen;
