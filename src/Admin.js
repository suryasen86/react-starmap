import axios from 'axios'
import React,{useState,useEffect} from 'react'
 import Hadmin from './admin/Hadmin'

function Admin(porps) {
    const tonu ={
        color: "white",
        padding:"100px"
    }
    const [Data, setData] = useState([])

    useEffect(()=>{

        let Data=localStorage.getItem('auth')
        if(Data)
        {
            console.log(JSON.parse(Data).userdata)
        }

        axios.get('/api/admin')
        .then((res)=>{
          if(Array.isArray(res.data))
          { 
            setData(res.data)
          }
        })



    },[])


    function redirect_page(e)
    {
      localStorage.setItem("Map",JSON.stringify(e))
      setTimeout(()=>{
        window.location.href='/admincustomization';

      },200)
    }

    
    return (
        <>
        <Hadmin />
        <div >
            <h1>orders</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">user id</th>
      <th scope="col">order id</th>
      <th scope="col">number</th>
      <th scope="col">name</th>
      <th scope="col">email</th>  
      <th scope="col">add</th>
      <th scope="col">amount</th>
      {/* <th scope="col">shape no</th> */}
      <th scope="col">order details</th>
      <th scope="col">order status</th>
      <th scope="col">ViewDesign</th>
    </tr>
  </thead>
  <tbody>
    {
    Data.map((e)=>
    <tr>
      <th scope="row">{e.userid}</th>
      <td>{e.orderid}</td>
      <td> {e.number}</td>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.address}</td>
      <td>{e.amount}</td>
 
      <td>{e.orderdetail}</td>
      <td> {e.status}</td>
      <td><button className="btn btn-success" onClick={()=>{redirect_page(e)}} > ViewDesign</button></td>
    </tr>
      )  
    
    }
    
  </tbody>
</table>
 
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default Admin
