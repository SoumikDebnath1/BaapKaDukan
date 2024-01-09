

import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <MyContext.Provider value={{ mode, toggleMode }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
