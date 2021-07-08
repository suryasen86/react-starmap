import React from 'react'
import ScriptTag from 'react-script-tag';
// import Hadmin from '../admin/Hadmin';





const Demo =({Data})=>{ 
  
    return (
    <>
    <ScriptTag type="text/javascript">
         Celestial.display({JSON.stringify(Data)});
     </ScriptTag>
    </>
    )}
export default function GetStar() {

    const [Data, setData] = React.useState({
        location: true,
        geopos:[17.496576,70.843095],
        form: true,
        advanced:true,
        background: { fill: "#000", stroke: "#000000", opacity:1},
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

      const [Datapage, setDatapage] = React.useState({})

  React.useEffect(() => {

      var data=localStorage.getItem("Map")
    if(data)
    {
        let element=document.getElementById("celestial-form")
        if(element!==null)
        {
          // element.innerHTML=''
          element.style.display='none';
        }

    //   setDatapage(JSON.parse(data))
    }
    return () => {}

  }, [localStorage.getItem('Map')])


  React.useEffect(()=>{

    if(Datapage.userid)
    {
     let location= JSON.parse(Datapage.orderdetail)
     if(location.lat)
     {
        //  setData((pre)=>({...pre,geopos:[location.lat,location.lng]}))
        let element=document.getElementById("celestial-form")
        if(element!==null)
        {
          // element.innerHTML=''
          element.style.display='block';
        }
     }
    }

  },[Datapage])


      React.useEffect(()=>{
        let element=document.getElementById("celestial-form")
        if(element!==null)
        {
            let canvas = document.getElementById("download");
            canvas.setAttribute("style","display:block")
        }
        return () => {}
      }, [Data,Datapage])


    return (
      <>
        <div>
     
                <div className="starmap_box_circle1" id="celestial-map" style={{width:'fit-content',height:'fit-content'}} ></div>
        <Demo Data={Data} />

        </div>
        {/* <button className="btn btn-danger"> download buttonn </button> */}
        </>
    )
}
