import React from 'react'
import { useEffect, useState } from "react";

function Menu() {
  const [menuBody, setMenuBody] = useState([]);

  useEffect(() => {
      viewAll();
  }, []);

  async function viewAll(){
      try{
          const response = await fetch("http://localhost:8080/bibimbop/menu");
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
      </div>
      </>
  )
  
}

export default Menu
