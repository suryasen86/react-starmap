import React from 'react';
import axios from 'axios';


export default function Location({lat_lng}) {
        const [address, setaddress] = React.useState("")


        const getlocation=()=>{
        axios.get(`https://open.mapquestapi.com/geocoding/v1/address?key=DJHa0vAAWRQgACylHGbu1JFDXM91sGyb&location=${address}`)
        .then((res)=>{
          if(Array.isArray(res.data.results)&&res.data.results.length)
          {
            if(Array.isArray(res.data.results[0].locations)&&res.data.results[0].locations.length)
            {
              if(res.data.results[0].locations[0].latLng)
              {
                let data=res.data.results[0].locations[0].latLng
                lat_lng(data.lat,data.lng,address)
              }
            }
          }
        })
        .catch((e)=>{
          // lat_lng(34.016242,138.435295)
        })

        }


    return (
        <>
          <input type="text" placeholder="Mumbai,india" onChange={(e)=>setaddress(e.target.value)}/>
          <button onClick={()=>getlocation()}>Change location</button>

        </>
    )
}
