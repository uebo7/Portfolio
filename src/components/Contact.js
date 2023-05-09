import Nav from './Nav'

function Contact(props) {
    return (
        <div className="bg-dark">
            <Nav />
            <h1 className="text-light text-center">Contact Me</h1>
            <a href="https://www.linkedin.com/in/logankaufman/">
            <img src={props.img} alt="LinkedInLogo" />
            </a>
        </div>
    )
}

export default Contact