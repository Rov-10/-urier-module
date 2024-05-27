import { store } from "../store"
import '../style/main.css'
import { observer } from "mobx-react-lite"
export const Counter = observer((props)=>{if (props.name ==='order feed'){if(store.count === 0 || store.OrderFeedState){store.count=0; return <></>}else{return <div className="OrderCounter">{store.count}</div>} }})