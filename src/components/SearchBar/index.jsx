import React from 'react'
import './SearchBar.css'
import icon from './mg-icon.svg'

const SearchBar = () => (
    <div className="SearchBar">
        <img className="SearchBar--icon" src={icon} alt="Ícone da barra de busca" />
        <input className="SearchBar--input" type="search" placeholder="Buscar por nome" />
    </div>
)

export { SearchBar }