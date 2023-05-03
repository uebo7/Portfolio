import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Nav from '../components/Nav'
import Project from '../components/Project'
import Skill from '../components/Skill'

function Home(props) {
    return (
        <div>
            <Nav />
            <About />
            <Project />
            <Contact />
        </div>
    )
}

export default Home