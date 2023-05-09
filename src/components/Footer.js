import { Link } from "react-router-dom"

function Footer(props) {
    return (
        <div className="bg-dark border text-center">
            <Link to='/contact' className='nav-link active link-info'>
                <button className='btn btn-dark'>
                    <h3>Contact Me Here</h3>
                </button>
            </Link>     
        </div>
    )
}

export default Footer