import React from 'react'
import './SituationItem.css'

const SituationItem = ({name, description}) => {
    return (
        <div className="SituationItem">
            <p className="SituationItem--information">
                <span className="SituationItem--label">Nome:</span> {name}</p>
            <p className="SituationItem--information">
                <span className="SituationItem--label">Descrição:</span> {description}</p>
        </div>
    )
}

export { SituationItem }