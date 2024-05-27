import "../style/main.css"
import { CgMenu } from "react-icons/cg";
import Nav from "./Nav";
// import AsidePanel from "./AsidePanel";
import { store } from "../store";
import { observer } from "mobx-react-lite";
import { CgBell, CgProfile, CgDigitalocean } from "react-icons/cg";


const Header = observer(() => {
  
  return (
    
    <header>
    <div className="LeftBtns">    
        <CgMenu onClick={()=>{store.PanelOpen();}} className='asideBtn' />
        <CgDigitalocean className="Logo" />
        <span className="CoName">DELIVERY</span>
    </div>

        <Nav/>
    
    <div className="RightBtns">
        <CgBell  className="MessBell"/>
        <CgProfile  className="ProfPic"onClick={()=>{store.LogFormOpen()}}/>
      </div>
        
      
    </header>
  );
})

export default Header;
