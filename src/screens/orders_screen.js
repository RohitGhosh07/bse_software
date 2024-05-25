import React, { useState, useEffect } from 'react';
import BottomNavbar from '../components/bottomNavbar';

const OrderScreen = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noOrder, setNoOrder] = useState(false);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                setLoading(true);

                const sessionId = localStorage.getItem('session_id');
                if (!sessionId) {
                    setNoOrder(true);
                    setLoading(false);
                    return;
                }

                const response = await fetch(`http://localhost:5000/order_logs?session_id=${sessionId}`);
                console.log(response)
                if (!response.ok) {
                    throw new Error('Failed to fetch order details');
                }
                const data = await response.json();
                const itemPromises = data.order_logs.map(async (item) => {
                    const itemResponse = await fetch(`http://localhost:5000/items?item_id=${item.item_id}`);
                    if (!itemResponse.ok) {
                        throw new Error('Failed to fetch item details');
                    }
                    const itemData = await itemResponse.json();
                    console.log(itemData.items[0].item_name);
                    console.log(item.item_id);

                    return {
                        ...item,
                        item_name: itemData.items[0].item_name,
                        base_price: itemData.items[0].base_price,
                    };
                });
                const updatedOrderItems = await Promise.all(itemPromises);
                setOrderItems(updatedOrderItems);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching order details:', error);
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, []);

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
                    {loading ? (
                        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="Loading" className="object-cover w-20 h-auto" />
                        </div>
                    ) : noOrder ? (
                        <div className="text-center py-4">
                            <p className="text-lg font-semibold">No order placed yet.</p>
                            <img src="https://i.pinimg.com/originals/c4/cb/9a/c4cb9abc7c69713e7e816e6a624ce7f8.gif" alt="No Order GIF" className="mx-auto mt-4" />
                        </div>
                    ) : (
                        <div className="mt-4 mb-0 w-full px-4 overflow-auto" style={{ maxHeight: "800px" }}>
                            {orderItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex justify-between items-center py-2">
                                        <div>
                                            <div className="text-xs">Qty. {item.quantity} | Avg. {item.base_price}</div>
                                            <div className="text-xl font-black">{item.item_name}</div>
                                            <div className="text-xs">Total Value {item.base_price * item.quantity}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs">{Math.floor(Math.random() * 100)}.00%</div>
                                            <div className="font-black text-xl text-green-800">+{Math.floor(Math.random() * 100)}.00</div>
                                            <div className="flex items-center text-xs justify-end space-x-2">
                                                <span>LTP {Math.floor(Math.random() * 100)}.00</span>
                                                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2" />
                                                </svg>
                                                <span>+{Math.floor(Math.random() * 100)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {index !== orderItems.length - 1 && (
                                        <hr className="border-t border-gray-200" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                    )}
                </div>
            </div>
            <BottomNavbar />
        </div>
    );
};

export default OrderScreen;
