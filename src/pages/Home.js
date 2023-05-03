import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Nav from '../components/Nav'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Start from '../components/Start'

function Home(props) {
    return (
        <div>
            <Nav />
            <Start />
            <About />
            <Project />
            <Education />
            <Skill />
            <Contact />
        </div>
    )
}

export default Home