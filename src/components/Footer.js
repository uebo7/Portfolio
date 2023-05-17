import { Link } from "react-router-dom"

function Footer(props) {
    return (
        <div className="bg-dark border text-center fixed-bottom">
            <Link to='/contact' className='nav-link active link-info'>
                <button className='btn btn-dark'>
                    <h5>Contact Me Here</h5>
                </button>
            </Link>     
        </div>
    )
}

export default Footer