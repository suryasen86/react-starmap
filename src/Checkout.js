
import React,{useState} from 'react';
import Footer from './MyComponents/Footer'
import axios from 'axios';

function Checkout() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [add, setadd] = useState("") ;
    const [message, setmessage] = useState("")
const [image, setimage] = useState("/img/Star_Map_Heart_Full_web 1.png" )


React.useEffect(()=>{

    if(localStorage.getItem("images"))
    {
            setimage(`${localStorage.getItem("images")}`)
    }

},[])




    const tonu= {
        color: "white",
        padding: "10px"
        
       
    } 
    
    async function subcontact(e) {


        e.preventDefault();


        if (!name|| !email|| !number|| !add){
            alert("please fill all the details")
        } 
     else {
        axios.post('/api/checkout/neworder',{name:name,email:email,number:number,add:add,starmap:await localStorage.getItem('StarMap')})
        .then((res)=>{
            console.log(res.data)
            if(res.data.status)
            {
                setmessage(res.data.message)
                alert(res.data.message)
                window.location.href='/'

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
        <div>


                <section id="contact-page">
        <div  className="contact-page">
            <div  className="img-form">
                <div  className="contact-img coco-info">
                    <h1 className="text-center" style={tonu}>Order Preview</h1>
                    <img className="preiew co-img" src={`${image}`}alt=""/>
                </div>
                <div  className="contact-form coco-info">
                    <form onSubmit={(e)=>subcontact(e)}  className="form-co">
                    <p style={tonu}>{message}</p>
                        <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Your Name"  className="inpt-type"/>
                        <input type="email"   value={email}  onChange={(e)=>{setemail(e.target.value)}}  name="" id="" placeholder="Your Email"  className="inpt-type"/>
                        <input type="text"  value={number} onChange={(e)=>{setnumber(e.target.value)}} placeholder="number"  className="inpt-type"/>
                        <textarea name="" value={add} id="" onChange={(e)=>{setadd(e.target.value)}} cols="30" rows="6" placeholder="Enter Your  Complete Address "  className="inpt-type"></textarea>
                       
                       <p style={tonu} > Shipping: FREE!</p>
                       <p style={tonu}>Total: INR 1800</p>
                       
                   

                        <input type="submit" value="Procced To Pay"  className="inp-btn"/>
                    </form>
                </div>
            </div>

        </div>
    </section>    
        </div>

        
        </>
    )
}

export default Checkout
