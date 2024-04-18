import React, { useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import SwipeableToggle from '../components/SwipeToConfirm';
import CountdownTimer from '../components/CountdownTimer';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../components/Snackbar ';

const CartScreen = () => {
    const navigate = useNavigate();
    // const [showSnackbar, setShowSnackbar] = useState(false);
    const { showSnackbar } = useSnackbar();

    const handleConfirmation = () => {
        console.log("Action Confirmed!");

        showSnackbar("Your Order is Placed!");
        navigate('/orders'); // Navigate to the "another" screen on success.

        // setShowSnackbar(true); // Show Snackbar
        setTimeout(() => {
        }, 2000);
    };
    // const Snackbar = ({ open, message, onClose }) => {
    //     if (!open) return null;

    //     setTimeout(() => {
    //         onClose();
    //     }, 3000); // Snackbar will close after 3000 ms

    //     return (
    //         <div style={{
    //             position: 'fixed',
    //             bottom: '20px',
    //             left: '50%',
    //             transform: 'translateX(-50%)',
    //             backgroundColor: 'black',
    //             color: 'white',
    //             padding: '8px 20px',
    //             borderRadius: '4px',
    //             zIndex: 1000
    //         }}>
    //             {message}
    //         </div>
    //     );
    // };

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
                    <h1 className="text-xl mt-4 mb-2  font-black">Card Items</h1>
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
                                    <div className="flex items-center border border-red-800 rounded-md px-2 mr-3">
                                        <button className="focus:outline-none" onClick={() => handleCountChange(category, index, -1)}>➖</button>
                                        <span className="mx-2">{counts[category][index]}</span>
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
                <div className="flex flex-col items-center justify-center py-12">
                    <SwipeableToggle onConfirm={handleConfirmation} />
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
