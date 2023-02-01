import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

export default function AppProvider() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
