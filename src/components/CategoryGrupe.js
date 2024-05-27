import "../style/main.css"

function CategoryGrupe(props) {
  return (
    <div className="CategoryGrupe">
        <img className="CategoryGrupeImg" alt={props.name} src={props.img}/>
        <span className="CategoryGrupeName">{props.name}</span>
    </div>
  );
}

export default CategoryGrupe;
