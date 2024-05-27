import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import "../style/main.css"
import { Map } from "./Map";
import { useState } from "react";
// import { store } from "../store";
import { BiChevronDownCircle,BiCheckCircle } from "react-icons/bi";
import { store } from "../store";
import { acceptOrder, completeOrder } from "../http/OrderAPI";
import { toActiveOrder } from "../http/UserAPI";
export const Order = observer((props)=>{
    const [showMap, setShowMap] = useState(false);
    const handleClick = (target) => {
        setShowMap(prev => !prev);
        showMap ?  target.classList.remove('Rotate'):target.classList.add('Rotate')
    }
     const  handleClick2 = async()=>{
        if(props.store == "_OrderList"){
            const orderId = await acceptOrder(props.orderId)
            // console.log(props.orderId,' accepted')
            store.OrderList = store.OrderList.filter(order => order._id !== orderId._id)
            const toActive = await toActiveOrder(orderId._id)
            store.history = toActive.history
            // console.log(toJS(store.history))
        }else if(props.store == "_ActiveOrderList"){
            const orderId = await completeOrder(props.orderId)
            // console.log(props.orderId,' completed')
            store.ActiveOrderList = store.ActiveOrderList.filter(order => order._id !== orderId._id)
        }
    }

    return(

        <div className="Order">
            <div className="OrderBody">
            <div>
                <span className="OrderName">{props.place_name}</span>
                <span className="OrderTime">{props.time}</span>
            </div>
            {/* <div>
                
            </div> */}
            <div>
                <span className="OrderAdresses">{props.adresses[0]} - {props.adresses[1]}</span>
                <button className="OrderMapBtn">check on map</button>
            </div>
            <div className="OrderPrice">
                <span className="OrderCost">The cost of the order:<span>{props.cost}</span></span>
                <span className="OrderTotal">The total cost:<span>{props.total}</span></span>
            </div>
        <div style={{display:"flex", flexDirection:"row"}} className="OrderButtons">
                <div className="OrderButton" onClick={e => handleClick(e.target)}><BiChevronDownCircle  /></div>
                <div onClick={()=>handleClick2()} className="OrderButton" ><BiCheckCircle /></div>
            </div>
            </div>
            {showMap &&<Map className="Map" />}
        </div>
    )
    
})