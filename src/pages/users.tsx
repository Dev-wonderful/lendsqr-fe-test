import React from 'react'
import Summary from '../components/Summary'
import Userlist from '../components/Userlist'

interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
    return(
        <section className="users-container">
            <header>
                <h2>Users</h2>
                <div className="users-summary">
                    <Summary title="USERS" amount={"2,453"} />
                    <Summary title="ACTIVE USERS" amount={"2,453"} />
                    <Summary title="USERS WITH LOANS" amount={"12,453"} />
                    <Summary title="USERS WITH SAVINGS" amount={"102,453"} />
                </div>
            </header>
            <main>
                <div className="user-info-category">
                    <span className='filter'>FILTER</span>
                    <span>ORGANIZATION</span>
                    <span>USERNAME</span>
                    <span>EMAIL</span>
                    <span>PHONE NUMBER</span>
                    <span>DATE JOINED</span>
                    <span>STATUS</span>
                </div>
                <div className="user-list-container">
                    <Userlist />
                </div>
                <div className="pagination">
                    <span>Showing</span>
                    <select name="filter">
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>out of 100</span>
                    <div>
                        <button>previous</button>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <button>next</button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Users