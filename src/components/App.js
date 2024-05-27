import Header from './Header';
import AsidePanel from './AsidePanel';
import Category from './Category';
import { toJS } from 'mobx';
import { OrderFeed } from './OrderFeed';
import { OrderForm } from './OrderForm';
import { ActiveOrders } from './ActiveOrders';
import { LogForm } from './LogForm';
import { check, getOrderHistory } from '../http/UserAPI';
import { getOrders, getActiveOrders } from '../http/OrderAPI';
import { store } from '../store';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import { useEffect } from 'react';
import { ProfilePop } from "./ProfilePop";
const App = observer(() => {
  useEffect(() => {
    
    // const getOredrH = async()=>{
    //   const data = await getOrderHistory()
    //   console.log(data)
    //   store.history = data
    // }
    // getOredrH()
    const getAllOrders = async () => {
      const data = await getOrders();
      // console.log(data);
      runInAction(() => {
        store._OrderList = data;
      });
    };
    getAllOrders();

    const getAllActiveOrders = async()=>{
      // console.log(toJS(store.history))
      const data = await getActiveOrders(store.history);
      // console.log(data);
      runInAction(() => {
        store._ActiveOrderList = data.activeOrders;
      });
    }
    getAllActiveOrders()
  }, [store.isLogin, store.Order, store.history]);

  useEffect(() => {
    if (Array.isArray(store.roles)){
    if (store.roles.length > 0) {
      // console.log(store.roles);
    }}
    
  }, [store.roles]);
  useEffect(()=>{
    const checkUser = async () => {
      const { username, roles, history, message } = await check();
      if (message) {
        console.log(message);
        return;
      }
      // console.log(username)
      runInAction(() => {
        store.username = username;
        store.roles = roles;
        store.history = history
        store.isLogin = true;
      });
    };
    checkUser();
  },[])

  return (
    <div className="App">
      <Header />
      <OrderForm />
      <LogForm />
      <ProfilePop/>
      <main>
        <AsidePanel />
        <Category />
        <OrderFeed />
        <ActiveOrders />
      </main>
    </div>
  );
});

export default App;
