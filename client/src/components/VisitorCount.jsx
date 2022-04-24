import React, {useEffect} from 'react'
import {useState} from "react"
import JobFinder from "../apis/JobFinder"

const VisitorCount = () => {
    const [count, setCount] = useState("");

    useEffect(() => {
        console.log('fetching visitor count');
        const fetchData = async () => {
            axios({
                baseURL: 'https://simpleanalytics.com/goodwlb.com.json?version=5&fields=histogram&start=today&end=today',
                headers: {
                    'api-key': 'sa_api_key_NXLXZ3c6o9wzGRRue8jpCbObMBq7yUS8iIjO'
                },
            });
        }
        fetchData().then(res => {console.log(res);setCount(res.data.histogram.visitors);});
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

export default Email;
