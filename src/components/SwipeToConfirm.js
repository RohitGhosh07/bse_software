import React, { useState } from 'react';

const SwipeableToggle = ({ onConfirm }) => {
    const [position, setPosition] = useState(0); // Track the position of the circle
    const [isActive, setIsActive] = useState(false); // State to determine if the toggle is active
    const maxPosition = 180; // Adjusted to fit the circle within the track at the far right

    const handleTouchMove = (e) => {
        if (isActive) return; // Don't allow movement if already activated
        const touchX = e.touches[0].clientX - e.target.getBoundingClientRect().left; // Calculate new X position based on touch move
        const newPosition = Math.min(Math.max(0, touchX - 20), maxPosition); // Limit position within the bounds, adjust touchX by half the circle's width
        setPosition(newPosition);
    };

    const handleTouchEnd = () => {
        const threshold = maxPosition * 0.8; // Threshold to consider as 'confirmed' swipe
        if (position >= threshold) { // Check if swiped enough to activate
            setPosition(maxPosition); // Snap to the end of the track
            setIsActive(true); // Mark as active
            onConfirm && onConfirm(); // Execute onConfirm callback
        } else {
            setPosition(0); // Reset to starting position if not enough swipe
            setIsActive(false); // Mark as not active
        }
    };

    // Calculate the background color transitioning towards RGB(140, 11, 13)
    const r = 255 - (position / maxPosition) * (255 - 140);  // Transition from 255 to 140
    const g = 255 - (position / maxPosition) * (255 - 11);   // Transition from 255 to 11
    const b = 255 - (position / maxPosition) * (255 - 13);   // Transition from 255 to 13

    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const circleColor = isActive ? '#8C0B0D' : '#8C0B0D'; // Initially red, turns green when active

    return (
        <div className="w-60 h-16 rounded-full relative overflow-hidden"
            style={{ backgroundColor, border: '1px solid black' }}>
            <div
                className="slider-thumb mx-1 w-14 h-14 rounded-full absolute flex items-center justify-center"
                style={{ left: `${position}px`, transition: 'left 0.2s', top: '50%', transform: 'translateY(-50%)', backgroundColor: circleColor }}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchStart={e => e.preventDefault()} // Prevent any default action on touch start
            >
                <svg fill="#ffffff" className="mt-1 ml-1" height="20px" width="20px" viewBox="0 0 330 330" style={{ transform: 'translate(-10%, -10%)' }}>
                    <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                        c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                        C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                        C255,161.018,253.42,157.202,250.606,154.389z"/>
                </svg>
            </div>
            {isActive ? (
                <div className="absolute w-full text-center top-1/2 transform -translate-y-1/2">
                    <span className="text-white px-2 font-bold">ORDER PLACED</span>
                </div>
            ) : (
                <div className="absolute top-1/2 transform -translate-y-1/2"
                    style={{ marginLeft: '68px', opacity: (100 - (position / maxPosition) * 100) / 100, transition: 'opacity 0.2s' }}>
                    <span className="text-xs font-black text-gray-900">SWIPE TO PLACE ORDER</span>
                </div>

            )}
        </div>
    );
};

export default SwipeableToggle;
