import React, { useEffect, useState, useRef } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  // This imports the necessary submodules
import { useSnackbar } from '../components/Snackbar ';

const MarketScreen = () => {
    // const [isBookmarked, setIsBookmarked] = useState(false);
    const [items, setItems] = useState([]); // Initialize items state as an array
    const [loading, setLoading] = useState(true); // State to track loading status
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { showSnackbar } = useSnackbar();
    const dropdownRef = useRef(null);

    const fetchItems = async (query) => {
        try {
            const response = await fetch(`http://localhost:5000/items?search=${query}`);
            const data = await response.json();
            setSearchResults(data.items);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        fetchItems(query);
    };

    useEffect(() => {
        const fetchBookmarkItemId = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/bookmarks?phone=9330262571');
                const data = await response.json();
                console.log(JSON.stringify(data.bookmarked_items));

                const bookmarkedItemIds = data.bookmarked_items;
                const itemDetailsPromises = bookmarkedItemIds.map(async (itemId) => {
                    const itemResponse = await fetch(`http://localhost:5000/items?item_id=${itemId}`);
                    const itemData = await itemResponse.json();
                    console.log(itemData.items[0].item_name);
                    return itemData;
                });
                const itemDetails = await Promise.all(itemDetailsPromises);
                setItems(itemDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookmarked item IDs:', error);
                setLoading(false);
            }
        };

        fetchBookmarkItemId();
    }, []);

    const handleBookmarkDelete = async (itemId) => {
        const phoneNumber = localStorage.getItem('phone');

        if (!phoneNumber) {
            alert('Phone number not found in local storage');
            return;
        }
        const requestBody = {
            items_to_delete: [itemId], // Wrap the itemId in an array
            phone: phoneNumber, // This will be sent as a string
        };

        try {
            const response = await fetch('http://localhost:5000/bookmarks', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Bookmark deleted:', data);
            showSnackbar("Bookmark deleted");
        } catch (error) {
            console.error('Error deleting bookmark:', error);
            alert('Failed to delete bookmark');
        }
    };

    const randomData = () => ({
        labels: Array.from({ length: 7 }, (_, i) => `Point ${i + 1}`),
        datasets: [
            {
                label: 'Sample Data',
                data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
                borderColor: 'rgb(127 29 29)',  // Red color for the line
                backgroundColor: 'rgb(185 28 28)',  // Red with transparency for the area under the line
            }
        ]
    });

    const [selectedIdx, setSelectedIdx] = useState(null);
    const [counts, setCounts] = useState(new Array(40).fill(0));

    const handleCountChange = (itemId, delta) => {
        console.log('Called at market');

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

    const handleItemClick = async (itemId) => {
        const phoneNumber = localStorage.getItem('phone');
        console.log('Phone number:', phoneNumber);
        console.log('Item ID:', itemId);

        if (!phoneNumber) {
            alert('Phone number not found in local storage');
            return;
        }

        const requestBody = {
            bookmarked_items: [itemId], // Wrap the itemId in an array
            phone: phoneNumber, // This will be sent as a string
        };

        console.log('Request body:', requestBody);

        try {
            const response = await fetch('http://localhost:5000/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response:', data);
            showSnackbar("Bookmarked");

            // Close the dropdown after successfully bookmarking
            console.log('Dropdown closed');
            setSelectedIdx(null);
        } catch (error) {
            console.error('Error bookmarking item:', error);
            alert('Failed to bookmark item');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full fixed top-0 pt-2 bg-white z-50">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 font-black">Items</h1>
                </div>
                <div className="mt-4 mb-0 w-full px-4 relative">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={handleSearch}
                        onFocus={toggleDropdown}

                        className="w-full p-2 border border-gray-300 rounded-md shadow-md"
                    />
                    {dropdownVisible && (
                        <div className="relative">
                            {searchResults.length > 0 && (
                                <div className="absolute z-50 top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto">
                                    {searchResults.map((item, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-gray-300 p-2 cursor-pointer"
                                            onClick={() => {
                                                handleItemClick(item.item_id);
                                                toggleDropdown();
                                            }}
                                        >
                                            <p>{item.item_name}</p>
                                            {/* Add more item details here if needed */}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="pt-40 mt-8 pb-20 w-full overflow-auto">
                {items.map((itemData, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`flex justify-between items-center px-4 py-2 cursor-pointer ${index === selectedIdx ? 'bg-slate-200 text-black h-16' : 'border-b border-gray-200 text-gray-800 h-12'} ${selectedIdx !== null && index !== selectedIdx ? 'opacity-50' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();  // Prevent triggering closeDropdown
                                if (index === selectedIdx) {
                                    setSelectedIdx(null);
                                } else if (selectedIdx !== null) {
                                    setSelectedIdx(null);
                                    // setTimeout(() => setSelectedIdx(index), 10);  // Delay selection to mimic a need for a new click
                                } else {
                                    setSelectedIdx(index);
                                }
                            }}
                        >
                            <div className="flex-grow flex flex-col">
                                {loading ? (
                                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                                        <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="Loading" className="object-cover w-20 h-auto" />
                                    </div>
                                ) : (index === selectedIdx ? (
                                    <div>
                                        <div className="flex items-center" onClick={() => handleBookmarkDelete(itemData.items[0].item_id)}>
                                            <div className="mr-2">
                                                <svg width="11" height="19" viewBox="0 0 11 19" fill={"black"} xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 1.67604C10 0.774651 1 0.774654 1 1.67604V17L5.5 11.6667L10 17V1.67604Z" stroke="black" />
                                                </svg>
                                            </div>
                                            <div className="text-xl font-black">{itemData.items[0].item_name}</div>
                                        </div>
                                        <div className="flex justify-start items-center w-full">
                                            <div className="text-xs">{items.type}</div>
                                            <div className="flex px-2">
                                                <div className="text-xs font-bold">{items.number}.00</div>
                                                <div className="text-xs flex items-center justify-end space-x-2 ml-2">
                                                    <div className="mr-0 text-green-800">
                                                        +{Math.floor(Math.random() * 100)}
                                                    </div>
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                                    </svg>
                                                    <div className="ml-0 text-green-800">
                                                        {Math.floor(Math.random() * 100)}%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="text-md font-black">{itemData.items[0].item_name}</div>

                                        <div className="text-xs">{itemData.items[0].item_name}</div>
                                        <div className="text-right -mt-10">
                                            <div className="font-black text-green-800">{itemData.items[0].base_price}.00</div>
                                            <div className="text-xs flex items-center justify-end space-x-2 ml-2">
                                                <div className="flex items-center">
                                                    <div className="flex items-center space-x-1">
                                                        <div className="font-black text-green-800">
                                                            +{Math.floor(Math.random() * 100)}.00
                                                        </div>
                                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                                        </svg>
                                                        <div className="font-black text-green-800">
                                                            +{Math.floor(Math.random() * 100)}.33%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center">
                                {index === selectedIdx && (
                                    <div className="flex items-center border border-red-800 rounded-md px-2 ml-4" onClick={(e) => e.stopPropagation()}>
                                        <button className="focus:outline-none" onClick={(e) => handleCountChange(itemData.items[0].item_id, -1)}>➖</button>
                                        <span className="mx-2" style={{ minWidth: "2rem", textAlign: "center" }}>
                                            {/* Retrieve count from local storage if available, otherwise display 0 */}
                                            {localStorage.getItem(`item_${itemData.items[0].item_id}_count`) ? JSON.parse(localStorage.getItem(`item_${itemData.items[0].item_id}_count`)).count : 0}
                                        </span>
                                        <button className="focus:outline-none" onClick={(e) => handleCountChange(itemData.items[0].item_id, 1)}>➕</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        {index === selectedIdx && (
                            <div className="w-full bg-white px-4 py-2 shadow-lg">
                                {/* <p>Details about {item.name}</p> */}
                                <Line data={randomData()} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <BottomNavbar />
        </div>
    );
}

export default MarketScreen;
