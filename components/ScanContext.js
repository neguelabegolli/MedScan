import React, { createContext, useState } from 'react';

const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
    const [scanHistory, setScanHistory] = useState([]);

    const addScanToHistory = (data, dataType, description) => {
        const timestamp = new Date().getTime();
        const scanEntry = {
            timestamp,
            data,
            dataType,
            description
        };
        setScanHistory((prevHistory) => [...prevHistory, scanEntry]);
    };

    return (
        <ScanContext.Provider value={{ scanHistory, addScanToHistory }}>
            {children}
        </ScanContext.Provider>
    );
};

export default ScanContext;


/*
old code:
import React, { createContext, useState } from 'react';

const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
    const [scanHistory, setScanHistory] = useState([]);

    const addScanToHistory = (data, dataType, description) => {
        const timestamp = new Date().getTime();
        const scanEntry = {
            timestamp,
            data,
            dataType,
            description
        };
        setScanHistory((prevHistory) => [...prevHistory, scanEntry]);
    };

    return (
        <ScanContext.Provider value={{ scanHistory, addScanToHistory }}>
            {children}
        </ScanContext.Provider>
    );
};

export default ScanContext;

 */