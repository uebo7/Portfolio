import Nav from '../components/Nav'
import Footer from '../components/Footer'

function About(props) {
    return (
        <div className="container-fluid bg-dark">
            <Nav />
            <h1 className="text-light m-5">About Me</h1>
            <h3 className="text-light m-3">Hi There! My name is Logan Kaufman</h3>
            <h3 className="text-light m-3">I am a Software Developer who loves Problem Solving, Technology, and Learning new skills.</h3>
            <h3 className="text-light m-3">I moved into the development field to create a career out of something I have a passion in.
                 I enjoy front end development and css design, and I am interested in fullstack developement.</h3>
            <Footer />
        </div>
    )
}

export default About