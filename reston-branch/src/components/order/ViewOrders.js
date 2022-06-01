import { useEffect, useState } from "react";

export default function Orders(){

    const [ordersBody, setOrdersBody] = useState([]);

    useEffect(() => {
        findAll();
    }, []);

    async function viewAll(){
        try{
            const response = await fetch("http://localhost:8080/bibimbop/order");
            const orders = await response.jason();
            const orderTableRows = orders.map((e) => {
                return (
            <tr>
                <td>{e.id}</td>
                <td>{e.menuItem}</td>
                <td>{e.comment}</td>
                <td>{e.is_favorite}</td>
                <td>{e.order_date}</td>
                <td>{e.customer_username}</td>
            </tr>
            );
            });
            setOrdersBody(orderTableRows);
            console.log(orders);}
            catch (e) {
                console.error(e);
        }
    }
    return (
        <>
        
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Menu Item</th>
                <th>Comment</th>
                <th>Favorite</th>
                <th>Order Date</th>
                <th>Customer Username</th>
                </tr>
            </thead>
            <tbody>{ordersBody}</tbody>
        </table>
        </>
    )


}