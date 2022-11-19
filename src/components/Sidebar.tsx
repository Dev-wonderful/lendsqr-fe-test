import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
    return(
        <aside className='sidebar'>
            <span>
                Switch Organization
                <select name="organizations">
                    <option></option>
                    <option value="lendsqr">Lendsqr</option>
                    <option value="irorun">Irorun</option>
                    <option value="lendstar">Lendstar</option>
                </select>
            </span>
            <span>Dashboard</span>
            <div className="navigation-container">
                <div className="navigation-group">
                    <h4>CUSTOMERS</h4>
                    <Link to="">Users</Link>
                    <Link to="">Guarantors</Link>
                    <Link to="">Loans</Link>
                    <Link to="">Decision Models</Link>
                    <Link to="">Savings</Link>
                    <Link to="">Loan Requests</Link>
                    <Link to="">Whitelist</Link>
                    <Link to="">Karma</Link>
                </div>
                <div className="navigation-group">
                    <h4>BUSINESSES</h4>
                    <Link to="">Organiztion</Link>
                    <Link to="">Loan Products</Link>
                    <Link to="">Savings Product</Link>
                    <Link to="">Fees and Charges</Link>
                    <Link to="">Transactions</Link>
                    <Link to="">Services</Link>
                    <Link to="">Service Account</Link>
                    <Link to="">Settlements</Link>
                    <Link to="">Reports</Link>
                </div>
                <div className="navigation-group">
                    <h4>SETTINGS</h4>
                    <Link to="">Preferences</Link>
                    <Link to="">Fees and Pricing</Link>
                    <Link to="">Audit Logs</Link>
                    <Link to="">System Messages</Link>
                    <Link to="">Logout</Link>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar