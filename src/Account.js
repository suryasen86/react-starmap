import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Header from './MyComponents/Header'

function Account(porps) {
    const tonu ={
        color: "white",
        padding:"100px"
    }
    const [Data, setData] = useState({})

    useEffect(()=>{

        let Data=localStorage.getItem('auth')
        if(Data)
        {
            console.log(JSON.parse(Data).userdata)
            
        }

    },[])


    return (
       <>
       <Header />
       <button type="button" class="btn btn-info mx-5">Logout</button>
            <div >
            <p  className="text-center my-10 mx-10" style ={tonu}> you havn't order yet</p>
            
        
            </div>
       </>
    )
}

export default Account
