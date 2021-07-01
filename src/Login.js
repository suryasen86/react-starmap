import React from 'react'
import Header from './MyComponents/Header'
import Signup from './MyComponents/Signup'
import Footer  from  './MyComponents/Footer';
function Login() {
    return (
        <div>
            <Header account={true} />
            <Signup login="Login" register="Register Now !" href="/register"/>
            < Footer/>
        </div>
    )
}

export default Login
