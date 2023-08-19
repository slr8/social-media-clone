import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Leftbar from '../../components/Leftbar/Leftbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="page-components">
                <Sidebar />
                <Feed />
                <Leftbar />
            </div>
        </>
    )
}

export default Home