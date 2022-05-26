import React from "react";


//set up functions to take in props, this takes some information in to then display below
export default function CustomerLogin(props){

    //const fName = props.fName;
    //const lName = props.lName;
    //const username = props.username;

    //obj destructuring to quickly and cleanly assign the variables from their keys in the props object
    const { fName, lName, username } = props;



    return(
        <React.Fragment>

            {/* the above react.fragment allows you to return under a single parent tag that isnt impacted by the html structure and styling*/}
            <h4>Customer please log in below</h4>
            <h5>First Name: {fName} </h5>
            <h5>Last Name: {lName}</h5>
            <h5>Username: {username}</h5>
        </React.Fragment>        
    )

}