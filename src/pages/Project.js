import Work from "../components/Work"
import LinkedInImg from '../img/Profile.png'
import Quote from '../img/Quote.png'
import JobBoardFront from '../img/jobboard.png'
import JobBoardBack from '../img/jobboardback.png'
import PlayerCollector from '../img/playercollector.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Project(props) {
    return (
        <div className="container-fluid bg-secondary">
            <Nav />
            <h1 className="text-light text-center bg-secondary">My Projects</h1>
            <div className="row bg-secondary pb-5">
                <div className="col-12 col-lg-6 pb-2">
                    <Work 
                    name='Quote Generator' 
                    img={Quote} 
                    git='https://github.com/uebo7/P1-Quote-generator.git' 
                    link='https://uebo7.github.io/P1-Quote-generator/' 
                    />
                    <Work 
                        name='Job Board FrontEnd' 
                        img={JobBoardFront} 
                        git='https://github.com/dition24/career-call-frontend.git' 
                        link='https://illustrious-twilight-bf2d81.netlify.app/' 
                    />
                </div>
                <div className="col-12 col-lg-6 pb-2">
                    <Work 
                        name='Job Board BackEnd'  
                        img={JobBoardBack}
                        git='https://github.com/dition24/career-call-backend.git'  
                    />
                    <Work 
                        name='PlayerCollector' 
                        img={PlayerCollector} 
                        git='https://github.com/uebo7/playercollector.git' 
                        link='https://playercollector.herokuapp.com/' 
                    />
                </div>
            <div className="row bg-secondary pb-5">
                <div className="col-12 col-lg-6 pb-2">
                        <Work 
                            name='LinkedIn Profile' 
                            img={LinkedInImg} 
                            git='https://github.com/uebo7/LinkedInProfilePage.git' 
                            link='https://linkedinprofile-0425.herokuapp.com/' 
                        />
                    </div>
            </div>
                <div className='m-5'></div>
                <Footer />
            </div>
        </div>
    )
}

export default Project