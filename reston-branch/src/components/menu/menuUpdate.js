import React from "react";
import { useRef } from "react";
import axios from "axios";

export default function UpdateMenuItem() {

    const menuItemInput = useRef();
    const costInput = useRef();
    const proteinInput = useRef();
    const isSubstitutableInput = useRef();

    const url = "https://bibimbop.azurewebsites.net/"

    async function updatemenuItems(){

        const menu = {
            menuItem: menuItemInput.current.value,
            cost: costInput.current.value,
            protein: proteinInput.current.value,
            isSubstitutable: isSubstitutableInput.current.value,
        }

        if (menu.menuItem === "") {
            alert("Please enter menu item");
        }
        try{
            const response = await axios.post(`${url}/menu` , menu )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }

    return (
    
        <>
        <h4>Update menu item below</h4>
        <input placeholder="Enter Menu item" ref={menuItemInput}></input>
        
        <br></br>
        <input placeholder="Enter cost" ref={costInput}></input>
        
        <br></br>
        <input  placeholder="Enter protein" ref={proteinInput}></input>
        
        <br></br>
        <input placeholder="Is the item substitutable?" ref={isSubstitutableInput}></input>
        
        <br></br>
        <button class="btn btn-primary btn-lg" onClick={updatemenuItems}>Update Menu Item</button>
        </>
        
        );
    

}




// export default function MenuUpdate() {
    
    
//     async function MenuUpdate(){

//         const menu = {
            
//             menuItem: menuItemInput.current.value,
//             cost: costInput.current.value,
//             protein: proteinInput.current.value,
//             isSubstitutable: isSubstitutableInput.current.value,
        
//         }
        
//         try{
//         const response = await axios.post('https://bibimbop.azurewebsites.net/' , menu)
        
//         console.log(response)
//         } catch(error){
//             console.error(error.response.data)
//             console.log(error)
//         }
//     }

//     return(
//         <>
//         <h2>Welcome to BibimBop</h2>
//         <h2>Please Update The Menu Below</h2>
//         <br></br>
//         <input placeholder="Enter Menu item" ref={menuItemInput}></input>
//         <br></br>
//         <input placeholder="Enter cost" ref={costInput}></input>
//         <br></br>
//         <input placeholder="Enter protein" ref={proteinInput}></input>
//         <br></br>
//         <input placeholder="Enter Substitute" ref={isSubstitutableInput}></input>
//         <br></br>
//         <br></br>
//         <button type="button" class="btn btn-outline-secondary" onClick={MenuUpdate}>Log In!</button>
//         </>
//     )
//     }
