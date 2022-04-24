import React, {useEffect} from 'react'
import {useState} from "react"
import axios from "axios";

const VisitorCount = () => {
    const [count, setCount] = useState("");

    useEffect(() => {
        console.log('fetching visitor count');

        fetch(
            'https://simpleanalytics.com/goodwlb.com.json?version=5&fields=histogram&start=today&end=today',
            {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sa-api-key": "sa_api_key_NXLXZ3c6o9wzGRRue8jpCbObMBq7yUS8iIjO"
            },
        })
            .then(json)
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                setCount(5);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }, [count]);

    return (
        <div class="container-fluid mt-3">
            <div class="row justify-content-center">
                <p className="pt-2 pl-2">Vistior Count: {count} </p>
                <p>{}</p>
            </div>
        </div>
    )
}

export default VisitorCount;
