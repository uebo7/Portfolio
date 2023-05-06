import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Nav from '../components/Nav'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Start from '../components/Start'
import linkedInLogo from '../img/linkedinlogo.png'

function Home(props) {
    return (
        <div>
            <Nav />
            <Start />
            <br />
            <About />
            <br />
            <Project />
            <br />
            <Education />
            <br />
            <Skill />
            <br />
            <Contact img={linkedInLogo}/>
        </div>
    )
}

export default Home