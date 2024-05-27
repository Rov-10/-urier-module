import { store } from "../store";
import { CgClose } from "react-icons/cg";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { logIn } from "../http/UserAPI";
export const LogForm = observer(()=>{
    const [showForm, setShowForm] = useState(!store.isLogin);
    
    const Username = useRef(null)
    const Password = useRef(null)
    const handleClick= async () => {
        // console.log("click")
        const user = await logIn(Username.current.value, Password.current.value)
        // console.log(`Email:${Email.current.value}\nPassword:${Password.current.value}`)
        if(user){
            store.username = user.username
            store.roles = user.roles
            store.history = user.history
            store.isLogin = true
        }
    }
    if((!store.isLogin && store.LogFormState) || (!store.isLogin && showForm)){
        return(
            <div>
                <div className="LogFormBg-blure" onClick={()=>{store.LogFormClose(); setShowForm(false)}}></div>
                <div className="LogForm">
                
                <div className="LogFormBody">
                    <div className="LogFormLabel">
                    <CgClose className="LogFormClose"  onClick={()=>{store.LogFormClose();setShowForm(false)}} />
                    <span>Welcome</span>
                    </div>
                    <div className="LogFormInputs">
                        <label>Username</label>
                        <input className="FormInput" type="email" ref={Username}/>
                        <label>Password</label>
                        <input className="FormInput" type="password" ref={Password}/>
                        <button className="FormButton"  onClick={()=>{handleClick();store.LogFormClose()}}>Log In</button>

                    </div>
                </div>
            </div>
            </div>
        )

    }else{return(<></>)}

})