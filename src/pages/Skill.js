import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Skill() {
    return (
        <div className='container-fluid text-center bg-dark'>
            <Nav />
            <h1 className='m-5 text-light bg-dark'>Skills</h1>
            <div className="row bg-dark">
                <div className="col-3">
                    <button className='btn btn-danger'>HTML</button>
                    <div className='div1 text-light'>

                    </div>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger'>CSS</button>
                    <div className="text-light" id='div2 '>
                        Bootstrap
                    </div>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger'>Javascript</button>
                    <div className="div3 text-light">
                        jQuery
                        <br />
                        React.js
                        <br />
                        Node.js
                    </div>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger'>Python</button>
                    <div className="div4 text-light">
                        Django
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skill