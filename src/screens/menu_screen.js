import React, { useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';

const MenuScreen = () => {
        // Define categories and their items
        const categories = {
            snacks: ["Chips", "Nachos", "Cookies"],
            indian: ["Biryani", "Paneer Tikka", "Samosa"],
            chinese: ["Dim Sum", "Kung Pao Chicken", "Fried Rice"]
        };
    // State to manage open/close of different dropdowns
    const [openDropdown, setOpenDropdown] = useState(Object.keys(categories)[0]);

    // Initialize item counts for each category
    const initialCounts = {
        snacks: Array(3).fill(0),
        indian: Array(3).fill(0),
        chinese: Array(3).fill(0)
    };
    const [counts, setCounts] = useState(initialCounts);

    // Toggle dropdowns
    const toggleDropdown = (category) => {
        setOpenDropdown(openDropdown === category ? null : category);
    };

    // Handle count change for each category
    const handleCountChange = (category, index, delta) => {
        const newCounts = { ...counts };
        newCounts[category][index] = Math.max(0, newCounts[category][index] + delta);
        setCounts(newCounts);
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="w-full fixed top-0 pt-2">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="mt-0 object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 font-black">Top Movers</h1>
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
                                    <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}.00
                                    </span>
                                    {index % 2 === 0
                                        ? <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" stroke-width="2" />
                                        </svg>

                                        : <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 12.5L2 1H17L9.5 12.5Z" fill="#D82222" stroke="#D82222" stroke-width="2" />
                                        </svg>

                                    }
                                    {/* Vertical bar separator */}
                                    {/* Another random number */}
                                    <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}.00
                                    </span>
                                    <span className="mx-2 text-gray-500">|</span>

                                </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-xl mt-4 mb-2 first-line:font-black">Menu Items</h1>

                    {Object.keys(categories).map((category) => (
                        <div key={category} className="w-full mt-2">
                            <div className="w-full h-8 bg-gray-200 font-black flex justify-start items-center px-2 cursor-pointer" onClick={() => toggleDropdown(category)}>
                                {category.charAt(0).toUpperCase() + category.slice(1)} Items
                                <svg className={`w-6 h-6 ml-2 transform ${openDropdown === category ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {openDropdown === category && (
                                <div className="">
                                    {categories[category].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center p-2 hover:bg-slate-100">
                                            <div className="flex justify-start">
                                                <span className="text-black mr-2">{item}</span>
                                                <div className="mr-2 text-green-800">
                                                    {Math.floor(Math.random() * 100)}.00

                                                </div>
                                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" stroke-width="2" />
                                                </svg>
                                                <div className="ml-2 text-green-800">
                                                    {Math.floor(Math.random() * 100)}.00

                                                </div>                                            </div>

                                            <div className="flex items-center border border-red-800 rounded-md px-2">
                                                <button className="focus:outline-none" onClick={() => handleCountChange(category, index, -1)}>➖</button>
                                                <span className="mx-2">{counts[category][index]}</span>
                                                <button className="focus:outline-none" onClick={() => handleCountChange(category, index, 1)}>➕</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <BottomNavbar />

        </div>
    );
};

export default MenuScreen;
