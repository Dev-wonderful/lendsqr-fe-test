import React from 'react'
import { Link, Outlet } from 'react-router-dom'

interface userDetailProps {}

const UserDetails: React.FC<userDetailProps> = () => {
    return(
        <div className='user-details-container'>
            <header>
                <Link to="/dashboard">&larr; Back to Users</Link>
                <div className='top'>
                    <h2>User Details</h2>
                    <div className='button-container'>
                        <button className='blacklist'><strong>BLACKLIST USER</strong></button>
                        <button className='activate'><strong>ACTIVATE USER</strong></button>
                    </div>
                </div>
            </header>
            <main>
                <section className='detail-summary'>
                    <div className='intro'>
                        <section>
                            <img className="passport"src="" alt="passport" />
                            <div>
                                <span className='emphasis'><strong>Name</strong></span>
                                <span className='id'>ID</span>
                            </div>
                        </section>
                        <div>
                            <span>User's Tier</span>
                            <img className='id' src="" alt="stars" />
                        </div>
                        <div>
                            <span className='emphasis'><strong><span style={{textDecoration: 'line-through'}}>N</span>200,000</strong></span>
                            
                            <span className='id'>acc number/Bank name</span>
                        </div>
                    </div>
                    <div className="user-details-category">
                        <Link to="">General Details</Link>
                        <Link to="">Documents</Link>
                        <Link to="">Bank Details</Link>
                        <Link to="">Loans</Link>
                        <Link to="">Savings</Link>
                        <Link to="">App and System</Link>
                    </div>
                </section>

                <Outlet />
            </main>
        </div>
    )
}

export default UserDetails