import React from 'react'
import { Header } from './components'
import { RecipePage, RecipesPage, VersionPage } from './pages'
import { Switch, Route } from "react-router-dom"
import { GlobalProvider } from './context/GlobalState'
import './style.css'

function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Header/>
          <Switch>
            <Route path='/' exact component={RecipesPage}/>
            <Route path='/recipe/:id' component={RecipePage}/>
            <Route path='/version/:versionId' component={VersionPage}/>
          </Switch>
      </div>
    </GlobalProvider>
  )
}

export default App
