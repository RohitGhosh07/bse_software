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

const MenuScreen = () => {
    const [categories, setCategories] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [items, setItems] = useState({});
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(true); // State to track loading status


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

    // // Handle count change for each category
    // const handleCountChange = (category, index, delta) => {
    //     setCounts(prevCounts => {
    //         // Make a copy of the previous counts
    //         const newCounts = { ...prevCounts };

    //         // Retrieve the current count from the previous counts
    //         const currentCount = newCounts[category][index];

    //         // Calculate the new count after applying the delta
    //         const newCount = Math.max(0, isNaN(currentCount) ? 0 : currentCount + delta);

    //         // Update the counts for the specified category and index
    //         newCounts[category][index] = newCount;
    //         fetch(process.env.REACT_APP_BACKEND_MAIN_URI + '/store_count', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 item_id: index,
    //                 count: newCount,
    //             }),
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Failed to store count');
    //             }
    //             console.log(`Count for item ${index} updated successfully.`);
    //         })
    //         .catch(error => {
    //             console.error('Error storing count:', error);
    //         });
    //         // Print the new count
    //         console.log(`New count for ${category} at index ${index}:`, newCount);

    //         // Return the updated counts
    //         return newCounts;
    //     });
    // };
    // Handle count change for each category
    // Handle count change for each category
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
                // console.log(`Items for category ${categoryId}:`, data);
                setItems(prevItems => ({
                    ...prevItems,
                    [categoryId]: data.items // Store items in state using category ID as key
                }));
            })
            .catch(error => {
                console.error(`Error fetching items for category ${categoryId}:`, error);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full fixed top-0 pt-2 h-screen overflow-y-auto">
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
                    <h1 className="text-xl mt-4 mb-2 first-line:font-black">Menu Items</h1>

                    {loading ? (
                        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="Loading" className="object-cover w-20 h-auto" />
                        </div>
                    ) : (categories && categories.map(category => (
                        <div key={category.id} className="w-full mt-2">
                            <div className="w-full h-8 bg-gray-200 font-black flex justify-start items-center px-2 cursor-pointer" onClick={() => toggleDropdown(category.item_category_name)}>
                                {category.item_category_name.charAt(0).toUpperCase() + category.item_category_name.slice(1)} Items
                                <svg className={`w-6 h-6 ml-2 transform ${openDropdown === category.item_category_name ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {openDropdown === category.item_category_name && (
                                <div className="mx-2">
                                    {/* Render items dynamically */}
                                    {items[category.id] && items[category.id].map((item, index) => (
                                        <div>
                                        <div key={index} className="flex justify-between items-center p-2 hover:bg-slate-100">
                                            <div>
                                                <div className="text-md font-medium">{item.item_name}</div>
                                                <div className="flex items-center">
                                                    <div className="text-green-800 mr-1">{item.upper_circuit}</div>
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                                    </svg>
                                                    <div className="ml-1 text-green-800">{item.lower_circuit}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-end items-center border border-red-800 rounded-md px-2">
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
