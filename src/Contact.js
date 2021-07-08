 
import Header from './MyComponents/Header'
import React,{useState} from 'react';
import Footer  from  './MyComponents/Footer';
import axios from 'axios';
function Contact() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [msg, setmsg] = useState("") ;
    const [message, setmessage] = useState("")
    const tonu= {
        color: "white",
        padding: "10px"
       
    } 
    
    function subcontact(e) {
        e.preventDefault();
        if (!name|| !email|| !subject|| !msg){
            alert("please fill all the details")
        } 
     else {
        axios.post('/contact',{name:name,email:email,subject:subject,msg:msg})
        .then((res)=>{
            if(res.data.status)
            {
                setmessage(res.data.message)
                alert(res.data.message)
            }

            setmessage(res.data.message)

            setTimeout(()=>{
                setmessage("")
            },3000)

    })

    }


}













    return (
        <>
        <Header contact={true}/>
        <section id="contact-page">
        <div class="contact-page">
            <div class="img-form">
                <div class="contact-img coco-info">
                    <img src="/img/contact.svg" alt="" class="co-img"/>
                </div>
                <div class="contact-form coco-info">
                    <form onSubmit={subcontact} class="form-co">
                    <p style={tonu}>{message}</p>
                        <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Your Name" class="inpt-type"/>
                        <input type="email"   value={email}  onChange={(e)=>{setemail(e.target.value)}}  name="" id="" placeholder="Your Email" class="inpt-type"/>
                        <input type="text"  value={subject} onChange={(e)=>{setsubject(e.target.value)}} placeholder="Subject" class="inpt-type"/>
                        <textarea name="" value={msg} id="" onChange={(e)=>{setmsg(e.target.value)}} cols="30" rows="6" placeholder="Your message" class="inpt-type"></textarea>
                        <input type="submit" value="SEND" class="inp-btn"/>
                    </form>
                </div>
            </div>
            <div class="social-contact">
                <h2 class="social-heading">We would love to hear from you</h2>
             
                <div class="social-net">
                    <li class="single-social"> <img src="/img/location-7 1.png" alt="" class="icone"/>
                        <p class="info">Mumbai,Maharastra </p>
                    </li>
                    <li class="single-social"> <img src="/img/mail-2 1.png" alt="" class="icone"/>
                        <p class="info">Info@starmapping.in </p>
                    </li>
                    <li class="single-social"> <img src="/img/internet 1.png" alt="" class="icone"/>
                        <p class="info">www.starmapping.in </p>
                    </li>
                </div>
            </div>
        </div>
    </section>
    <Footer     />
        </>
    )
}

export default Contact
