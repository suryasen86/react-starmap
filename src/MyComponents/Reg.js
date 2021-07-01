import React,{useState} from 'react';
import axios from 'axios';

function Reg(props) {
const [email, setemail] = useState("")
const [pass, setpass] = useState("")
const [number, setnumber] = useState("")
const [cnfpass, setcnfpass] = useState("")
const [message, setmessage] = useState("")
const tonu= {
    color: "white",
    padding: "10px"
   
} 

function submit(){


    axios.post('/api/register',{email:email,password:pass})
    .then((res)=>{
        if(res.data.status)
        {
            setmessage(res.data.message)
            localStorage.setItem("auth",JSON.stringify(res.data))
            window.location="/customization"
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
                        <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)} placeholder="Phone Number" className="inpt-type"  required/>
                        <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Password" className="inpt-type" required/>
                        <input type="password" value={cnfpass} onChange={(e)=>setcnfpass(e.target.value)} placeholder="cnf Password" className="inpt-type" required/>
                        <div className="check">
                            {/* <input type="checkbox" name="check" id="check"/> <span className="remb">Remember me </span><a href={props.href} className="forget">{props.register}</a> */}
                        </div>
                        <p style={tonu}>{message}</p>
                        <input type="submit" value={props.login} className="inp-btn"/>
                    </form>
                </div>
            </div>
            </div>

    </section>
        </div>
    )
}

export default Reg
