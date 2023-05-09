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
                            <Link to='/' className='nav-link active link-info'>
                                <button className='btn btn-dark'>Home</button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link active link-info' >
                                <button className='btn btn-dark'>About Me</button>
                            </Link> 
                        </li>
                        <li className='nav-item'> 
                            <Link to='/project' className='nav-link active link-info' >
                                <button className='btn btn-dark'>My Projects</button>
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to='/skill' className='nav-link active link-info' >
                                <button className='btn btn-dark'>Skills</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav