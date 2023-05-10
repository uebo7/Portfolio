import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProfPic from '../img/profilepic.png'

function Start(props) {
    return (
        <div className="bg-dark container-fluid">
            <Nav />
            <div className='row'>
                <h1 className="m-5 text-light">Logan Kaufman</h1>
                <h1 className="m-5 text-light">Software Developer</h1>
                <div className='text-center'>
                    <img className='img-responsive ProfPic text-center m-5' src={ProfPic} alt="Profile" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Start