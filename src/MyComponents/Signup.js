import React,{useState} from 'react';
import axios from 'axios';
import {autent} from '../App'

function Signup(props) {
const [email, setemail] = useState("")
const [pass, setpass] = useState("")
const [message, setmessage] = useState("")


function submit(){


    axios.post('/api/login',{email:email,password:pass})
    .then((res)=>{
        if(res.data.status)
        {
            setmessage(res.data.message)
            localStorage.setItem("auth",JSON.stringify(res.data))
            autent.authenticate()
            window.location="/admin"
        }

        setmessage(res.data.message)

        setTimeout(()=>{
            setmessage("")
        },3000)

    })


}

    return (
        <div>
                <section id="contact-page">
        <div className="contact-page">
            <div className="img-form">
                <div className="contact-img coco-info">
                    <img src="/img/contact.png" alt="" className="co-img"/>
                </div>
                <div className="contact-form coco-info" onSubmit={(e)=>{
                    e.preventDefault()
                    submit()
                }} >
                    <form  className="form-co">
                        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" className="inpt-type"  required/>
                        {/* <input type="number" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Phone Number" className="inpt-type"  required/> */}
                        <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Password" className="inpt-type" required/>
                        {/* <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="cnf Password" className="inpt-type" required/> */}
                
                        <p>{message}</p>
                        <input type="submit" value={props.login} className="inp-btn"/>
                    </form>
                </div>
            </div>
            </div>

    </section>
        </div>
    )
}

export default Signup
