import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Form } from './pages/Form/Form'
import { Detail } from './pages/Detail/Detail'
import { Nav } from './components/Nav/Nav'
import { Landing } from './pages/Landing/Landing'
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
