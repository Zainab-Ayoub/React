import { useState } from "react";

// Design a login form in React. How will you manage input fields using
//  useState and display a success message after correct submission?

function LoginForm(){
    const users = [
        {username: 'admin', password: 'admin123'},
        {username: 'amna', password: 'amna123'},
        {username: 'areeba', password: 'areeba123'}
    ]
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    l
    function handleSubmit(e) {
        e.preventDefault();
        const userFound = users.find(
            (users) => users.username === username && users.password === password
        );
        if(userFound) {
            setMessage('login successful');
        } else {
            setMessage('invalid username or password');
        }
    }

    return (
        <>
        <h2>Login Form</h2>
        
        <input type="text" value={username}
         placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" value={password}
        placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Login</button>
        <p>{message}</p>
        </>
    )
}

export default LoginForm;