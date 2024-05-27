import { useState } from "react";
import "../style/main.css"
function Check(props) {
  
    const [check, setCheck] = useState(false);
    let b 
    check?b="BodyChOn":b="BodyChOff"
    if (props.check){
    return (
    <div onClick={()=>check?setCheck(false):setCheck(true)} className={b}>
        <div className="BtnCh" >

        </div>
    </div>
  );}else{
    return(
      <div></div>
    )
  }
}

export default Check;
