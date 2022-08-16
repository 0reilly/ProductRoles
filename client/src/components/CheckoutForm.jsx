import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import "../App.css";
import {
    CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = (props) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    let history = useHistory();

    useEffect(() => {
        //window.scrollTo(0, 0);
    }, []);

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
        setSucceeded(true);
        //props.form();
    }
    return (
        <>
            <form id="payment-form" onSubmit={handleForm}>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <div className={succeeded ? "p-4 row justified-content-center result-message hidden" : "p-4 row justified-content-center result-message"}>
                    <button
                        disabled={processing || disabled || succeeded}
                        className="col btn btn-primary"
                    >
        <span id="button-text">
          {processing ? (
              <div className="spinner" id="spinner"></div>
          ) : (
              props.price == 8999 ? "Start Free Trial" : "Pay $" + props.price / 100
          )}
        </span>
                    </button>
                </div>
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}
                {/* Show a success message upon completion */}
            </form>
        </>
    );
}

export default CheckoutForm
