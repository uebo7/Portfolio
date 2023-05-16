import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProfPic from '../img/profilepic.png'

function About(props) {
    return (
        <div className="container-fluid bg-dark">
            <Nav />
            <h1 className="text-light">About Me</h1>
            <div className="row">
                <div className="col-6">
                    <h3 className="text-light m-3">Hi There! My name is Logan Kaufman</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h3 className="text-light m-3">I am a Software Developer who loves Problem Solving, Technology, and Learning new skills.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h3 className="text-light m-3">I moved into the development field to create a career out of something I am passionate about.
                    I enjoy front end development and css design, and I am interested in fullstack developement.</h3>
                </div>
                <div className='text-center bg-dark col-6'>
                    <img className='img-fluid ProfPic text-center' src={ProfPic} alt="Profile" />
                </div>
            </div>
            <div className='m-5'></div>
            <Footer />
        </div>
    )
}

export default About