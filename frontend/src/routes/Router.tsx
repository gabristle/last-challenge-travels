import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import Tour from '../pages/Tour'
import Error from '../pages/Error'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

function Router() {
  return (
    <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path="/login" element={<Login />}/>
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route path="/tours" element={<Tours />}/>
          <Route path="/tour/:id" element={<Tour />}/>
        </Route>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
  )
}

export default Router