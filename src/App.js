
import './App.css';
 
import Home from './Home';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Contact from './Contact';
import Login from './Login';
import Work from './Work';
import Error from './Error';
import Register from './Register';
import Account from './Account';
import Admin from './Admin'
import Checkout from './Checkout';
import Custom from './custom/index'
import Privacy from './terms/Privacy';
import Return from './terms/Return';
import CustomAdmin from './admincustom';
import AdminCustom from './admin_custom'
import Terms from './terms/Terms';
import Cookies from './terms/Cookies';
import GetStar from './admin/getstar';

const checktoken=()=>{

  if(localStorage.getItem("auth")){

    return true
    }
  return false
}


 const autent={
    isLogin:checktoken(),
  
    authenticate(cb)
    {
        this.isLogin=true
        setTimeout(cb,100)
    },
    singout(cb)
    {
      this.isLogin=false
      localStorage.clear()
      setTimeout(cb,100)
    }
}


export {autent}

function App() {





const ProtectedRouter=({component:Component,...rest})=>(
  <Route {...rest} render={(props)=>(
    autent.isLogin?<Component  {...props}/>:window.location='/login'
  )}/>)




  return (
     <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/customization" component={Custom} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/login" component={Login} exact/>
                <Route path="/work" component={Work}  exact/>
                <Route path="/return" component={Return}  exact/>
                <Route path="/terms" component={Terms}  exact/>
                <Route path="/cookies" component={Cookies}  exact/>
                <Route path="/checkout" component={Checkout}  exact/>
                <Route path="/register" component={Register} exact />
                <Route path="/privacy" component={Privacy} exact />
                <ProtectedRouter path="/admin" component={Admin} exact />
                <ProtectedRouter path="/getstar" component={GetStar} exact />
                <ProtectedRouter path="/admincustomization" component={CustomAdmin} exact />
                <ProtectedRouter path="/admin-customization" component={AdminCustom} exact />

                <Route component={Error} />
            </Switch>
     
  </>
   
  );
}

export default App;
