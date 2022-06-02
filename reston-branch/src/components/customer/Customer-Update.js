import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustomerUpdate(){

const navigate = useNavigate();


const customerUsernameInput = useRef();
const fNameInput = useRef();
const lNameInput = useRef();
const passwordInput= useRef();
const balanceInput = useRef();
const isAdminInput = useRef();

const user = {};

  //async-await INSERT URL NEEDED
  async function update(){

const user = {
    customerUsername: customerUsernameInput.current.value,
    fName: fNameInput.current.value,
    lName: lNameInput.current.value,
    password: passwordInput.current.value,
    balance: balanceInput.current.value,
    isAdmin: isAdminInput.current.value,
};

      try{
      const response = await axios.post('https://bibimbop.azurewebsites.net/', user)
      console.log(response.data);
      navigate("/update");
      } 
      catch (error){
          console.error(error.response.data);
        alert(error.response.data);
    }
  }

return(

    <React.Fragment>
    <h4>Hello, Update account below.</h4>
    <input placeholder="Update Username" ref={customerUsernameInput}></input>
    <input placeholder="Update First Name" ref={fNameInput}></input>
    <input placeholder="Update Last Name" ref={lNameInput}></input>
    <input type= "password" placeholder="Update Password" ref={passwordInput}></input>
    <input placeholder="Update Balance" ref={balanceInput}></input>
    <input placeholder="Are you an Admin" ref={isAdminInput}></input>
    <button onClick={update}>Update Account</button>
    </React.Fragment>   

)

}