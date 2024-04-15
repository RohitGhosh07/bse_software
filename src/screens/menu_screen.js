import React, { useState } from 'react';

const MenuScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [counts, setCounts] = useState(Array(5).fill(0));  // Initial counts for each item

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handles increment and decrement of item counts
    const handleCountChange = (index, delta) => {
        const newCounts = [...counts];
        newCounts[index] = Math.max(1, newCounts[index] + delta);
        setCounts(newCounts);
    };

    // Example items
    const foodItems = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"].map((food, index) => ({
        name: food,
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100)
    }));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Header section fixed at the top */}
            <div className="w-full fixed top-0 pt-2 bg-white">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png"
                        alt="Center Image"
                        className="mt-0 object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 font-black">Top Movers</h1>
                    <div className="w-full h-8 bg-gray-200 mt-4 overflow-hidden relative">
                        {/* Repeated ticker component for smooth scrolling effect */}
                        <div className="ticker py-1 whitespace-nowrap">
                            {Array.from({ length: 80 }).map((_, index) => (
                                <div key={index} className="inline-flex items-center mr-0">
                                    <span className="font-bold text-black mr-2">
                                        Pizza
                                    </span>
                                    <span className={`font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}
                                    </span>
                                    {index % 2 === 0
                                        ? <svg className="w-4 h-4 ml-1 mr-1 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l5 9H7z" /></svg>
                                        : <svg className="w-4 h-4 ml-1 mr-1 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22l-5-9h10z" /></svg>
                                    }
                                    <span className={`font-bold ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {Math.floor(Math.random() * 100)}
                                    </span>
                                    <span className="mx-2 text-gray-500">|</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-xl mt-4 font-black">Menu Items</h1>
                    <div className="w-full mt-2">
                        <div className="w-full h-8 bg-gray-200 flex justify-start items-center px-4 cursor-pointer" onClick={toggleDropdown}>
                            Trending Items
                            <svg className={`w-6 h-6 ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {isOpen && (
                            <div className="bg-white border border-gray-200 mt-1">
                                {foodItems.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center p-2 hover:bg-green-100">
                                        <div className="flex-grow flex items-center">
                                            <span className="font-bold text-black mr-2">{item.name}</span>
                                            <span className="mx-2">{item.value1}</span>
                                            <svg className="w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l5 9H7z" /></svg>
                                            <span className="mx-2 mr-12">{item.value2}</span>
                                        </div>
                                        <div className="flex items-center border border-red-800 rounded-md px-2">
                                            <button className="focus:outline-none" onClick={() => handleCountChange(index, -1)}>➖</button>
                                            <span className="mx-2">{counts[index]}</span>
                                            <button className="focus:outline-none" onClick={() => handleCountChange(index, 1)}>➕</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuScreen;
