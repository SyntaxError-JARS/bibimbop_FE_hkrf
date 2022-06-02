export default function MenuUpdate() {
    
    
    async function MenuUpdate(){

        const menu = {
            
            menuItem: menuItemInput.current.value,
            cost: costInput.current.value,
            protein: proteinInput.current.value,
            isSubstitutable: isSubstitutableInput.current.value,
        
        }
        
        try{
        const response = await axios.post(`${url}/menu/menuupdate` , menu)
        // balance = 0;
        // isAdmin = false;
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h2>Welcome to BibimBop</h2>
        <h2>Please Update The Menu Below</h2>
        <br></br>
        <input placeholder="Enter Menu item" ref={menuItem}></input>
        <br></br>
        <input placeholder="Enter cost" ref={costInput}></input>
        <br></br>
        <input placeholder="Enter protein" ref={proteinInput}></input>
        <br></br>
        <input placeholder="Enter Substitute" ref={isSubstitutableInput}></input>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-outline-secondary" onClick={MenuUpdate}>Log In!</button>
        </>
    )
    }
