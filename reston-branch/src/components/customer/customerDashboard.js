import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function CustomerDashboard() {
    const navigate = useNavigate ();

   
 
    return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <Link to = "/vieworders"><button>Veiw past orders</button></Link>
      <button onClick={() => navigate("/update")}>Update Account</button>
      <button onClick={() => navigate("/creditcard")}>Payment information</button>
      <button onClick={() => navigate("/delete")}>Delete Account</button>
    </div>
  )
  
}

export default CustomerDashboard
