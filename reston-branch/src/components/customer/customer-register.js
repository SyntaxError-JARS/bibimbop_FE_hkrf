import { useRef } from "react";
import axios from "axios";

export default function CustomerRegister(){


const customerUsername = useRef();
const fName = useRef();
const lName = useRef();
const password= useRef();
const balance = useRef();
const isAdmin = useRef();

const user = {};

  //async-await INSERT URL NEEDED
  async function register(){
      try{
      const response = await axios.post('url', {method:"POST", body: JSON.stringify(user)})
      console.log(response.data);
      } 
      catch (error){console.error(error.response.data);
    }
  }

return(

    <>
    <h4>Hello, new customer please register below.</h4>
    <input placeholder="Enter Username" ref={customerUsernameInput}></input>
    <input placeholder="Enter First Name" ref={fNameInput}></input>
    <input placeholder="Enter Last Name" ref={lNameInput}></input>
    <input placeholder="Create Password" ref={passwordInput}></input>
    <input placeholder="Enter Balance" ref={balanceInput}></input>
    <input placeholder="Are you an Admin" ref={isAdminInput}></input>
    <button onClick={register}>Sign Up</button>
    </>

)

}