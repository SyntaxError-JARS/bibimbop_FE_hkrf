import React from "react";
import axios from "axios";
import { useRef } from "react";

export default function MenuDelete() {

        const menuItemInput = useRef();
        const costInput = useRef();
        const proteinInput = useRef();
        const isSubstitutableInput = useRef();
    
        const url = "https://bibimbop.azurewebsites.net/"
    
        async function deletemenuItems(){
    
            const menu = {
                menuItem: menuItemInput.current.value,
                cost: costInput.current.value,
                protein: proteinInput.current.value,
                isSubstitutable: isSubstitutableInput.current.value,
            }
    
            if (menu.menuItem === "") {
                alert("Please enter a menu item");
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
            <h4>Delete menu item below!</h4>
            <input placeholder="Enter Menu item" ref={menuItemInput}></input>
        
             <br></br>
            <input placeholder="Enter cost" ref={costInput}></input>
        
            <br></br>
            <input  placeholder="Enter protein" ref={proteinInput}></input>
        
            <br></br>
            <input placeholder="Is the item substitutable?" ref={isSubstitutableInput}></input>
        
            <br></br>
            <button class="btn btn-warning btn-lg" onClick={deletemenuItems}>Delete Menu Item</button>
            </>
            
            );
        
    
    }