import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Order(){

const navigate = useNavigate();


const idInput = useRef();
const menuItemInput = useRef();
const commentInput = useRef();
const isFavoriteInput= useRef();
const orderDateInput = useRef();
const customerUsernameInput = useRef();

const user = {};

  //async-await INSERT URL NEEDED
  async function Order(){

const user = {
    id: idInput.current.value,
    menuItem: menuItemInput.current.value,
    comment: commentInput.current.value,
    isFavorite: isFavoriteInput.current.value,
    orderDate: orderDateInput.current.value,
    customerUsername: customerUsernameInput.current.value,
};

      try{
      const response = await axios.post('http://localhost:8080/bibimbop/customer', user)
      console.log(response.data);
      navigate("/creditCard");
      } 
      catch (error){
          console.error(error.response.data);
        alert(error.response.data);
    }
  }

return(

    <React.Fragment>
    <h4>Hello, new customer please register below.</h4>
    <input placeholder="Enter Id" ref={idInput}></input>
    <input placeholder="Please enter Menu item" ref={menuItemInput}></input>
    <input placeholder="Please enter any Comments" ref={commentInput}></input>
    <input placeholder="Would you like to mark as favorite?" ref={isFavoriteInput}></input>
    <input placeholder="Please enter date" ref={orderDateInput}></input>
    <input placeholder="Please enter Username" ref={customerUsernameInput}></input>
    <button onClick={Order}>Place Order</button>
    
    </React.Fragment> 
)}
