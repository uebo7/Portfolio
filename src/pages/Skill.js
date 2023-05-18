import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { React, useState } from 'react'

function Skill() {

    const [showCss, setShowCss] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showJavascript, setShowJavascript] = useState(false)
    const [showPython, setShowPython] = useState(false)
    
    return (
        <div className='container-fluid text-center bg-dark'>
            <Nav />
            <h1 className='m-5 text-light bg-dark'>Skills</h1>
            <div className="row bg-dark">
                <div className="col-12 col-md-3 mt-3">
                    <button className='btn btn-danger' onClick={() => setShowSkills(!showSkills)}>General</button>
                    <div className='text-light'>
                        {showSkills && 
                            <ul className='list-group m-1'>
                                    <h3 className='list-group-item m-4'>HTML</h3>
                                    <h3 className='list-group-item m-4'>Github</h3>  
                            </ul>
                        }
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-3">
                    <button className='btn btn-danger' onClick={() => setShowCss(!showCss)}>CSS</button>
                    <div className="text-light" >
                        {showCss && 
                            <ul className='list-group m-1'>
                                <li className='list-group-item m-4'>
                                    <h3>Bootstrap</h3>
                                </li>
                                <li className='list-group-item m-4'>
                                    <h3>Materialize</h3>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-3">
                    <button className='btn btn-danger' onClick={() => setShowJavascript(!showJavascript)}>Javascript</button>
                    <div className="text-light">
                        {showJavascript &&
                            <ul className='list-group m-2'>
                                <li className='list-group-item m-4'>
                                    <h3>jQuery</h3>
                                </li>
                                <li className='list-group-item m-4'>
                                    <h3>React.js</h3>
                                </li>
                                <li className='list-group-item m-4'>
                                    <h3>Node.js</h3>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-3 mb-3">
                    <button className='btn btn-danger' onClick={() => setShowPython(!showPython)}>Python</button>
                    <div className="text-light">
                        {showPython && 
                            <ul className='list-group m-2'>
                                <li className='list-group-item m-4'>
                                    <h3>Django</h3>
                                </li>
                                <li className='list-group-item m-4'>
                                    <h3>PostreSQL</h3>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
            <div className='mt-5'></div>
            <Footer />
        </div>
    )
}

export default Skill