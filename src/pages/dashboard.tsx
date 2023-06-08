import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';


interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    const data = async () => {
        const raw = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
        const users = await raw.json()

        console.log(users[0])

    } 

    data()

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