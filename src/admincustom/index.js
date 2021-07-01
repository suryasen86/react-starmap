import React from 'react';
import ScriptTag from 'react-script-tag';
// import $ from 'jquery';
import './custom.css';
import Hadmin from '../admin/Hadmin';

import html2canvas from 'html2canvas'


const Demo =({Data})=>{ 
  
  return (
  <>
  <ScriptTag type="text/javascript">
       Celestial.display({JSON.stringify(Data)});
   </ScriptTag>
  </>
  )}


  

function CustomAdmin() {

  const [Datapage, setDatapage] = React.useState({})

  React.useEffect(() => {

      var data=localStorage.getItem("Map")
    if(data)
    {
      setDatapage(JSON.parse(data))
    }
    return () => {}

  }, [localStorage.getItem('Map')])



const [Image, setImage] = React.useState([
 "/background/Star_Map_Bird_Blue.png",
 "/background/Star_Map_Bird_Pink.png",
 "/background/Star_Map_Boy_Face_Web.png",
 "/background/Star_Map_Girl_Face_web.png",
 "/background/Star_Map_Heart_white_web.png",
 "/background/Star_Map_Star_web.png",
 "/background/Star_Map_Vine_web.png",
 "/background/Star_Map_Heart_Full_web.png",
 "/background/Star_Map_Planet_Line_web.png",
 "/background/Star_Map_Heart_Black_web.png",
])


const ref=React.createRef()



const [Data, setData] = React.useState({
  location: true,
  geopos:[17.496576,70.843095],
  form: false,
  advanced:true,
  background: { fill: "#3629ac", stroke: "#000000", opacity:1},
  projection: "airy",
  datapath: "./data/",
  daterange:[1,1],
  planets:  { show: false },
  stars: {
    colors: false,
    names: false,
    style: { fill: "#fff", opacity:0.7 },
    limit: 50,
    size: 1
  },
  horizon:{show:true},
  dsos: { show: false },
  constellations: {
    show: true,    // Show constellations
    names: false,   // Show constellation names
    desig: false,   // Show short constellation names (3 letter designations)
    nameStyle: { fill:"#fff", align: "left", baseline: "middle", opacity:0.8,
                 font: ["bold 7px Helvetica, Arial, sans-serif",  // Different fonts for brighter &
                        "bold 7px Helvetica, Arial, sans-serif",  // sdarker constellations
                        "bold 7px Helvetica, Arial, sans-serif"]},
    lines: true,   // Show constellation lines
    linestyle: { stroke: "#ffff", width:1, opacity: 0.8 },
    bounds: false,  // Show constellation boundaries
    boundstyle: { stroke: "#ffff",  width: 0, opacity: 0.8, dash: [2, 4] }
  },
  background: {        // Background style
    fill: "transparent",   // Area fill
    opacity: 0.1, 
    stroke: "#fff", // Outline
    width: 0.05
  }, 
  planets: { show: false},
  mw: {
    show: false,    // Show Milky Way as filled polygons
  },
  interactive:false,
  lines: {
    graticule: { show: false, stroke: "#cccccc", width: 0.5, opacity: 0.1,      // Show graticule lines
      // grid values: "outline", "center", or [lat,...] specific position
      // lon: {pos: ["center"], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"},
      // // grid values: "outline", "center", or [lon,...] specific position
      // lat: {pos: ["center"], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"}
    },
    equatorial: { show: false, stroke: "#fff", width: 1.3, opacity: 0.7 },    // Show equatorial plane
    ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 },      // Show ecliptic plane
    galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },     // Show galactic plane
    supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 } // Show supergalactic plane
}
})
  


const [lat, setlat] = React.useState(17.496576)
const [lng, setlng] = React.useState(70.843085)


const lat_lng=(lat,lng)=>{
  setlng(lng)
  setlat(lat)
  setData((pre)=>({...pre,geopos:[lat,lng]}))
}



const [ImageCount, setImageCount] = React.useState(0)
const [Body, setBody] = React.useState("Image")
const [info, setinfo] = React.useState({heading:"Hey...",message:"No Matter What I will Love You Always...",location:"Mumbai 1 N ,17 E",place:"Here",lat:"17.496576",log:"70.843095"})
const [Formview, setFormview] = React.useState(['Image','Movement','Text','Size'])

console.log(Datapage)


React.useEffect(()=>{

  if(Datapage.userid)
  {
    setinfo(JSON.parse(Datapage.orderdetail))
    setImageCount(JSON.parse(Datapage.orderdetail).ImageCount)
  }

},[Datapage])


React.useEffect(()=>{
    let element=document.getElementById("celestial-form")
    let container=document.getElementById("celestial-map")
    if(element!==null)
    {
      // element.innerHTML=''
      element.style.display='none';
      container.style.width='fit-content'
      container.style.height='fit-content' 
    }
    return () => {}
  }, [ImageCount,Body,info,Image,Data,Datapage])


  function change(){
    let count=Formview.indexOf(Body)
    if(count+1==Formview.length)
    {
      setBody('Size')
    }
    else{
      setBody(Formview[count+1])
    }
  }
 

 






async function get_image(){
  
  let image=await document.getElementById("starmap_box1");
  html2canvas(image).then(canvas => 
    {
      canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      console.log(canvas.toDataURL())
      var a =document.createElement("a")
      a.download='StarMap.png'
      a.rel = "noopener";
      a.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      a.click();
    }
  )
}





  return (
    <>
    <Hadmin/>
   {
     Datapage.userid?

    <section className="customise1">
        <div className="starmapping-frame1 mapcontainer1">
          <div className="starmap_box1" id="starmap_box1" ref={ref}>
            <img src={`${Image[ImageCount]}`}/>
                <div className="starmap_box_circle1" id="celestial-map" style={{width:'fit-content',height:'fit-content'}} ></div>
                <p className="admin-h" style={ImageCount>7?{color:'white',bottom:'20%'}:{bottom:'20%'}}>{info.heading}</p>
                <p className="admin-m" style={ImageCount>7?{color:'white',bottom:'15%'}:{bottom:'15%'}}>{info.message}</p>
                <p  className="admin-l" style={ImageCount>7?{color:'white',bottom:'10%'}:{bottom:'10%'}}>{info.location}</p>
                <p  className="admin-p" style={ImageCount>7?{color:'white',bottom:'5%'}:{bottom:'5%'}}>{info.place}</p>
          </div>
        </div>
          <button className="btn btn-success " style={{position:'absolute', top:'5px', left:'50%'}} onClick={()=>get_image()} >Download Map</button>

     
        <Demo Data={Data} />
    </section>
    :<h1 style={{color:'white',textAlign:'center'}}>Loading Data</h1>
    }
  </>
  );
}




export default CustomAdmin;
