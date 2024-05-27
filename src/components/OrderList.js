import { observer } from "mobx-react-lite";
import { store } from "../store";
import { Order } from "./Order";
import { toJS } from "mobx";
import "../style/main.css"

export const OrderList = observer((props)=>{
    const orderList = store[props.store];
    if (!Array.isArray(orderList)) {
        console.error(`store[${props.store}] is not an array`);
        return console.log(toJS(store));
    }
    if(store._OrderList.length===0){
    return(
        <div className="NoOrdersMess">                
                Not a single order yet
            </div>
    )
    }else{ console.log(toJS(store.ActiveOrderList))
        return(
            <div className="OrderList">
               
                {orderList.map(order=> <Order key={order._id} store={props.store} orderId={order._id} time={order.time} place_name={order.place_name} adresses={order.adresses} cost={order.cost} total={order.total}/>)}
            </div>
        )
    }
})