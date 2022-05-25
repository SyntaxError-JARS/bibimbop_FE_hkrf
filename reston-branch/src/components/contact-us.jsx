import { useRef } from "react"
export default function ContactUs(){
//hooks in react are special functions that almost ALWAYS start with the use that "supercharges" your functional components

const emailInput = useRef();

function sendEmail(){
    alert(`An email has been sent to ${emailInput.current.value}`);
}


return(
    //the below empty <>...</> is a React.Fragment
    <>
    <h3>Contact Us</h3>
    <input placeholder="Enter email address" ref={emailInput}/>
    <button onClick={sendEmail}>Send</button>

    </>)


}