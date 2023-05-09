import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Contact(props) {
    return (
        <div className="bg-dark container-fluid">
            <Nav />
            <h1 className="text-light text-center">Contact Me</h1>
            <a href="https://www.linkedin.com/in/logankaufman/">
                <img src={props.img} alt={props.name} />
            </a>
            <Footer />
        </div>
    )
}

export default Contact