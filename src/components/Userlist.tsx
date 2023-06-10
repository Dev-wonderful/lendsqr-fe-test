import React from 'react';

type status = "Active" | "Inactive"| "Pending" | "Blacklisted";

interface UserlistProps {
    organization?: string,
    username?: string,
    email?: string,
    phoneNumber?: string,
    date?: string,
    status?: status
}

const Userlist: React.FC<UserlistProps> = ({ organization, username, email, phoneNumber, date, status }) => {
    return(
        <div className="user-list">
            <span>{organization}</span>
            <span>{username}</span>
            <span>{email}</span>
            <span>{phoneNumber}</span>
            <span>{date}</span>
            <span>{status}</span>
            {/* <span>icon</span> */}
        </div>
    )
}

export default Userlist