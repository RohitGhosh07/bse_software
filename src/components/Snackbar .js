// SnackbarContext.js
import React, { createContext, useContext, useState } from 'react';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
    const [snackbar, setSnackbar] = useState({ open: false, message: '' });

    const showSnackbar = (message) => {
        setSnackbar({ open: true, message });
        setTimeout(() => {
            setSnackbar({ open: false, message: '' });
        }, 3000);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            {snackbar.open && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '4px',
                    zIndex: 1000
                }}>
                    {snackbar.message}
                </div>
            )}
        </SnackbarContext.Provider>
    );
};
