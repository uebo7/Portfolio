import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to='#about' >
                        <button>About Me</button>
                    </Link> 
                </li>
                <li> 
                    <Link to='#projects'>
                        <button>My Projects</button>
                    </Link> 
                </li>
                <li> 
                    <Link to='#contact'>
                        <button>Contact Me Here</button>
                    </Link> 
                </li>
            </ul>
        </div>
    )
}

export default Nav