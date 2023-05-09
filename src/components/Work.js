
function Work(props) {
    return (
        <div className="bg-dark border">
           <img src={props.img} alt={props.name} className="img-fluid"/>
           <h3>{props.name}</h3>
           <p>{props.desc}</p>
           <a href={props.link} className="btn btn-primary">Live Project</a>
           <a href={props.git} className="btn btn-primary">Repo</a>
           <br />
        </div>
    )
}

export default Work