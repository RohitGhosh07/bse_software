import React, { useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import SwipeableToggle from '../components/SwipeToConfirm';
import CountdownTimer from '../components/CountdownTimer';

const CartScreen = () => {
    const handleConfirmation = () => {
        console.log("Action Confirmed!");
        // Implement any follow-up action here
    };

    // Define categories and their items
    const categories = {
        snacks: ["Chips", "Nachos", "Cookies","Biryani", "Paneer Tikka", "Samosa"],
        // indian: ["Biryani", "Paneer Tikka", "Samosa"],
        // chinese: ["Dim Sum", "Kung Pao Chicken", "Fried Rice"]
    };

    // Initialize item counts for each category
    const initialCounts = {
        snacks: Array(3).fill(0),
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
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full fixed top-0 pt-2 bg-white z-50">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 font-black">Card Items</h1>
                </div>
                <div className="mt-16">
                    {Object.keys(categories).map(category => (
                        categories[category].map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-1 px-2 hover:bg-green-100">
                                <div className="flex items-center">
                                    <span className="text-black mr-2">{item}</span>

                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end">
                                        <div className="flex items-center border border-red-800 rounded-md px-2">
                                            <button className="focus:outline-none" onClick={() => handleCountChange(category, index, -1)}>➖</button>
                                            <span className="mx-2">{counts[category][index]}</span>
                                            <button className="focus:outline-none" onClick={() => handleCountChange(category, index, 1)}>➕</button>
                                        </div>
                                        <span className="ml-4">{Math.floor(Math.random() * 100)}.000</span>
                                    </div>
                                </div>


                            </div>
                        ))
                    ))}
                </div>
                <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '8px' }}></div>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>

                <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '8px' }}></div>
                <CountdownTimer />

                <div className="flex flex-col items-center justify-center py-12 ">
                    <SwipeableToggle onConfirm={handleConfirmation} />
                </div>
            </div>


            <BottomNavbar />
        </div>
    );
}

export default CartScreen;
