import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PublicRoutes: React.FC = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <></>
  }

  return user ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes