import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Use the named export
import BottomNavbar from '../components/bottomNavbar';
import { MdEdit } from "react-icons/md";

const ProfileScreen = () => {
    const [sessionId, setSessionId] = useState('');
    const [customer_id, setCustomerId] = useState('');
    const [showTransactions, setShowTransactions] = useState(false); // State to toggle between QR code and transactions
    const profileName = 'John Doe';
    const walletBalance = '$1000';

    // Sample transaction data (can be replaced with real data)
    const transactions = [
        { id: 1, date: '2023-08-01', description: 'Coffee Shop', amount: '-$5.00' },
        { id: 2, date: '2023-08-02', description: 'Groceries', amount: '-$50.00' },
        { id: 3, date: '2023-08-03', description: 'Salary', amount: '+$2000.00' },
    ];

    useEffect(() => {
        // Get the session ID from localStorage
        const storedSessionId = localStorage.getItem('session_id');
        const customer_id = localStorage.getItem('customer_id');
        
        // If sessionId exists in localStorage, set it in the state
        if (storedSessionId) {
            setSessionId(storedSessionId);
            setCustomerId(customer_id);
        } else {
            // Handle if sessionId is not available (optional)
            console.error("Session ID not found in localStorage.");
        }
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-50 min-h-screen">
            {/* Header with Gradient Background */}
            <div className="relative w-full">
                <div className="h-40 bg-gradient-to-r from-red-800 to-red-600 w-full rounded-b-3xl shadow-md"></div>
            </div>

            {/* Profile Info Card */}
            <div className="relative -top-16 bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md mx-auto text-center">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">{customer_id || profileName}</h1>
                <p className="text-lg text-gray-600 mb-4">Wallet Balance: {walletBalance}</p>

                {/* Quick Action Buttons */}
                <div className="flex justify-around mt-4">
                    <button
                        onClick={() => setShowTransactions(false)}
                        className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl shadow-lg ${showTransactions ? 'bg-gray-300' : 'bg-red-800 text-white'}`}
                    >
                        <QRCodeSVG className="mb-2" value={sessionId || 'No QR Available'} size={30} />
                        {/* <span className="text-sm">Show QR</span> */}
                    </button>

                    <button
                        onClick={() => setShowTransactions(true)}
                        className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl shadow-lg ${showTransactions ? 'bg-red-800 text-white' : 'bg-gray-300'}`}
                    >
                        <span className="mb-2 text-lg">💳</span>
                        {/* <span className="text-sm">My Transactions</span> */}
                    </button>
                </div>
            </div>

            {/* Dynamic Content (QR Code or Transactions) */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mt-8 w-11/12 max-w-md mx-auto text-center">
                {showTransactions ? (
                    <>
                        <p className="text-gray-500 mb-3 text-lg font-medium">Transaction History</p>
                        <ul className="divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                                <li key={transaction.id} className="flex justify-between items-center py-3">
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                                        <p className="text-sm text-gray-500">{transaction.date}</p>
                                    </div>
                                    <div className={`text-sm font-semibold ${transaction.amount.startsWith('-') ? 'text-red-800' : 'text-green-600'}`}>
                                        {transaction.amount}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        <p className="text-gray-500 mb-3 text-lg font-medium">Your QR Code</p>
                        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-xl shadow-inner">
                            <QRCodeSVG value={sessionId || ''} size={160} className="mx-auto" />
                        </div>
                    </>
                )}
            </div>

            {/* Bottom Navigation */}
            <BottomNavbar />

            {/* Floating Action Button (FAB) */}
            {/* <button className="fixed bottom-20 right-6 bg-red-800 text-white p-4 rounded-full shadow-lg">
                <MdEdit className="w-6 h-6" />
            </button> */}
        </div>
    );
};

export default ProfileScreen;
