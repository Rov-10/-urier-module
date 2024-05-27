import "../style/main.css"
import { CgDigitalocean } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import AsideBtn from "./AsideBtn";
import { store } from "../store";
import { observer } from "mobx-react-lite";

// const [panelState, setPanel] = useState(false)
const AsidePanel= observer(()=> {
  let buttonName
  if (store.isLogin){
    buttonName = "PERSONAL ACCOUNT"
  }else {buttonName = "LOG IN"}
  // let orderBtn = store.roles==["ADMIN"]?<AsideBtn onClick={()=>{store.OrderFormOpen();store.PanelClose()}} name = "ORDER"/>:<></>
  if(store.PanelState){
  return (
    <aside> 
    <div className="AsideTop">        
        <CgClose onClick={()=>{store.PanelClose()}} className="CloseBtn"/>
        <CgDigitalocean className="AsideLogo" />
    </div>
        <AsideBtn name = {buttonName} onClick= {()=>{store.LogFormOpen();store.PanelClose()}}/>
        {store.roles.includes("ADMIN")&&<AsideBtn onClick={()=>{store.OrderFormOpen();store.PanelClose()}} name = "ORDER"/>}
        <AsideBtn name = "CATEGORIES" onClick={()=>{store.OrderFeedClose();store.ActiveOrdersClose();store.CategoryOpen();store.PanelClose()}}/>
        <AsideBtn name = "ORDER FEED" onClick={()=>{store.OrderFeedOpen();store.ActiveOrdersClose();store.CategoryClose();store.PanelClose()}}/>
        <AsideBtn name = "ACTIVE ORDERS" onClick={()=>{store.OrderFeedClose();store.ActiveOrdersOpen();store.CategoryClose();store.PanelClose()}}/>
        <div className="PanelBlur" onClick={()=>{store.PanelClose()}}></div>
    </aside>
  );}
  else {return( <></> )} 
})

export default AsidePanel;
