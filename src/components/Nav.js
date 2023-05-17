import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <header className='container-fluid'>
                <nav className='navbar navbar-expand-md bg-dark fixed-top'>
                    <button class="navbar-toggler navbar-dark" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarContent" 
                        aria-controls="#navbarContent" 
                        aria-expanded="false" 
                        aria-label="Toggle Navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className=' collapse navbar-collapse' id='navbarContent'>
                        <ul className='nav'>
                            <li className='nav-item' aria-current="page">
                                <Link to='/' className='nav-link active link-info'>
                                    <h4 className='btn btn-dark'>Home</h4>
                                </Link>
                            </li>
                            <li className='nav-item' aria-current="page">
                                <Link to='/about' className='nav-link active link-info' >
                                    <h4 className='btn btn-dark'>About Me</h4>
                                </Link> 
                            </li>
                            <li className='nav-item' aria-current="page"> 
                                <Link to='/project' className='nav-link active link-info' >
                                    <h4 className='btn btn-dark'>My Projects</h4>
                                </Link> 
                            </li>
                            <li className='nav-item' aria-current="page">
                                <Link to='/skill' className='nav-link active link-info' >
                                    <h4 className='btn btn-dark'>Skills</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav