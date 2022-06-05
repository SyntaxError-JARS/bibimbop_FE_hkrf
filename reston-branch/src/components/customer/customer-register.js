import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustomerRegistration() {
    const navigate = useNavigate();
    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    const balanceInput = useRef();
    const isAdminInput = useRef();
  

    const url = "https://bibimbop.azurewebsites.net/"
    async function customerReg(){
        
        const customer = {
    customerUsername: usernameInput.current.value,
    fName: fnameInput.current.value,
    lName: lnameInput.current.value,
    password: passwordInput.current.value,
    balance: balanceInput.current.value,
    isAdmin: isAdminInput.current.value,
        }
       
       if (customer.isAdmin == "1"){
        return navigate("/admin");
    }
        if (customer.password === "") {
            alert("You have failed to enter a password! Please try again!");
        if (customer.username === "")
                alert("You have failed to enter a username! Please try again!");
        }else navigate("/dashboard");

        try{
        const response = await axios.post(`${url}/customer` , customer)
        console.log(response.data)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }
    return(
        <>
        <h2>Welcome to Bibimbop</h2>
        <h2>Hello, new customer please register below.</h2>
        <br></br>
        <input placeholder="Enter Username" ref={usernameInput}></input>
        <br></br>
        
        <input placeholder="Enter First Name" ref={fnameInput}></input>
        <br></br>
        
        <input placeholder="Enter Last Name" ref={lnameInput}></input>
        <br></br>
        
        <input type="password" placeholder="Enter password" ref={passwordInput}></input>
        <br></br>
        
        <input placeholder="Enter Balance" ref={balanceInput}></input>
        <br></br>
        
        <input placeholder="Are you an Admin" ref={isAdminInput}></input>
        <br></br>
       
        <button type="button" class="btn btn-outline-warning btn-lg" onClick={customerReg}>Register</button>
        <br></br>
       <Link to="/login"> <button>Log In</button>  </Link>
        </>
    )
    }





// import React from "react";
// import { useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function CustomerRegister(){

// const navigate = useNavigate();


// const customerUsernameInput = useRef();
// const fNameInput = useRef();
// const lNameInput = useRef();
// const passwordInput= useRef();
// const balanceInput = useRef();
// const isAdminInput = useRef();

// const url = 'https://bibimbop.azurewebsites.net/';

//   //async-await INSERT URL NEEDED
//   async function register(){

// const user = {
//     customerUsername: customerUsernameInput.current.value,
//     fName: fNameInput.current.value,
//     lName: lNameInput.current.value,
//     password: passwordInput.current.value,
//     balance: balanceInput.current.value,
//     isAdmin: isAdminInput.current.value,
// };

//       try{
//       const response = await axios.post(`${url}/customer` , user)
//       console.log(response.data);
//       navigate("/dashboard");
//       } 
//       catch (error){
//           console.error(error.response.data);
//           console.log(error)
//         //alert(error.response.data);
//     }
//   }

// return(

//     <>
//     <h4>Hello, new customer please register below.</h4>
//     <input placeholder="Enter Username" ref={customerUsernameInput}></input>
//     <input placeholder="Enter First Name" ref={fNameInput}></input>
//     <input placeholder="Enter Last Name" ref={lNameInput}></input>
//     <input type= "password" placeholder="Create Password" ref={passwordInput}></input>
//     <input placeholder="Enter Balance" ref={balanceInput}></input>
//     <input placeholder="Are you an Admin" ref={isAdminInput}></input>
//     <button onClick={register}>Sign Up</button>
//     <Link to="/login">
//     <button>Log In</button>
//     </Link>
//     </>   

// )

// }