import React from 'react'
import './Page.css'

const Page = ({ header, body }) => {
    return (
        <div className="Page">
            <header className="Page--header">
                {header}
            </header>
            <div className="Page--body">
                {body}
            </div>
        </div>
    )
}

export { Page }