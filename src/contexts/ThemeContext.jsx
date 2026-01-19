import { createContext, useContext, useState, useMemo } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new error("useTheme must be used within a ThemeProvider")
    }
    return context;
}

export const ThemeProvider = ({ children }) => {

    const [ theme, setTheme ] = useState('professional')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'professional' ? '8bit' : 'professional'))
    }

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme,
        is8Bit: theme === '8bit',
        isProfessional: theme === 'professional'
    }), [theme])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
