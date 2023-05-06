import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <nav className='navbar navbar-expand-md bg-dark'>
                <button class="navbar-toggler navbar-dark" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent" 
                    aria-controls="#navbarContent" 
                    aria-expanded="false" 
                    aria-label="Toggle Navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='container-fluid collapse navbar-collapse' id='navbarContent'>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link to='#about' className='nav-link active link-info' >
                                <button className='btn btn-dark'>About Me</button>
                            </Link> 
                        </li>
                        <li className='nav-item'> 
                            <Link to='#projects' className='nav-link active link-info' >
                                <button className='btn btn-dark'>My Projects</button>
                            </Link> 
                        </li>
                        <li className='nav-item'> 
                            <Link to='#contact' className='nav-link active link-info'>
                                <button className='btn btn-dark'>Contact Me Here</button>
                            </Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav