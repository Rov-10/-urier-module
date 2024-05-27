import { observer} from "mobx-react-lite";
import { toJS } from "mobx";
import { store } from "../store";
import { CgClose } from "react-icons/cg";
import { useRef } from "react";
import { v4 } from "uuid";
import { createOrder } from "../http/OrderAPI";

export const OrderForm = observer(()=>{

    const place_name = useRef(null)
    const adress_place = useRef(null)
    const adress_order = useRef(null)
    const cost = useRef(null)
    const total = useRef(null)
    
    const now = new Date();
    const gmt3Time = now.getTime() + (3 * 60 * 60 * 1000);
    const timestamp =  new Date(gmt3Time).toISOString().split("").slice(11, 16).join("")
    
    const handleClick = () => {
        // console.log(`${place_name.current.value}\n${adress_place.current.value}\n${adress_order.current.value}\n${cost.current.value}\n${total.current.value}`)
        let order;
        if(place_name.current.value===""||adress_place.current.value===""||adress_order.current.value===""||cost.current.value===""||total.current.value===""){}else{
            order = {
                id: v4(),
                time: timestamp,
                place_name: place_name.current.value,
                adresses: [adress_place.current.value, adress_order.current.value],
                cost: Number(cost.current.value),
                total: Number(total.current.value),
                checked: false,
                active: false,
                completed: false
            }
        }
        // store.pushToOrderList(order);
        store.Order=order
        createOrder(order)

        // console.log(toJS(store.OrderList))     
    }  
    if(store.OrderFormState){
    return(
        <div className="OrderFormBody" >
            <div>
                <img className="formImg" alt="form" src="https://img.freepik.com/premium-photo/abstract-alcohol-ink-background-blue-azure-tones-with_181627-1233.jpg"/>
            <CgClose className="FormClose" onClick={()=>{store.OrderFormClose()}} /> 
                <div>
                        <input className="FormInput" ref={place_name} type="text" placeholder="place name"/>
                        <input className="FormInput" ref={adress_place} type="text" placeholder="address of the place"/>
                        <input className="FormInput" ref={adress_order} type="text" placeholder="delivery addres"/>
                        <input className="FormInput" ref={cost} type="text" placeholder="The cost of the order"/>
                        <input className="FormInput" ref={total} type="text" placeholder="The total cost"/>
                        <button className="FormButton" onClick={() => handleClick()} >Create order</button>
                </div>
            
            </div>
        </div>

    )
}else{return(<></>)}

})