import React from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'

const App = ()=> {
    return (
        <React.Fragment>
            <Header/>
            <Content>
                <h1>Conteúdo</h1>
            </Content>
        </React.Fragment>
    )
}

export { App }