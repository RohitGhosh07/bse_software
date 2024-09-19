// import React, { useState } from 'react';
// import BottomNavbar from '../components/bottomNavbar';

// const MenuScreen = () => {
//     // Define categories and their items
//     const categories = {
//         snacks: ["Chips", "Chesse Nachos", "Cookies"],
//         indian: ["Biryani", "Paneer Tikka", "Samosa"],
//         chinese: ["Dim Sum", "Kung Pao Chicken", "Fried Rice"]
//     };
//     // State to manage open/close of different dropdowns
//     const [openDropdown, setOpenDropdown] = useState(Object.keys(categories)[0]);

//     // Initialize item counts for each category
//     const initialCounts = {
//         snacks: Array(3).fill(0),
//         indian: Array(3).fill(0),
//         chinese: Array(3).fill(0)
//     };
//     const [counts, setCounts] = useState(initialCounts);

//     // Toggle dropdowns
//     const toggleDropdown = (category) => {
//         setOpenDropdown(openDropdown === category ? null : category);
//     };

//     // Handle count change for each category
//     const handleCountChange = (category, index, delta) => {
//         const newCounts = { ...counts };
//         newCounts[category][index] = Math.max(0, newCounts[category][index] + delta);
//         setCounts(newCounts);
//     };



//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen ">
//             <div className="w-full fixed top-0 pt-2">
//                 <div className="flex flex-col items-center">
//                     <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="mt-0 object-cover w-20 h-auto" />
//                     <h1 className="text-xl mt-4 font-black">Top Movers</h1>
//                     <div className="w-full h-8 bg-gray-200 mt-4 overflow-hidden relative">
//                         <div className="ticker py-1 whitespace-nowrap">
//                             {/* Repeatedly list items for a seamless ticker effect */}
//                             {Array.from({ length: 80 }).map((_, index) => (
//                                 <div key={index} className="inline-flex items-center mr-0">
//                                     {/* Food name in bold and black */}
//                                     <span className="font-bold text-black mr-2">
//                                         Pizza
//                                     </span>
//                                     {/* Vertical bar separator */}
//                                     {/* Percentage and color-coded arrow */}
//                                     <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-500'}`}>
//                                         {Math.floor(Math.random() * 100)}.00
//                                     </span>
//                                     {index % 2 === 0
//                                         ? <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
//                                         </svg>

//                                         : <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M9.5 12.5L2 1H17L9.5 12.5Z" fill="#D82222" stroke="#D82222" strokeWidth="2" />
//                                         </svg>

//                                     }
//                                     {/* Vertical bar separator */}
//                                     {/* Another random number */}
//                                     <span className={`px-1 font-bold ${index % 2 === 0 ? 'text-green-800' : 'text-red-500'}`}>
//                                         {Math.floor(Math.random() * 100)}.00
//                                     </span>
//                                     <span className="mx-2 text-gray-500">|</span>

//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <h1 className="text-xl mt-4 mb-2 first-line:font-black">Menu Items</h1>

//                     {Object.keys(categories).map((category) => (
//                         <div key={category} className="w-full mt-2">
//                             <div className="w-full h-8 bg-gray-200 font-black flex justify-start items-center px-2 cursor-pointer" onClick={() => toggleDropdown(category)}>
//                                 {category.charAt(0).toUpperCase() + category.slice(1)} Items
//                                 <svg className={`w-6 h-6 ml-2 transform ${openDropdown === category ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                             {openDropdown === category && (
//                                 <div className="">
//                                     {categories[category].map((item, index) => (
//                                         <div key={index} className="flex justify-between items-center p-2 hover:bg-slate-100">
//                                             {/* <div className="flex justify-start">
//                                                 <span className="text-black mr-0" style={{ width: "100px" }}>
//                                                 <span className="text-black mr-0">
//                                                     {item.length > 10 ? `${item.substring(0, 10)}...` : item}
//                                                     {item}
//                                                 </span>
//                                                 <div className="flex items-center">
//                                                     <div className="text-green-800 mr-1 " style={{ width: "40px" }}>
//                                                         {Math.floor(Math.random() * 100)}.00
//                                                     </div>
//                                                     <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
//                                                     </svg>
//                                                     <div className="ml-1 text-green-800" style={{ width: "45px" }}>
//                                                         {Math.floor(Math.random() * 100)}.00
//                                                     </div>
//                                                 </div>
//                                             </div> */}
//                                             <div>
//                                                 <div className="text-md font-medium">{item}</div>
//                                                 <div className="flex items-center">
//                                                     <div className="text-green-800 mr-1 " style={{ width: "40px" }}>
//                                                         {Math.floor(Math.random() * 100)}.00
//                                                     </div>
//                                                     <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
//                                                     </svg>
//                                                     <div className="ml-1 text-green-800" style={{ width: "45px" }}>
//                                                         {Math.floor(Math.random() * 100)}.00
//                                                     </div>
//                                                 </div>                                            </div>
// <div className="flex items-center">
//     <div className="flex justify-end items-center border border-red-800 rounded-md px-2">
//         <button className="focus:outline-none" onClick={() => handleCountChange(category, index, -1)}>➖</button>
//         <span className="mx-2" style={{ minWidth: "2rem", textAlign: "center" }}>{counts[category][index]}</span>
//         <button className="focus:outline-none" onClick={() => handleCountChange(category, index, 1)}>➕</button>
//     </div>
//     <div style={{ height: "1px", backgroundColor: "rgba(0, 0, 0, 0.12)" }} />
// </div>

//                                         </div>

//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <BottomNavbar />

//         </div>
//     );
// };

// export default MenuScreen;

import React, { useEffect, useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import BrandsSelection from '../components/BrandsSelection';
import FetchDisplayName from '../components/FetchDisplayName ';

const MenuScreen = () => {
    const [categories, setCategories] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [items, setItems] = useState({});
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(true); // State to track loading status
    const [selectedBrandId, setSelectedBrandId] = useState(null);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                // Get the session_id from local storage
                const customer_id = localStorage.getItem('customer_id');

                const response = await fetch(`http://localhost:5000/wallets?customer_id=${customer_id}`);
                const data = await response.json();
                
                // console.log('Data:', data);
                
                // Extract the current_amount from the first wallet in the array
                if (data.wallets && data.wallets.length > 0) {
                    const currentAmount = data.wallets[0].current_amount;
                    setBalance(currentAmount);
                    // console.log('Current balance:', currentAmount);
                } else {
                    console.log('No wallets found.');
                    setBalance(0); // Or handle the case where no wallets are found
                }
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        const intervalId = setInterval(fetchBalance, 1000); // Call fetchBalance every 3 seconds

        return () => {
            clearInterval(intervalId); // Clean up the interval when the component unmounts
        };
    }, []);
    

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data

        // Fetch categories from the API
        fetch(process.env.REACT_APP_BACKEND_MAIN_URI + '/categories')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                return response.json();
            })
            .then(data => {
                setCategories(data.categories);

                // Initialize item counts for each category
                const initialCounts = {};
                data.categories.forEach(category => {
                    initialCounts[category.item_category_name] = Array(category.active_slot_end - category.active_slot_start + 1).fill(0);
                });
                setCounts(initialCounts);

                // Fetch items for each category
                data.categories.forEach(category => {
                    fetchItemsByCategory(category.id);
                });
                setLoading(false); // Set loading to false after data is fetched

            })
            .catch(error => {
                setLoading(false); // Set loading to false after data is fetched

                console.error('Error fetching categories:', error);
            });
    }, []);

    // Toggle dropdowns
    const toggleDropdown = (category) => {
        setOpenDropdown(openDropdown === category ? null : category);
    };


    const handleCountChange = (category, item, delta) => {
        console.log('Called at menu');

        // Make a copy of the current counts
        const newCounts = { ...counts };
        const storedItemData = localStorage.getItem(`item_${item}_count`);

        // Retrieve the current count from the previous counts
        const currentCount = storedItemData ? JSON.parse(storedItemData).count : (newCounts[category] && newCounts[category][item]) || 0;
        console.log(`Current count for ${category} with ID ${item}:`, currentCount);

        // Calculate the new count after applying the delta
        const newCount = Math.max(0, isNaN(currentCount) ? 0 : currentCount + delta);
        console.log(`New count for ${category} with ID ${item}:`, newCount);

        // Update the counts for the specified category and item ID
        if (!newCounts[category]) {
            newCounts[category] = {};
        }
        newCounts[category][item] = newCount;

        // Store item ID and count in local storage
        const localStorageKey = `item_${item}_count`;
        const itemData = {
            id: item,
            count: newCount,
        };
        localStorage.setItem(localStorageKey, JSON.stringify(itemData));

        // Print the new count
        console.log(`Updated count for ${category} with ID ${item}:`, newCount);

        // Update state with the new counts
        setCounts(newCounts);
    };




    // Fetch items for a specific category
    const fetchItemsByCategory = (categoryId) => {
        fetch(process.env.REACT_APP_BACKEND_MAIN_URI + `/items?item_category_id=${categoryId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                return response.json();
            })
            .then(data => {
                setItems(prevItems => ({
                    ...prevItems,
                    [categoryId]: data.items // Store items in state using category ID as key
                }));
            })
            .catch(error => {
                console.error(`Error fetching items for category ${categoryId}:`, error);
            });
    };

    const handleBrandSelect = (id) => {
        setSelectedBrandId(id);
        console.log('Selected Brand ID:', id);
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full fixed top-0 pt-2 h-screen overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-between w-full px-4">
                        <div className="flex justify-center w-full">
                            <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="mt-0 object-cover w-20 h-auto" />
                        </div>
                        <div className="flex items-center absolute right-4">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1651 20.0599H18.0278C17.6254 20.0599 17.2977 19.7328 17.2977 19.3302V17.8418C17.2977 17.4394 17.6251 17.1118 18.0278 17.1118H22.1651C22.3229 17.1118 22.4505 17.2394 22.4505 17.3972V19.7742C22.4505 19.9323 22.3229 20.0599 22.1651 20.0599ZM18.0278 17.6829C17.9399 17.6829 17.8685 17.7542 17.8685 17.8421V19.3304C17.8685 19.4181 17.9399 19.4894 18.0278 19.4894H21.8797V17.6829H18.0278Z" fill="black" />
                                <path d="M22.1651 25.828H5.36299C4.347 25.828 3.52051 25.0015 3.52051 23.9855V11.9303C3.52051 11.7728 3.64836 11.6449 3.8059 11.6449C3.96343 11.6449 4.09129 11.7728 4.09129 11.9303V23.9855C4.09129 24.6867 4.66179 25.2572 5.36299 25.2572H21.8797V13.1866C21.8797 13.029 22.0073 12.9012 22.1651 12.9012C22.3229 12.9012 22.4505 13.029 22.4505 13.1866V25.5426C22.4505 25.7004 22.3229 25.828 22.1651 25.828Z" fill="black" />
                                <path d="M22.1651 13.472H5.06219C4.21201 13.472 3.52051 12.7805 3.52051 11.9304C3.52051 11.0802 4.21201 10.3887 5.06219 10.3887H9.69921C9.85675 10.3887 9.98461 10.5165 9.98461 10.6741C9.98461 10.8316 9.85675 10.9595 9.69921 10.9595H5.06219C4.52679 10.9595 4.09129 11.395 4.09129 11.9304C4.09129 12.4657 4.52679 12.9013 5.06219 12.9013H21.8797V10.9595H19.4858C19.328 10.9595 19.2004 10.8316 19.2004 10.6741C19.2004 10.5165 19.328 10.3887 19.4858 10.3887H22.1651C22.3229 10.3887 22.4505 10.5165 22.4505 10.6741V13.1866C22.4505 13.3445 22.3229 13.472 22.1651 13.472Z" fill="black" />
                                <path d="M22.1651 12.2157H5.35302C5.19548 12.2157 5.06763 12.0878 5.06763 11.9303C5.06763 11.7728 5.19548 11.6449 5.35302 11.6449H22.1651C22.3229 11.6449 22.4505 11.7728 22.4505 11.9303C22.4505 12.0878 22.3229 12.2157 22.1651 12.2157Z" fill="black" />
                                <path d="M20.1319 18.8716H18.84C18.6821 18.8716 18.5546 18.744 18.5546 18.5862C18.5546 18.4284 18.6821 18.3008 18.84 18.3008H20.1319C20.2897 18.3008 20.4173 18.4284 20.4173 18.5862C20.4173 18.744 20.2897 18.8716 20.1319 18.8716Z" fill="black" />
                                <path d="M8.2609 8.94649C6.89988 8.94649 5.79285 7.83918 5.79285 6.47843C5.79285 5.11769 6.89988 4.01038 8.2609 4.01038C9.62193 4.01038 10.729 5.11741 10.729 6.47843C10.729 7.83946 9.62165 8.94649 8.2609 8.94649ZM8.2609 4.58116C7.21466 4.58116 6.36363 5.43219 6.36363 6.47843C6.36363 7.52468 7.21466 8.37571 8.2609 8.37571C9.30715 8.37571 10.1582 7.52468 10.1582 6.47843C10.1582 5.43219 9.30686 4.58116 8.2609 4.58116Z" fill="black" />
                                <path d="M20.0335 12.216C19.9242 12.216 19.8203 12.1529 19.7727 12.047L17.695 7.40658L7.0103 12.1909C6.86646 12.2554 6.69751 12.1909 6.6333 12.047C6.56909 11.9032 6.6333 11.7342 6.77714 11.67L17.7227 6.76902C17.7912 6.7382 17.8703 6.73591 17.941 6.76274C18.0118 6.78985 18.0689 6.84379 18.1 6.91285L20.2944 11.8139C20.3589 11.9577 20.2944 12.1267 20.1503 12.1909C20.1123 12.2077 20.0723 12.216 20.0335 12.216Z" fill="black" />
                                <path d="M10.3405 12.216C10.2315 12.216 10.1273 12.1529 10.08 12.047C10.0155 11.9032 10.08 11.7342 10.2238 11.67L17.0121 8.63033C17.1559 8.56554 17.3249 8.63061 17.3891 8.77416L18.7504 11.8139C18.8149 11.9577 18.7504 12.1266 18.6066 12.1909C18.4613 12.2554 18.2935 12.1909 18.2293 12.047L16.985 9.26789L10.4572 12.1909C10.4193 12.2077 10.3796 12.216 10.3405 12.216Z" fill="black" />
                                <path d="M14.449 5.07894C13.088 5.07894 11.981 3.97162 11.981 2.61088C11.981 1.25014 13.088 0.142822 14.449 0.142822C15.81 0.142822 16.9168 1.24985 16.9168 2.61088C16.9168 3.97191 15.8098 5.07894 14.449 5.07894ZM14.449 0.713604C13.4028 0.713604 12.5517 1.56464 12.5517 2.61088C12.5517 3.65712 13.4028 4.50816 14.449 4.50816C15.495 4.50816 16.346 3.65712 16.346 2.61088C16.346 1.56464 15.495 0.713604 14.449 0.713604Z" fill="black" />
                            </svg>

                            <span className="ml-2 text-lg font-semibold">₹{balance}</span>
                        </div>
                    </div>

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
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                        </svg>
                                        : <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 12.5L2 1H17L9.5 12.5Z" fill="#D82222" stroke="#D82222" strokeWidth="2" />
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
                    <h1 className="text-xl mt-4 font-black">Select from brands</h1>
                    <div className="container mx-auto ">
                        <BrandsSelection onBrandSelect={handleBrandSelect} />
                    </div>
                    <h1 className="text-xl mt-0 mb-2 first-line:font-black">Menu Items</h1>
                    <FetchDisplayName
                        selectedId={selectedBrandId}
                        apiUrl="http://localhost:5000/brands"
                        placeholder="Showing For"
                    />

                    {loading ? (
                        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="Loading" className="object-cover w-20 h-auto" />
                        </div>
                    ) : (
                        categories && categories.map(category => (
                            <div key={category.id} className="w-full mt-2">
                                <div className="w-full h-8 bg-gray-200 font-black flex justify-start items-center px-2 cursor-pointer" onClick={() => toggleDropdown(category.item_category_name)}>
                                    {category.item_category_name.charAt(0).toUpperCase() + category.item_category_name.slice(1)} Items
                                    <svg className={`w-6 h-6 ml-2 transform ${openDropdown === category.item_category_name ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {openDropdown === category.item_category_name && (
                                    <div className="mx-2">
                                        {/* Render items dynamically */}
                                        {items[category.id] && items[category.id]
                                            .filter(item => selectedBrandId === null || item.brand_id === selectedBrandId)
                                            .map((item, index) => (
                                                <div key={index}>
                                                    <div className="flex justify-between items-center p-2 hover:bg-slate-100 relative">
                                                        <div>
                                                            <div className="text-md font-medium">{item.item_name}</div>
                                                            <div className="flex items-center">
                                                                <div className="text-green-800 mr-1">INR {item.upper_circuit}</div>
                                                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                                                </svg>
                                                                <div className="ml-1 text-green-800">{item.lower_circuit}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center relative mt-1">
                                                            {/* Square image with rounded edges */}
                                                            <div className="relative">
                                                                <img src={item.image} alt="Item" className="rounded-md w-24 h-24" />
                                                                <div className="flex justify-center items-center border border-red-800 rounded-md px-2 bg-white absolute bottom-0 w-[110%] left-1/2 transform -translate-x-1/2 z-10">
                                                                    <button className="focus:outline-none" onClick={() => { handleCountChange(category.item_category_name, item.item_id, -1) }}>➖</button>
                                                                    {/* Display count according to local storage or show 0 */}
                                                                    <span className="mx-2" style={{ minWidth: "2rem", textAlign: "center" }}>
                                                                        {/* Retrieve count from local storage if available, otherwise display 0 */}
                                                                        {localStorage.getItem(`item_${item.item_id}_count`) ? JSON.parse(localStorage.getItem(`item_${item.item_id}_count`)).count : 0}
                                                                    </span>
                                                                    <button className="focus:outline-none" onClick={() => handleCountChange(category.item_category_name, item.item_id, 1)}>➕</button>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '0px' }}></div>
                                                </div>
                                            ))}
                                    </div>
                                )}

                            </div>)
                        ))}
                    <div className="mb-32">

                    </div>
                </div>
            </div>

            <BottomNavbar />
        </div>
    );
};

export default MenuScreen;
