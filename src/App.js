import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Game from './components/cocktails/Game'
import Cocktails from './components/cocktails/Cocktails'
import CocktailShow from './components/cocktails/CocktailShow'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/cocktails/:id">
          <CocktailShow />
        </Route>
        <Route path="/Game">
          <Game />
        </Route>
        <Route path="/Cocktails">
          <Cocktails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
