import React, {createRef} from 'react'
import Header from "../components/Header"
import SalesInformation from "../components/SalesInformation";
import {useHistory} from "react-router-dom";
import { Menu, Sticky} from 'semantic-ui-react'

const Home = () => {
    const contextRef = createRef();

    let history = useHistory();

    const handleAddJob = () => {
        history.push(`/sign-up`)
    };

    return (
        <>
            <Header />
            <SalesInformation />
            <footer className="footer background">
                <div ref={contextRef}>
                    <Sticky context={contextRef}>
                        <Menu
                            attached="top"
                            tabular
                            style={{backgroundColor: '#fff', paddingTop: '1em'}}
                        >
                            <div className='col justify-content-center'>
                                <div className="row justify-content-center">
                                    <h6>3 Days Free, Then $89.99/year</h6>
                                </div>
                                <div className="row justify-content-center">
                                    <button
                                        onClick={(e) => handleAddJob(e)}
                                        className="btn trial trialHeader"
                                    >Start Free Trial
                                    </button>
                                </div>
                                <div className="row justify-content-center">
                                <span cursor='pointer' id="button-text" onClick={(e) => handleAddJob(e)}>
                                    Other plans
                                </span>

                                </div>
                            </div>
                        </Menu>
                    </Sticky>
                </div>
            </footer>
        </>
    )
}

export default Home
