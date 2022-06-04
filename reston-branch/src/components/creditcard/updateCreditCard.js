import { useRef } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function UpdateCreditCard(){

    const [creditcardBody, setcreditcardBody] = useState([]);


const ccNumberInput = useRef();
const ccNameInput = useRef();
const cvvInput = useRef();
const expDateInput= useRef();
const zipInput = useRef();
const limitsInput = useRef();
const customerUsernameInput = useRef();

const user = {};

  //async-await INSERT URL NEEDED
  async function Update(){

    const user = {
        ccNumber: ccNumberInput.current.value,
        ccName: ccNameInput.current.value,
        expDate: expDateInput.current.value,
        zip: zipInput.current.value,
        limits: limitsInput.current.value,
        customerUsername: customerUsernameInput.current.value,
    };

      try{
      const response = await axios.post('https://bibimbop.azurewebsites.net/creditcard', user)
      console.log(response.data);
      } 
      catch (error){console.error(error.response.data);
    }
  }

return(

    <React.Fragment>
    <h4>Hello, update payment information below.</h4>
    <input placeholder="ccNumber" ref={ccNumberInput}></input>
    <input placeholder="ccName" ref={ccNameInput}></input>
    <input placeholder="cvv" ref={cvvInput}></input>
    <input placeholder="expDate" ref={expDateInput}></input>
    <input placeholder="zip" ref={zipInput}></input>
    <input placeholder="limits" ref={limitsInput}></input>
    <input placeholder="customerUsername" ref={customerUsernameInput}></input>
    <button onClick={Update}>Update Payment</button>
    </React.Fragment> 



)
}