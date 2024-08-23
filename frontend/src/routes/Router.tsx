import { Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <Routes>
        <Route path='/login'/>
        <Route path='/'/>
        <Route path='/tours'/>
        <Route path='/tour'/>
        <Route path='*'/>
    </Routes>
  )
}

export default Router