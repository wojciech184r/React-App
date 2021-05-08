import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/header5.jpg';



const Header = () => {
        
    return ( 
        <>
        <Switch>
        <Route  path="/" exact render={() =>(
            <img src={img1} alt='city'/>
        )}/>
        <Route path="/products" render={() =>(
            <img src={img2} alt='city'/>
        )}/>
        <Route path="/contact" render={() =>(
            <img src={img3} alt='city'/>
        )}/>
        <Route path="/admin" render={() =>(
            <img src={img4} alt='city'/>
        )}/>
        <Route  path="/login" render={() =>(
            <img src={img5} alt='city'/>
        )}/>

        </Switch>    
        
        </>
     );
}
 
export default Header;