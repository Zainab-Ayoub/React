import { useState } from "react";

// How can you create a show/hide password feature in a
// React form using state management?

function PasswordFeature() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Password</label>
            <input type={showPassword ? 'text' : 'password'}
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter password: "
             />

             <button type='button' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 'Hide' : 'Show'}
             </button>
             <button type='submit'>Login</button>
        </form>
    )
}

export default PasswordFeature;