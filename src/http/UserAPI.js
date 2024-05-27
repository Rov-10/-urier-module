import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';

export const logIn = async (username, password) => {
    try{
        const { data } = await $host.post('/auth/login', { username, password });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    }
    catch(error){
        return error.response.data;
    }
}
export const check = async () => {
    try {
        
        const { data } = await $authHost.get('/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    } catch(error) {
        return error.response.data;
    }
}
export const toActiveOrder = async(_id)=>{
    try {
        // console.log(_id)
        const { data } = await $authHost.put('/auth/toActiveOrder', {_id});
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    } catch (error) {
        return error.response.data;
    }
}
// export const getOrderHistory = async()=>{
//     try {
//         console.log('getting history...')
//         const data = await $authHost.get('/auth/getOrderHistory');
//         console.log(data)
//         return data
//     } catch (error) {
//         return error.response.data;
        
//     }
// }
