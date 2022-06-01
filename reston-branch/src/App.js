
//this function is consider a component for react, everything in react is built off components
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerWelcome from "./components/customer/CustomerWelcome";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import CustomerDashboard from "./components/customer/customerDashboard";


//react uses a virtual dom, what it does is it renders a virtual and compares to the actual dom
function App() {
  return ( 
    <div className="App">
  <>
<BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="register" element={<CustomerRegister />} />
    <Route path="menu" element={<Menu />} />
    <Route exact path="/" element={<CustomerWelcome />} />
    <Route path="dashboard" element={<CustomerDashboard />} />
    <Route path="login" element={<CustomerLogin />} />
  </Routes>
  <Footer />
</BrowserRouter>
  </>
  </div>
  );
}

export default App;
