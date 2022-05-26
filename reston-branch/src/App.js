
//this function is consider a component for react, everything in react is built off components

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerWelcome from "./components/customer/customer-welcome";
import NavBar from "./components/navbar";
//react uses a virtual dom, what it does is it renders a virtual and compares to the actual dom
function App() {
  return ( 
  <>
<BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="login" element={<CustomerLogin />} />
    <Route path="register" element={<CustomerRegister />} />
    <Route exact path="" element={<CustomerWelcome />} />
  </Routes>

</BrowserRouter>
  </>
  );
}

export default App;
