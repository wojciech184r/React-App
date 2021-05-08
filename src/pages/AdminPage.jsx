import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const AdminPage = ({user}) => {
    
    const permission = false;
    
  const handleOnClick = (e) =>{
       e.preventDefault();
       if({user}){
           this.setState({
               permission:true
           })
       }
   }

    return ( 
        <>
        <Route render={()=>(
            permission ? (<h3>Admin Panel Welcome</h3>) : (
                <Redirect to="/login"/>
                
            )
        )}/>
        <button onClick={handleOnClick}></button>
        </>
     );
}
 
export default AdminPage;