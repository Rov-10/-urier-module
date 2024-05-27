import { observer } from "mobx-react-lite";
import "../style/main.css"
import NavBtn from "./NavBtn";
import { store } from "../store";
const Nav = observer(()=> {
  return (
    <nav>
      <NavBtn name="category" onClick={()=>{store.CategoryOpen();store.OrderFeedClose();store.ActiveOrdersClose()}}/>
      <NavBtn onClick={()=>{store.CategoryClose();store.OrderFeedOpen();store.ActiveOrdersClose()}} name="order feed"/>
      <NavBtn onClick={()=>{store.CategoryClose();store.OrderFeedClose();store.ActiveOrdersOpen()}} name="active orders"/>
    </nav>
  );
})

export default Nav;
