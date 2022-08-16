import React, {useContext, useState, useEffect} from 'react';
import JobFinder from "../apis/JobFinder"
import {useHistory} from 'react-router-dom'
import {JobsContext} from '../context/JobContext';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import MDEditor from '@uiw/react-md-editor';
import "react-colorful/dist/index.css";


const JobForm = () => {
    const [promise, setPromise] = useState(() => loadStripe("pk_live_51HX92ADV5bqQz6pNkugJCzdENiJmAW3ghEm9ckAdKKhE7kGF55hASD3QQc12BwEXIXNCifNwzr4IBnkvElOpKVFK00Iecjr8sF"));
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [billing, setBilling] = useState("");
    const [price, setPrice] = useState(8999);


    const handleForm = async () => {
        console.log('handleForm')
        setSucceeded(true);
        try {
            const response = await JobFinder.post("/email", {
                email
            })
            console.log(response)
        } catch (err) {
        }
    };

    const handleAddon = (e, value) => {
        if (value === "weekly") {
            setPrice(499)
        } else if (value === "monthly") {
            setPrice(1999)
        }
        else {
            setPrice(8999);
        }
    }

    const goHome = () => {
        history.push("/")
    }

    return (
        <>
            <div className="ml-4 mr-4 mt-4  d-flex flex-row justify-content-center">
                <form action="">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4 className="text-center">3 Days Free, then $89.99/year</h4>
                        </div>
                        <div className="card-body">
                            <p><input
                                onChange={(e) => handleAddon(e, "yearly")}
                                type="radio"
                                name="addon"
                                value="1"
                                id="1"
                                defaultChecked
                            /><label for="1" className="pl-2"><strike>260.19</strike> $89.99 per year BEST VALUE</label></p>
                            <p><input
                                onChange={(e) => handleAddon(e, "monthly")}
                                type="radio"
                                name="addon"
                                id="2"
                                value="2"
                            /><label
                                for="2"
                                className="pl-2"
                            >$19.99 per month</label></p>
                            <p><input
                                onChange={(e) => handleAddon(e, "monthly")}
                                type="radio"
                                name="addon"
                                id="2"
                                value="2"
                            /><label
                                htmlFor="2"
                                className="pl-2"
                            >$4.99 per month</label></p>
                        </div>
                    </div>
                    <div className="card mt-5 mb-5">
                        <div className="card-header">
                            <h4 className="text-center">Start building your Bounce page </h4>
                        </div>
                        <div className="card-body">
                            <div className="pt-2 pb-2">
                                <span>CUSTOMER EMAIL</span>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="pt-2 pb-2">
                                <span>FULL BILLING DETAILS</span>
                                <textarea
                                    value={billing}
                                    onChange={(e) => setBilling(e.target.value)}
                                    className="form-control"
                                    type="text"
                                    placehold="e.g. your company's full name and full invoice address, including building, street, city, and country"
                                />
                            </div>
                            <div className="pt-4">
                                <Elements stripe={promise}>
                                    <CheckoutForm price={price} form={handleForm} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                    <div className={succeeded ? "p-4 justify-content-center result-message" : "p-4 justify-content-center result-message hidden"}>
                        <div className="row">
                            <button className="btn btn-primary" onClick={goHome}>
                                Home.
                            </button>
                        </div>
                        <div className="row">
                            <h4>There's some good news and bad news.. Good news is that we're working hard to make the best link in bio tool available.. Bad news is that it's not ready yet! </h4>
                            <h4>We haven't charged your card.. and we'll email you once the app is ready to use! Thanks a ton for your support.</h4>
                        </div>
                    </div>
                </form>
            </div>
        </>


    )
}


export default JobForm
