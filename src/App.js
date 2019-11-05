import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Generos from './Generos'
import NovoGenero from './NovoGenero'

const Home = () => {
  return <h1>Teste</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  )
}

export default App
