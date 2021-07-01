
import './App.css';
import Header from './MyComponents/Header';
import Landing from './MyComponents/Landing';
import Footer  from  './MyComponents/Footer';
function Home() {
  return (
     <>
     
      <Header home={true} /> 
      <Landing /> 
      <Footer />
  
  </>
   
  );
}

export default Home;
