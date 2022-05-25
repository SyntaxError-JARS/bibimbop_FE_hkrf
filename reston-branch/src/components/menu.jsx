export default function Menu(props){
   

    const menuList = props.menu.map((e) => <li>{e}</li>)
     return(
         <ul>{menuList}</ul>
     )
}