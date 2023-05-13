import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Contact(props) {
    return (
        <div className="bg-dark container-fluid">
            <Nav />
            <h1 className="text-light text-center m-3">Contact Me Here</h1>
            <div className="text-center m-5">
                <a href="https://www.linkedin.com/in/logankaufman/">
                    <img className='linkedin m-5' src={props.img} alt={props.name} />
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Contact