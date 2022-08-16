import React from 'react'
import { useHistory } from "react-router-dom"

const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/sign-up`)
    };
    return (
        <>
         <div className="row justify-content-center flex-row">
             <div className="col-3"></div>
             <div className="col-6 mt-2 "><h2 className="text-center">Bounce</h2></div>
             <div className="col-3"></div>
         </div>
	    </>
    )
}

export default Header;
