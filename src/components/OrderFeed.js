import { observer } from "mobx-react-lite"
import { store } from "../store"
import { OrderList } from "./OrderList"


export const OrderFeed = observer(()=>{
    if(store.OrderFeedState){
        return(
        <div className="OrderFeedBody">
            <h1>
                ORDER FEED
            </h1>
            <OrderList store={"_OrderList"}/>
        </div>



        )}else{return(<></>)}
    

})
