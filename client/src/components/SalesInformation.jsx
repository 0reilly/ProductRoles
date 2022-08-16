import React from 'react'
import {useHistory} from "react-router-dom"

const SalesInformation = () => {
    let history = useHistory()

    return (
        <>
            <div class="mt-4 col justify-content-center">
                <div className="row justify-content-center">
                    <h3>Start Your Free Trial</h3>
                </div>
                <div className="row justify-content-center">
                    <p>Bounce is the #1 Link In Bio tool that enables creators to connect with their audience no matter where they are.
                        Get started today.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <img
                        src="https://bouncebiouploads.sfo3.digitaloceanspaces.com/iphone.png"
                        className="demo"
                    />
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h6 className="row ">
                            🔏 - Today
                        </h6>
                        <span className="row">Start your free trial</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <h6 className="row ">
                            🔔 - Tomorrow
                        </h6>
                        <span className="row">Start connecting with your followers across all apps and websites</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <h6 className="row ">
                            👍 - In 3 days
                        </h6>
                        <span className="row">Get billed, unless you cancel anytime before</span>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <h2 className="text-center">Benefits</h2>
                    <h4 className="text-center">Bounce makes it easier to generate and capture value from the followers you gain online.</h4>
                    <h6 className="text-center">Bounce hosts a webpage for you to share the latest stuff you're working on! Increase revenue by linking to your online store, digital products you're selling, or music to stream on Spotify. </h6>
                    <h6 className="text-center">Optimize your link sharing with real-time Analytics</h6>
                </div>
                {/*Carosel of features*/}

                <div className='row mt-2 justify-content-center'>
                    <div className="col mt-5">
                        <div className="row">✅ Cancel anytime in seconds</div>
                        <div className="row">✅ Easily manage subscription in app settings</div>
                        <div className="row">✅ Payment Protection policy</div>
                        <div className="row">✅ Excellent customer support, easily get in touch for help.</div>
                    </div>
                </div>


                <div className='col mt-5'>
                    <h5>Our Promise</h5>
                    <p>
                        Our mission is to help you make more money as you grow your online presence.
                    </p>
                    <p>
                        Many apps try to trick users with subscriptions--were proud to say we're not one of those apps. If you need a refund or help cancelling, we're here to help. We will do our best to help you resolve any issues.
                    </p>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-5">
                        <img
                            src="https://bouncebiouploads.sfo3.digitaloceanspaces.com/sfpfp.png"
                            className="myimg"
                        />
                    </div>
                    <div className="col-6 pl-0 mt-4">
                        <h6 className="row">Adam O’Reilly</h6>
                        <h6 className="row">Founder and CEO</h6>
                    </div>
                </div>


            </div>
            <div className="beneathFooter">
            </div>
        </>
    )
}

export default SalesInformation;
