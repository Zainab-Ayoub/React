// How would you use useContext to share global 
// theme data between deeply nested components?

import {useState, createContext, useContext} from 'react';

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState("Light");
    const toggleTheme = () => setTheme((t) => (t === "Light" ? "Dark" : "Light"));
    return (
         <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
         </ThemeContext.Provider>
    )
}

function DeepChild() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = {
        background: theme === "Dark" ? "#000" : "#fff",
        color: theme === "Dark" ? "#fff" : "#000",
        padding: "20px"
    };

    return (
        <div style={styles}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

function MiddleComponent () { // doesnt need to know about the theme
    return (
        <ThemeProvider>
            <DeepChild />
        </ThemeProvider>
    );
}

function GlobalData() {
    return (
        <ThemeProvider>
            <MiddleComponent />
        </ThemeProvider>
    )
}

export default GlobalData;