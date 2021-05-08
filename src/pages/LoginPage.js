import React, { Component } from 'react';
import AdminPage from './AdminPage';
// import AdminPage from './AdminPage';


class LoginPage extends Component {

    constructor(props) {
        super(props);
         this.state = {
            user: false,
    //         login:'123',
    //         password:'aaa',
    //         inputLogin:'',
    //         inputPassword:'',
        };
      }
   
      handleSetUser = () =>{
        
          this.setState({
              user:true
              
          })
      }



    // handleChangeUser = (e) => {
        
    //     e.preventDefault();
    //     if( this.state.inputLogin === this.state.login && this.state.inputPassword === this.state.password){
    //         this.setState({
    //            user:true
    //         });
    //     }

    //  }

    //  handleLoginOnChange =(e) => {
    //      this.setState({
    //          inputLogin: e.target.value
    //      })
    //  }
    //  handlePasswordOnChange =(e) => {
    //     this.setState({
    //         inputLogin: e.target.value
    //     })
    // }



    render() { 
        return (
      <>
        <div className="login">
           
            <label htmlFor="login"> Log in: <input type="text" name="login" /></label>
            <label htmlFor="password"> Password: <input type="password" name="password" /></label>
            <button >Log In</button>
           
        </div>
        <AdminPage name={this.state.user}/>
        </>
        )
           
    }
}
 
export default LoginPage;


// onChange={this.handlePasswordOnChange}