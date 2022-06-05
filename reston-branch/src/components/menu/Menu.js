import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Menu() {

  const navigate = useNavigate();
  const [menuBody, setMenuBody] = useState([]);

  useEffect(() => {
      viewAll();
  }, []);

  async function viewAll(){
      try{

        
          const response = await fetch("https://bibimbop.azurewebsites.net/menu");
          const menu = await response.jason();
          const menuTableRows = menu.map((e) => {
              return (
          <tr>
            
              <td>{e.menuItem}</td>
              <td>{e.cost}</td>
              <td>{e.protein}</td>
              <td>{e.isSubstitutable}</td>
          </tr>
          );
          });
          setMenuBody(menuTableRows);
          console.log(menu);}
          catch (e) {
              console.error(e);
      }
  }
  return (
      <>
      <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <table className='menuList'>
          <thead>
              <tr>
              <th>Menu Item</th>
              <th>Cost</th>
              <th>Protein</th>
              <th>Substitute</th>
              </tr>
          </thead>
          <tbody>{menuBody}</tbody>
      </table>
      <button onClick={() => navigate("/order")}>Order Now</button>
      </div>
      </>
  )
  
}

export default Menu
