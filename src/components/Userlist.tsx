import React from 'react';

type status = "Active" | "Inactive"| "Pending" | "Blacklisted";

interface UserlistProps {
    organization?: string,
    usernme?: string,
    email?: string,
    phoneNumber?: number,
    date?: string,
    status?: status
}

const Userlist: React.FC<UserlistProps> = ({ organization, usernme, email, phoneNumber, date, status }) => {
    return(
        <div className="user-list">
            <span>{organization}</span>
            <span>{usernme}</span>
            <span>{email}</span>
            <span>{phoneNumber}</span>
            <span>{date}</span>
            <span>{status}</span>
            <span>icon</span>
        </div>
    )
}

export default Userlist