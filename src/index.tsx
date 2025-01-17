import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from 'controlled/App'
import UnControlledApp from 'uncontrolled/UnControlledApp'
import CardAddPage from 'controlled/pages/CardAddPage'
import CardAddCompletePage from 'controlled/pages/CardAddCompletePage'
import CardListPage from 'controlled/pages/CardListPage'
import UnControlledCardListPage from 'uncontrolled/pages/CardListPage'
import UnControlledCardAddPage from 'uncontrolled/pages/CardAddPage'

//Composing <Route> in React Router v6 - https://gist.github.com/ahmadrasyidsalim/c965147c2d459e05177238e04f0310c6
//prettier-ignore

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnControlledApp><UnControlledCardListPage /></UnControlledApp>}/>
        <Route path="/uncontrolled/add" element={<App><UnControlledCardAddPage/></App>}/>
        {/* <Route path="/" element={<App><CardListPage /></App>}/> */}
        {/* <Route path="/add" element={<App><CardAddPage /></App>}/> */}
        {/* <Route path="/add-complete"  element={<App><CardAddCompletePage /></App>}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
