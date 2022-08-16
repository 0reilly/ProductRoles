import React from 'react'
import { useHistory } from "react-router-dom"

const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/sign-up`)
    };
    return (
        <>
         <div class="row justify-content-center flex-row">
             <div class="col-3"></div>
             <div class="col-6 mt-2 "><h4 className="text-center">Bounce</h4></div>
             <div class="col-3 mt-2"><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">Start Free Trial</button></div>
         </div>
	    </>
    )
}

export default Header;
