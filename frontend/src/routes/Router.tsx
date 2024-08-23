import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import Tour from '../pages/Tour'
import Error from '../pages/Error'

function Router() {
  return (
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/tours" element={<Tours />}/>
        <Route path="/tour" element={<Tour />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
  )
}

export default Router