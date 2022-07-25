import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MainDash from './MainDash/MainDash';
import RightSide from './Rightside/RightSide';
import "./dashboard.css";

const Dashboard = () => {


    return (
        <div className="dashboard">
            <div className="dashboard-glass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
}

export default Dashboard
