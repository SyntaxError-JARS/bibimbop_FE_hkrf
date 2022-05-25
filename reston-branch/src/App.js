import Intro from './components/intro';
import Customer from './components/customer';
import Menu from './components/menu';
import ContactUs from './components/contact-us';
const bryan = { fName: "Bryan", lName: "Serfozo", username: "bryser"};

//this function is consider a component for react, everything in react is built off components

//react uses a virtual dom, what it does is it renders a virtual and compares to the actual dom
function App() {
  return ( 
  <div className="App">
   <Intro />
   {/*string value is the only ones that dont require {}, these are passed in as a props object in key valued pairs*/}
   <h2>Customers</h2>
   <Customer fName={"Rick"} lName="Figueroa" username="rickfig" />
   <Customer fName={"Jacky"} lName="Koo" username="JackyKoo" />
   <Customer {...bryan} />
   <h2>Menu</h2>
   <Menu menu={["Chicken Bop","Beef Bop","Pork Bop","Veggie Bop","Tofu Bop"]} />
   <ContactUs />
  </div>
  );
}

export default App;
