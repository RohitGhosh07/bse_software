import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavbar = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Orders', icon: '/assets/icons/orders.svg', path: '/orders' },
        { name: 'Market', icon: '/assets/icons/market.svg', path: '/market' },
        { name: 'Menu', icon: '/assets/icons/menugrp.svg', path: '/menu' },
        { name: 'Cart', icon: '/assets/icons/cart.svg', path: '/cart' }
    ];

    return (
<div className="fixed bottom-0 left-0 right-0 bg-white bottomNavbarShadow">
            <div className="flex justify-around text-center py-2">
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path} className={`flex flex-col items-center ${location.pathname === item.path ? 'text-red-500' : ''}`}>
                        <img 
                            src={item.icon} 
                            alt={item.name} 
                            style={{ width: '42px', height: '42px' }} 
                            className={location.pathname === item.path ? 'text-red-600' : ''}
                        />
                        <span className={`text-xs mt-1 ${location.pathname === item.path ? 'text-red-700' : ''}`}>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BottomNavbar;
