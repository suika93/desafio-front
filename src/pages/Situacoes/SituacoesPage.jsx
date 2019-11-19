import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '../../components/Page'
import { SituationList } from '../../components/SituationList'
import { SituationItem } from '../../components/SituationItem'
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

const itemsToSituationItemComponent = 
    (item) => <SituationItem name={item.name} description={item.description} />

const body = (
    <React.Fragment>
        <SituationList items={items.map(itemsToSituationItemComponent)}/>
    </React.Fragment>
)

const SituacoesPage = () => <Page header={header} body={body} />

export { SituacoesPage }