import React from 'react'
import './Content.css'

const Content = (props) => {
    return (<div className="Content">
        {props.children}
    </div>)
}

export { Content }