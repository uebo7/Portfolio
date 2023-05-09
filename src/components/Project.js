import Work from "./Work"
import LinkedInImg from '../img/Profile.png'
import Quote from '../img/Quote.png'
import JobBoard from '../img/jobboard.png'
import PlayerCollector from '../img/playercollector.png'
import Nav from './Nav'

function Project(props) {
    return (
        <div>
            <Nav />
            <h1 className="text-light bg-dark">My Projects</h1>
            <Work 
                name='Quote Generator' 
                img={Quote} 
                git='https://github.com/uebo7/P1-Quote-generator.git' 
                link='https://uebo7.github.io/P1-Quote-generator/' 
            />
            <Work 
                name='Job Board FrontEnd' 
                img={JobBoard} 
                git='https://github.com/dition24/career-call-frontend.git' 
                link='https://illustrious-twilight-bf2d81.netlify.app/' 
            />
            <Work 
                name='Job Board BackEnd'  
                git='https://github.com/dition24/career-call-backend.git'  
            />
            <Work 
                name='PlayerCollector' 
                img={PlayerCollector} 
                git='https://github.com/uebo7/playercollector.git' 
                link='https://playercollector.herokuapp.com/' 
            />
            <Work 
                name='LinkedIn Profile' 
                img={LinkedInImg} 
                git='https://github.com/uebo7/LinkedInProfilePage.git' 
                link='https://linkedinprofile-0425.herokuapp.com/' 
            />
        </div>
    )
}

export default Project