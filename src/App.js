import './App.css';
import OrderDetails from "./components/OrderDetails";
import axios from "axios";
import {useEffect, useState} from 'react'
function App() {
let orderId = '642652635bd781ad3b36d163';
    // const initialOrders = [
    //     {   _id: "order1",
    //         customer: "John Doe",
    //         total: 20.99,
    //         items: ["item1", "item2", "item3"],
    //         address: {
    //             street: '1234Abc',
    //             state: 'CA',
    //             ZipCode: '12345',
    //         },
    //         paymentDetails : {
    //
    //         }
    //     },
    //     { _id: "order2", customer: "Jane Smith", total: 15.99, items: ["item4", "item5"] },
    //     { _id: "order3", customer: "Bob Johnson", total: 10.99, items: ["item6", "item7", "item8", "item9"] }
    // ];

const[orders, setOrders] = useState([])
    const getOrders = () => {
      axios.get("https://deliveryapp-sever.herokuapp.com/user/642652635bd781ad3b36d15c/orders/642652635bd781ad3b36d169")
          .then(res=>
            console.log(res.data)
            //  setOrders(res.data)
          ).catch(err =>
            console.log(err)
        )
    }
    useEffect(() => {
        getOrders()
    }, [])
  return (
    <div className="App">
        {orders.filter(el=> el._id === orderId).map(el => <OrderDetails key={el._id} order={el} />)}
    </div>
  );
}

export default App;
