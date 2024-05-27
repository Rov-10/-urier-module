import "../style/main.css"
import Check from "./Check";
function AsideBtn(props) {
  return (
    <div className="AsideBnt">
        <div onClick={props.onClick}>
            <div className="AsideBntDiv"></div>
            <span className="AsideBntSpan">{props.name}</span>
        </div>
        <Check className="CheckBtn" check={props.check}/>
    </div>
  );
}

export default AsideBtn;
