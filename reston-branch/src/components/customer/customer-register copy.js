import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustomerRegister(){

const navigate = useNavigate();


const customerUsernameInput = useRef();
const fNameInput = useRef();
const lNameInput = useRef();
const passwordInput= useRef();
const balanceInput = useRef();
const isAdminInput = useRef();

const user = {};

  //async-await INSERT URL NEEDED
  async function register(){

const user = {
    customerUsername: customerUsernameInput.current.value,
    fName: fNameInput.current.value,
    lName: lNameInput.current.value,
    password: passwordInput.current.value,
    balance: balanceInput.current.value,
    isAdmin: isAdminInput.current.value,
};

      try{
      const response = await axios.post('http://localhost:8080/bibimbop/customer', user)
      console.log(response.data);
      navigate("/dashboard");
      } 
      catch (error){
          console.error(error.response.data);
        alert(error.response.data);
    }
  }

return(

    <React.Fragment>
    <h4>Hello, new customer please register below.</h4>
    <input placeholder="Enter Username" ref={customerUsernameInput}></input>
    <input placeholder="Enter First Name" ref={fNameInput}></input>
    <input placeholder="Enter Last Name" ref={lNameInput}></input>
    <input type= "password" placeholder="Create Password" ref={passwordInput}></input>
    <input placeholder="Enter Balance" ref={balanceInput}></input>
    <input placeholder="Are you an Admin" ref={isAdminInput}></input>
    <button onClick={register}>Sign Up</button>
    <Link to="/login">
    <button>Log In</button>
    </Link>
    </React.Fragment>   

)

}