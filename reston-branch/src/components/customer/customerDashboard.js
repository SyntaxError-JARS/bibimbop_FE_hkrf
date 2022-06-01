import React from "react";
import { Link } from "react-router-dom";

function customerDashboard() {
  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <Link to = "/order">Veiw and start new orders</Link>
    </div>
  )
}

export default customerDashboard
