
function Work(props) {
    return (
        <div className="bg-secondary text-center">
           <img src={props.img} alt={props.name} className="img-fluid project img-rounded"/>
           <h1 className="text-light">{props.name}</h1>
           <p className="text-light">{props.desc}</p>
           <div className="text-center">
                <a href={props.link} className="btn btn-primary m-2">Live Project</a>
                <a href={props.git} className="btn btn-primary m-2">Repo</a>
           </div>
        </div>
    )
}

export default Work