
function Work(props) {
    return (
        <div>
           <img src={props.img} alt={props.name} />
           <h3>{props.name}</h3>
           <p>{props.desc}</p>
           <a href={props.link}>Live Project</a>
           <a href={props.git}>Repo</a>
        </div>
    )
}

export default Work