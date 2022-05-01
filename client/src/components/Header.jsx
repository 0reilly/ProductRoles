import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/add-job`)
    };
    return (
        <>
         <div class="row justify-content-center flex-row">
             <div class="col-3"></div>
             <div class="col-4 mt-2 "><h4 className="text-center">goodWLB</h4></div>
             <div class="col-5 mt-2"><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">Post a Job</button></div>
         </div>
	    </>
    )
}

export default Header;
