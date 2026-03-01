import {useState} from 'react';

// Suppose you have two child components that need the same data. 
// How will you lift the state up to the parent and share it with both children?

function UserProfile({user}) {
    return (
        <div>
            <h3>User Profile</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

function WelcomeBanner({user}) {
    return (
        <h2>Welcome back, {user.name}!</h2>
    )
}

function ParentComponent(){
    const [user, setUser] = useState({name: 'Zainab', email: 'zainab@gmail.com'});
    
    return (
        <>
            <WelcomeBanner user={user} />
            <UserProfile user={user} />

            <button onClick={() => setUser({name: 'Ayesha', email: 'ayesha@gmailcom'})}>
                Change User
            </button>
        </>
    )
}

export default ParentComponent;