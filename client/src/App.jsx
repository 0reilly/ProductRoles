import React from 'react';
import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { JobsContextProvider } from './context/JobContext';


import Home from './routes/Home';
import SignUp from './routes/SignUp';


const App = () => {

    return (

    <div className='background'>
        <JobsContextProvider>
        <div className="container">
            <Router>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/sign-up" component={SignUp}/>
                </Switch>

            </Router>
        </div>
        </JobsContextProvider>
    </div>


    )

}

export default App;
