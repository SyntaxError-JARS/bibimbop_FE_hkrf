import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function CustomerDashboard() {
    const navigate = useNavigate ();

    const [customerBody, setCustomerBody] = useState([]);

    try{

        const response = fetch("https://bibimbop.azurewebsites.net/customer");
        const customer = response.jason();
        const customerTableRows = customer.map((e) => {
            
        function deleteCustomer(e){
            fetch(`https://bibimbop.azurewebsites.net/customer/${e}`,{
                method:'DELETE'
            }).then((result)=>{
                result.json().then((response)=>{
                    console.warn(response)
                })
            })
        }

            return (
        <div>
        <tr>
          <p>Customer</p>
            <td>{e.customerUsername}</td>
            <td>{e.fName}</td>
            <td>{e.lName}</td>
            <td>{e.password}</td>
            <td>{e.balance}</td>
            <td>{e.isAdmin}</td>
            <td><button onClick={()=>deleteCustomer(e)}>Delete</button></td>
        </tr>
        </div>
        );
        });
        setCustomerBody(customerTableRows);
        console.log(customer);}
        catch (e) {
            console.error(e);
    }
 
    return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <Link to = "/vieworders"><button>Veiw past orders</button></Link>
      <button onClick={() => navigate("/update")}>Update Account</button>
      <button onClick={() => navigate("/creditcard")}>Payment information</button>
    </div>
  )
  
}

export default CustomerDashboard
