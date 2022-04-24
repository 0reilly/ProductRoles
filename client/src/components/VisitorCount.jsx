import React, {useEffect} from 'react'
import {useState} from "react"
import axios from "axios";
import {json} from "express";

const VisitorCount = () => {
    const [count, setCount] = useState("");

    return (
        <div class="container-fluid mt-3">
            <div class="row justify-content-center">
                <p className="pt-2 pl-2">Pageviews and other stats</>
                <a
                    href="https://simpleanalytics.com/goodwlb.com?utm_source=goodwlb.com&utm_content=badge"
                    referrerPolicy="origin"
                    target="_blank"
                ><img
                    src="https://simpleanalyticsbadges.com/goodwlb.com"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                /></a>
            </div>
        </div>
    )
}

export default VisitorCount;
