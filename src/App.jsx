import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Form } from './pages/Form/Form.jsx'
import { Detail } from './pages/Detail/Detail.jsx'
import { Nav } from './components/Nav/Nav.jsx'
import { Landing } from './pages/Landing/Landing.jsx'
import { useDispatch } from 'react-redux'
import { getAllTeams } from './redux/actions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTeams())
  }, [])

  return (
    <>
        <Nav />
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/home' Component={Home} />
        <Route path='/form' Component={Form} />
        <Route path='/drivers/:id' Component={Detail} />
        <Route path='/drivers/edit/:id' Component={Form} />
      </Routes>
    </>
  )
}

export default App
