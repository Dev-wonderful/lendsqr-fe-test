import React from 'react'

interface SummaryProps {
    icon?: any
    title?: string
    amount?: string
}

const Summary: React.FC<SummaryProps> = ({ icon, title, amount }) => {
    return(
        <div className="container">
            <img src={icon} alt=""/>
            <p><strong>{title}</strong></p>
            <span>{amount}</span>
        </div>
    )
}

export default Summary

