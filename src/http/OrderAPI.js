import { jwtDecode } from "jwt-decode";
import { $authHost, $host } from "./index";
import { toJS } from "mobx";
import { param } from "express-validator";



export const createOrder = async (order) => {
    try {
        console.log("await...")
        const  {data}  = await $authHost.post('/order/createOrder',{order});
        // console.log(data)
    } catch(error) {
        return error;
    }
}
export const getOrders = async () => {
    try {
        console.log("getting orders...")
        const  {data}  = await $authHost.get('/order/getOrders');
        // console.log(data)
        return data
    } catch(error) {
        return error;
}

}
export const acceptOrder = async (_id)=>{
    try{
        console.log("accepring order...") 
        const {data} = await $authHost.put('/order/acceptOrder', {_id})
        return data
    } catch(e){
        return e
    }
    
}
export const completeOrder = async (_id)=>{
    try{
        console.log("completing order...") 
        const {data} = await $authHost.put('/order/completeOrder', {_id})
        return data
    } catch(e){
        return e
    }
    
}
export const getActiveOrders = async(history)=>{
    // console.log(toJS(history))
    const URLString = history.map((value, index) => `arr[${index}]=${value}`).join('&');
    // console.log(URLString)
    try {
        console.log("getting active orders...")
        const  {data}  = await $authHost.get(`/order/getActiveOrders?${URLString}`);
        // console.log(toJS(data))
        return data
    } catch (error) {
        return error
    }

}