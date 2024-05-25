import React, { useState, useEffect } from 'react';
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
    const [items, setItems] = useState([]); // State to store item details fetched from the API
    const [counts, setCounts] = useState({}); // State to store item counts
    const [loading, setLoading] = useState(true); // State to track loading status
    const [noOrder, setNoOrder] = useState(false);

    const handleConfirmation = () => {
        console.log("Action Confirmed!");
        setShowCheckmark(true); // Show the checkmark animation

        // Retrieve items and counts from local storage
        const items = Object.keys(localStorage)
            .filter(key => key.startsWith('item_'))
            .map(key => JSON.parse(localStorage.getItem(key)))
            .filter(item => item.count > 0); // Filter items with quantity greater than 0

        // Check if items exist in local storage
        if (!items || items.length === 0) {

            console.error('No items found in local storage');
            return;
        }

        // Retrieve the customer_id from local storage
        const customerId = localStorage.getItem('customer_id');

        // Construct the payload
        const payload = {
            customer_id: customerId,
            items: items
        };

        // Log the payload to verify it's correct
        console.log(payload);


        // Send a POST request to the server
        fetch('http://localhost:5000/order_logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // Save the order ID to local storage
                localStorage.setItem('session_id', data.session_id);

                // Navigate to the "orders" screen on success
                setTimeout(() => {
                    setShowCheckmark(false); // Hide the checkmark animation after 2 seconds
                    navigate('/orders');
                }, 2100);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error if necessary
                // For example, show an error message to the user
            });
    };




    useEffect(() => {
        const fetchItems = async () => {
            try {


                setLoading(true); // Set loading to true before fetching data

                // Extract item IDs from local storage
                const itemIds = Object.keys(localStorage)
                    .filter(key => key.startsWith('item_'))
                    .map(key => JSON.parse(localStorage.getItem(key)).id);

                // if (items.length === 0) {
                //     setNoOrder(true);
                //     setLoading(false);
                //     return;
                // }
                // Construct the URL with item IDs
                const url = `http://localhost:5000/items?item_id=${itemIds.join(',')}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                console.log('Fetched items:', data);

                // Filter items with count greater than 0
                const filteredItems = data.items.filter(item => {
                    const countItem = localStorage.getItem(`item_${item.item_id}_count`);
                    const count = countItem ? JSON.parse(countItem).count : 0;
                    return count > 0;
                });

                setItems(filteredItems);


                setLoading(false); // Set loading to false after data is fetched

            } catch (error) {
                console.error('Error fetching items:', error);
                setLoading(false); // Set loading to false in case of error

            }
        };

        fetchItems();
    }, []);

    const handleCountChange = (itemId, delta) => {
        console.log('Called at cart');

        // Retrieve the current counts from local storage
        const storedItemData = localStorage.getItem(`item_${itemId}_count`);
        const currentCount = storedItemData ? JSON.parse(storedItemData).count : 0;
        console.log(`Current count for item with ID ${itemId}:`, currentCount);

        // Calculate the new count after applying the delta
        const newCount = Math.max(0, currentCount + delta);
        console.log(`New count for item with ID ${itemId}:`, newCount);

        // Store the new count in local storage
        const newItemData = {
            id: itemId,
            count: newCount,
        };
        localStorage.setItem(`item_${itemId}_count`, JSON.stringify(newItemData));

        // Print the updated count
        console.log(`Updated count for item with ID ${itemId}:`, newCount);

        // Update state with the new counts
        setCounts(newCount);
    };


    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-full fixed top-0 pt-2 bg-white z-50">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 mb-2 font-black">Cart Items</h1>
                </div>
            </div>

            {/* Main content area that scrolls */}
            <div className="flex-1 overflow-auto pt-32 pb-20">

                {loading ? (
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                        <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="Loading" className="object-cover w-20 h-auto" />
                    </div>
                ) : noOrder ? (
                    <div className="text-center py-4">
                        <p className="text-lg font-semibold">No item in cart.</p>
                        <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="No Order GIF" className="mx-auto mt-4" />
                    </div>
                ) : (items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1 px-2 hover:bg-slate-100">
                        <div className="flex items-center">
                            <span className="text-black mr-2">{item.item_name}</span>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end">
                                <div className="flex items-center border border-red-800 rounded-md px-2 mx-2">
                                    <button className="focus:outline-none" onClick={() => handleCountChange(item.item_id, -1)}>➖</button>
                                    <span className="mx-2" style={{ minWidth: "2rem", textAlign: "center" }}>
                                        {/* Retrieve count from local storage if available, otherwise display 0 */}
                                        {localStorage.getItem(`item_${item.item_id}_count`) ? JSON.parse(localStorage.getItem(`item_${item.item_id}_count`)).count : 0}
                                    </span>
                                    <button className="focus:outline-none" onClick={() => handleCountChange(item.item_id, 1)}>➕</button>
                                </div>
                                <span style={{ width: '50px', textAlign: 'right' }}>{item.base_price}</span>
                            </div>
                        </div>
                    </div>
                )
                ))}
                <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '8px' }}></div>
                <a href="/menu">
                    <div className="flex justify-between items-center py-2 px-4 mt-1 bg-white">
                        <span className="text-gray-800 text-xs font-medium">Add more items</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </div>
                </a>
                <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%', marginTop: '8px' }}></div>
                <CountdownTimer />
                <div className="flex flex-col items-center justify-center py-12">
                    {items.length > 0 ? (
                        <>
                            <ul>
                                {items.map(item => (
                                    <li key={item.item_id}>{item.name}</li>
                                ))}
                            </ul>
                            <SwipeableToggle onConfirm={handleConfirmation} />
                        </>
                    ) : (
                        <div>No items in Cart.</div>
                    )}                    {showCheckmark && (
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
