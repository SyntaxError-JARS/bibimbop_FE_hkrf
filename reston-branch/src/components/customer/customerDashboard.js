import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CustomerDashboard() {
    const navigate = useNavigate ();

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <Link to = "/order"><button>Veiw and start new orders</button></Link>
      <button onClick={() => navigate("/update")}>Update Account</button>
    </div>
  )
}

export default CustomerDashboard
