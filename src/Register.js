import React from 'react'
import Header from './MyComponents/Header'
import Reg from './MyComponents/Reg'

function Register() {
    return (
        <div>
            <Header/>
            <Reg login="Signup" register="Login Now !" href="/login"/>
        </div>
    )
}

export default Register
