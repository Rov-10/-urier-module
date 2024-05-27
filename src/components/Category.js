import { observer } from "mobx-react-lite";
import "../style/main.css"
import CategoryGrupe from "./CategoryGrupe";
import { store } from "../store";


const Category= observer(()=> {
    if(store.CategoryState){
    return (
    <div className="CategoryBody">
        <h1>
            CATEGORY
        </h1>
        <div className="CategoryGrupes">
        <div className="CategoryTop">
            <CategoryGrupe name="RESTAURANTS & CAFE" img="https://www.forumdaily.com/wp-content/uploads/2017/09/Depositphotos_39086945_m-2015.jpg"/>
            <CategoryGrupe name="GROSERY STORE" img="https://i0.wp.com/rau.ua/wp-content/uploads/2020/12/VARUS-2.jpg?fit=1140%2C600&ssl=1"/>
            <CategoryGrupe name="BAKERY" img="https://proriat.com/wp-content/uploads/2023/04/open-a-bakery-header.jpg"/>
            <CategoryGrupe name="TOY STORE" img="https://recommerce.com.ua/media/user_media/images/blog-howto/magazin-igrushek/4b92a446c5e36c6860c669bf9b9f8643.jpg"/>
        </div>
        <div className="CategoryBottom">
            <CategoryGrupe name="MAIL DELIVERY" img="https://www.rbc.ua/static/img/_/p/_poshta_grafyk_roboti_ukrposhta_karta_onlayn_1200x675.jpg"/>
            <CategoryGrupe name="MAIL DELIVERY" img="https://www.rbc.ua/static/img/_/p/_poshta_grafyk_roboti_ukrposhta_karta_onlayn_1200x675.jpg"/>
            <CategoryGrupe name="MAIL DELIVERY" img="https://www.rbc.ua/static/img/_/p/_poshta_grafyk_roboti_ukrposhta_karta_onlayn_1200x675.jpg"/>
        </div>    
        </div>
    </div>
  );
}
else{
    return(<></>)
}}
)

export default Category;
