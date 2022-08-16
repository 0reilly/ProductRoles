import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import "../App.css";
import {
    CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = (props) => {
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleForm = () => {
        console.log('hi')
        props.form();
    }

    return (
        <>
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <div className="p-4 row justified-content-center">
                <button disabled={processing || disabled} className="col btn btn-primary" onClick={handleForm}>
                    <span id="button-text">
                      {processing ? (
                          <div className="spinner" id="spinner"></div>
                      ) : (
                          props.price == 8999 ? "Start Free Trial" : "Pay $" + props.price / 100
                      )}
                    </span>
                </button>
            </div>
        </>
    );
}

export default CheckoutForm
