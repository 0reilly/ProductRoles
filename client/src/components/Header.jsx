import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/add-job`)
    };
    return (
        <>
         <div class="row justify-content-end">
             <div class="col-3 mt-2 "><h4 className="text-center">goodWLB</h4></div>
             <div class="col-5 mt-2"><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">Post a Job with good WLB</button></div>
           </div>
	<a href="https://simpleanalytics.com/goodwlb.com?utm_source=goodwlb.com&utm_content=badge" referrerpolicy="origin" target="_blank"><img src="https://simpleanalyticsbadges.com/goodwlb.com" loading="lazy" referrerpolicy="no-referrer" crossorigin="anonymous" /></a>
        </>
    )
}

export default Header;
