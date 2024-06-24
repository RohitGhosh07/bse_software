import React, { useEffect, useState } from 'react';

const FetchDisplayName = ({ selectedId, apiUrl, placeholder }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchName = async () => {
            if (selectedId) {
                try {
                    const response = await fetch(`${apiUrl}/${selectedId}`);
                    const data = await response.json();
                    setName(data.name);
                } catch (error) {
                    console.error('Error fetching name:', error);
                }
            } else {
                setName('');
            }
        };

        fetchName();
    }, [selectedId, apiUrl]);

    return (
        selectedId && (
            <h1 className="text-xl mt-0 mb-2 text-left">
                <span>{placeholder} </span>
                <span className="font-black">{name}</span>
            </h1>)
    );
};

export default FetchDisplayName;
