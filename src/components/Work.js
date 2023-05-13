
function Work(props) {
    return (
        <div className="bg-secondary m-2 text-center">
           <img src={props.img} alt={props.name} className="img-fluid project m-3"/>
           <h3 className="text-light">{props.name}</h3>
           <p className="text-light">{props.desc}</p>
           <div className="text-center">
                <a href={props.link} className="btn btn-primary m-2">Live Project</a>
           </div>
           <div className="text-center">
                <a href={props.git} className="btn btn-primary m-2">Repo</a>
           </div>
        </div>
    )
}

export default Work