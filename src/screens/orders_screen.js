import React from 'react';
import BottomNavbar from '../components/bottomNavbar';

const OrderScreen = () => {
    // Sample data for food items
    const items = [
        { id: 1, name: 'Spaghetti Bolognese', type: 'Italian', number: 24 },
        { id: 2, name: 'Chicken Tikka Masala', type: 'Indian', number: 18 },
        { id: 3, name: 'Beef Chow Mein', type: 'Chinese', number: 30 }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full fixed top-0 pt-2 bg-white z-50">
                <div className="flex flex-col items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Center Image" className="object-cover w-20 h-auto" />
                </div>
                <div className="bg-white w-full p-4">
                    <div className="flex justify-between bg-slate-200 px-4 py-4 rounded-lg items-center">
                        <span className="text-lg font-semibold">P&L</span>
                        <div className="flex items-center space-x-4">
                            <span className="text-lg font-black text-green-800">+{Math.floor(Math.random() * 1000)}.00</span>
                            <div className="text-sm rounded-full px-3 py-1" style={{ backgroundColor: 'rgba(5, 150, 105, 0.1)' }}>
                                +{Math.floor(Math.random() * 100)}.00%
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full px-4 mt-4">
                    {items.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <div className="flex justify-between items-center py-2">
                                <div>
                                    <div className="text-xs">Qty. {Math.floor(Math.random() * 100)} | Avg. {Math.floor(Math.random() * 100)}</div>

                                    <div className="text-xl font-black">{item.name}</div>
                                    <div className="text-xs">Total Value {Math.floor(Math.random() * 100)}.00</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs">{Math.floor(Math.random() * 100)}.00%</div>

                                    <div className="font-black text-xl text-green-800">
                                        +{Math.floor(Math.random() * 100)}.00
                                    </div>
                                    <div className="flex items-center text-xs justify-end space-x-2">
                                        <span>LTP {Math.floor(Math.random() * 100)}.00</span>
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" stroke-width="2" />
                                        </svg>
                                        <span>+{Math.floor(Math.random() * 100)}%</span>
                                    </div>
                                </div>

                            </div>
                            {index !== items.length - 1 && (
                                <hr className="border-t border-gray-200" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <BottomNavbar />
        </div>
    );
};

export default OrderScreen;
