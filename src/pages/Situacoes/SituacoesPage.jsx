import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '../../components/Page'
import { SituationsFeed } from '../../components/SituationsFeed'
import { SearchBar } from '../../components/SearchBar'
import './SituacoesPage.css'

const header = (
    <React.Fragment>
        <h1 className="SituacoesPage--title">Situações do Documento</h1>
        <SearchBar />
    </React.Fragment>
)

const items = [
    { name: "Andamento", description: "Descrição da situação" },
    { name: "Andamento", description: "Descrição da situação" },
    { name: "Andamento", description: "Descrição da situação" },
]

const body = <SituationsFeed items={items} />

const SituacoesPage = () => <Page header={header} body={body} />

export { SituacoesPage }