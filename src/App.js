import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { SituacoesPage } from './pages/Situacoes/SituacoesPage'
import { SituacaoPage } from './pages/Situacao/SituacaoPage'

const App = ()=> {
    return (
        <React.Fragment>
            <Header/>
            <BrowserRouter>
                <Content>
                    <Switch>
                        <Route exact path="/" component={SituacoesPage} />
                        <Route path="/situacao/:id" component={SituacaoPage} />
                    </Switch>
                </Content>
            </BrowserRouter>
        </React.Fragment>
    )
}

export { App }