import { observer } from "mobx-react-lite"
import { store } from "../store"
import { OrderList } from "./OrderList"

export const ActiveOrders = observer(() =>{
    if(store.ActiveOrdersState){
        return(
            <div className="ActiveOrdersBody">
                <h1>ACTIVE ORDERS</h1>
                <OrderList store={"_ActiveOrderList"}/>
            </div>
        )
    }else{return(<></>)}

})