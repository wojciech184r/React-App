import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = (props) => {
    return ( 
        <div>
            <h2>Footer</h2>
            <Route path="/" exact render={(props)=>(
                
                    <p>You are on <span>Home Page</span></p>
            )}/>
             <Route path="/:page"  render={(props)=>{
                return(
                    <p>You are on <span>{props.match.params.page}</span> Page </p>
                )
            
            }}/>
        </div>
     );
}
 
export default Footer;