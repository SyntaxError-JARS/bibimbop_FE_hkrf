import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//set up functions to take in props, this takes some information in to then display below
export default function CustomerLogin(){

    const navigate = useNavigate(); 
    const customerUsernameInput = useRef();
    const url = "https://bibimbop.azurewebsites.net"
    const passwordInput = useRef();

    //obj destructuring to quickly and cleanly assign the variables from their keys in the props object
    async function login(){

        const customer = {
            customerUsername: customerUsernameInput.current.value,
            password: passwordInput.current.value,
        };
        
              try{
              const response = await axios.post(`${url}/auth`, customer)
              console.log(response.data);
              navigate("/dashboard");
              } 
              catch (error){
                  console.error(error.response.data);
                  alert(error.response.data);
            }
          }



    return(
        <>

            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Username" ref={customerUsernameInput}></input>
            <br></br>
            <input type="password" placeholder="Enter Password" ref={passwordInput}></input>
            <br></br>
            <button on onClick={login}>Log In</button>
            
           
        </>        
    )

}