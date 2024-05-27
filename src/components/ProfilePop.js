import { observer } from "mobx-react-lite";
import { store } from "../store";
import { BiLogOut, BiArrowBack } from "react-icons/bi";

export const ProfilePop = observer(()=>{
    const logOut = () => {
        store.isLogin = false;
        store.username = '';
        store.roles = [];
        store.OrderList = []
        localStorage.setItem('token', '');
        console.log('User log Out')
    }
    if (store.isLogin && store.LogFormState){
    return(
        <div  className="Profile">
            <div className="LogFormBg-blure" onClick={()=>{store.LogFormClose();}}></div>
            <div className="ProfileBody">
                <div className="ProfileTop">
                    <div className="ProfileTopBtns">    
                        <BiArrowBack style={{cursor:'pointer'}}  onClick={()=>{store.LogFormClose();}}/>
                        <BiLogOut style={{cursor:'pointer'}} className="LogOutBtn" onClick={()=>{logOut()}}/>
                    </div>
                    <div className="ProfilePic"><div></div></div>
                </div>
                <div className="ProfileMain">
                    <div className="FrstInfo">
                        <span className="Username">{store.username}</span>
                        <span className="Roles">{store.roles}</span>
                    </div>
                    {/* <hr className="ProfileHr"></hr> */}
                    <div className="SecInfo">
                        
                        <div className="InfoCard">
                            <span>{store.history.length}</span>
                            <p>Number of completed orders</p>
                        </div>
                        <div className="InfoCard">
                            <span>{store.assessment}</span>
                            <p>Average rating</p>
                        </div>
                        <div className="InfoCard">
                            <span>some text</span>
                            <p>Some description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )}else{return<></>}

})