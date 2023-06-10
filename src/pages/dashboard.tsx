import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';


interface DashboardProps {
    handleSetUsers?: Function;
}

const Dashboard: React.FC<DashboardProps> = () => {
   

    return(
        <>
            <Navbar />
            <section className="dashboard-container">
                <Sidebar />
                <main className='main'>
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default Dashboard