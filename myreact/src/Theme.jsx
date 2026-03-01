// How can you implement a light/dark theme toggle 
// feature using useState?

import {useState} from 'react';

function Theme() {
    const [isDark, setIsDark] = useState(false);

    const themeStyle = {
        backgroundColor: isDark ? '#000000' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000'
    }
    
    return (
        <div style={themeStyle}>
            <h1>{isDark ? 'dark mode' : 'light mode'}</h1>
            <button onClick={() => setIsDark((prev) => !prev)}>
                Switch Mode
            </button>
        </div>
    )
}

export default Theme;