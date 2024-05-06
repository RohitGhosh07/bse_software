import React, { useEffect, useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  // This imports the necessary submodules

const MarketScreen = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked); // Toggle the bookmark state
    };
    const foodItems = Array.from({ length: 40 }, (_, index) => ({
        name: `Food Item ${index + 1}`,
        type: `Type ${index % 5 + 1}`,
        number: Math.floor(Math.random() * 900 + 100)  // Random 3-digit number
    }));
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

    const handleCountChange = (index, change, e) => {
        e.stopPropagation();
        const newCounts = [...counts];
        newCounts[index] += change;
        if (newCounts[index] < 0) newCounts[index] = 0;
        setCounts(newCounts);
    };
    useEffect(() => {
        const closeDropdown = (e) => {
            setSelectedIdx(null);
        };

        // Attach the event listener
        window.addEventListener('click', closeDropdown);

        // Clean up the event listener
        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, [selectedIdx]); // Effect runs only when selectedIdx changes

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full fixed top-0 pt-2 bg-white z-50">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="object-cover w-20 h-auto" />
                    <h1 className="text-xl mt-4 font-black">Items</h1>
                </div>
                <div className="mt-4 mb-0 w-full px-4">
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="w-full p-2 border border-gray-300 rounded-md shadow-md"
                    />
                </div>
            </div>
            <div className="pt-40 mt-8 pb-20 w-full overflow-auto">
                {foodItems.map((item, index) => (
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
                                {index === selectedIdx ? (
                                    <div>
                                        <div className="flex items-center" onClick={handleBookmarkClick}>
                                            <div className="mr-2">
                                                <svg width="11" height="19" viewBox="0 0 11 19" fill={isBookmarked ? "black" : "none"} xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 1.67604C10 0.774651 1 0.774654 1 1.67604V17L5.5 11.6667L10 17V1.67604Z" stroke="black" />
                                                </svg>
                                            </div>
                                            <div className="text-xl font-black">{item.name}</div>
                                        </div>
                                        <div className="flex justify-start items-center w-full">
                                            <div className="text-xs">{item.type}</div>
                                            <div className="flex px-2">
                                                <div className="text-xs font-bold">{item.number}.00</div>
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
                                        <div className="text-md font-black">{item.name}</div>

                                        <div className="text-xs">{item.type}</div>
                                        <div className="text-right -mt-10">
                                            <div className="font-black text-green-800">{item.number}.00</div>
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


                                )}
                            </div>
                            <div className="flex items-center">
                                {index === selectedIdx && (
                                    <div className="flex items-center border border-red-800 rounded-md px-2 ml-4">
                                        <button className="focus:outline-none" onClick={(e) => handleCountChange(index, -1, e)}>➖</button>
                                        <span className="mx-2" style={{ minWidth: "2rem", textAlign: "center" }}>{counts[index]}</span>
                                        <button className="focus:outline-none" onClick={(e) => handleCountChange(index, 1, e)}>➕</button>
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
