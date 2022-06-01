import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//set up functions to take in props, this takes some information in to then display below
export default function CustomerLogin(){

    const navigate = useNavigate(); 
    const customerUsernameInput = useRef();
    const passwordInput = useRef();

    //obj destructuring to quickly and cleanly assign the variables from their keys in the props object
    async function login(){

        const user = {
            customerUsername: customerUsernameInput.current.value,
            password: passwordInput.current.value,
        };
        
              try{
              const response = await axios.post('http://localhost:8080/bibimbop/customer/auth', {method:"POST", body: JSON.stringify(user)})
              console.log(response.data);
              navigate("/dashboard");
              } 
              catch (error){console.error(error.response.data);
            }
          }



    return(
        <React.Fragment>

            {/* the above react.fragment allows you to return under a single parent tag that isnt impacted by the html structure and styling*/}
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Username" ref={customerUsernameInput}></input>
            <input type="password" placeholder="Enter Password" ref={passwordInput}></input>
            <button on onClick={login}>Login</button>
            
           
        </React.Fragment>        
    )

}