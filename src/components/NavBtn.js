import "../style/main.css"
// import { store } from "../store";
import { observer } from "mobx-react-lite";
import { Counter } from "./Counter";
const NavBtn= observer((props)=>{
  
  return (
    <div onClick={props.onClick} className="NavBtn">
      <span>{props.name}</span>
      <Counter name={props.name}/>
    </div>
  );
})

export default NavBtn;
