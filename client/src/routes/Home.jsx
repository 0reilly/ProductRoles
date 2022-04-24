import React from 'react'
import Header from "../components/Header"
import JobList from '../components/JobList'
import Email from '../components/Email'
import VisitorCount from "../components/VisitorCount";

const Home = () => {
    return (
        <>
            <Header/>
            <Email/>
            <JobList/>
            <VisitorCount/>
        </>
    )
}

export default Home
