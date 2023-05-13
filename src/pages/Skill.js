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
                <div className="col-3">
                    <button className='btn btn-danger' onClick={() => setShowSkills(!showSkills)}>HTML + General skills</button>
                    <div className='div1 text-light'>
                        {showSkills && 
                            <ul>
                                <h3>Github</h3>
                            </ul>
                        }
                    </div>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger' onClick={() => setShowCss(!showCss)}>CSS</button>
                    <div className="text-light" >
                        {showCss && 
                            <ul>
                                <h3>Bootstrap</h3>
                                <br />
                                <h3>Materialize</h3>
                            </ul>
                        }
                    </div>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger' onClick={() => setShowJavascript(!showJavascript)}>Javascript</button>
                    <div className="div3 text-light">
                        {showJavascript &&
                            <ul>
                                <h3>jQuery</h3>
                                <br />
                                <h3>React.js</h3>
                                <br />
                                <h3>Node.js</h3>
                            </ul>
                        }
                    </div>
                </div>
                <div className="col-3">
                    <button className='btn btn-danger' onClick={() => setShowPython(!showPython)}>Python</button>
                    <div className="div4 text-light">
                        {showPython && 
                            <ul>
                                <h3>Django</h3>
                                <br />
                                <h3>PostreSQL</h3>
                            </ul>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skill