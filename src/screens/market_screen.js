import React, { useState } from 'react';
import BottomNavbar from '../components/bottomNavbar';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  // This imports the necessary submodules

const MarketScreen = () => {
    const foodItems = Array.from({ length: 40 }, (_, index) => ({
        name: `Food Item ${index + 1}`,
        type: `Type ${index % 5 + 1}`,
        number: Math.floor(Math.random() * 900 + 100)  // Random 3-digit number
    }));
    const randomData = () => ({
        labels: Array.from({length: 7}, (_, i) => `Point ${i + 1}`),
        datasets: [
            {
                label: 'Sample Data',
                data: Array.from({length: 7}, () => Math.floor(Math.random() * 1000)),
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
                            className={`flex justify-between items-center px-4 py-2 cursor-pointer ${index === selectedIdx ? 'bg-slate-300 text-black h-16' : 'border-b border-gray-200 text-gray-800 h-12'} ${selectedIdx !== null && index !== selectedIdx ? 'opacity-50' : ''}`}
                            onClick={() => setSelectedIdx(index === selectedIdx ? null : index)}
                        >
                            <div className="flex-grow flex flex-col">
                                {index === selectedIdx ? (
                                    <div>
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                    +{Math.floor(Math.random() * 100)}
                                                    <svg className="w-3 h-3 fill-current text-green-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M12 2l5 9H7z" /></svg>
                                                    {Math.floor(Math.random() * 100)}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) : (
                                    <div>
                                        <div className="text-md font-bold">{item.name}</div>

                                        <div className="text-xs">{item.type}</div>
                                        <div className="text-right -mt-10">
                                            <div className="font-bold">{item.number}</div>
                                            <div className="text-xs flex items-center justify-end space-x-2 ml-2">
                                                +{Math.floor(Math.random() * 100)}
                                                <svg className="w-3 h-3 fill-current text-green-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M12 2l5 9H7z" /></svg>
                                                {Math.floor(Math.random() * 100)}%
                                            </div>
                                        </div>
                                    </div>


                                )}
                            </div>
                            <div className="flex items-center">
                                {index === selectedIdx && (
                                    <div className="flex items-center border border-red-800 rounded-md px-2 ml-4">
                                        <button className="focus:outline-none" onClick={(e) => handleCountChange(index, -1, e)}>➖</button>
                                        <span className="mx-2">{counts[index]}</span>
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
