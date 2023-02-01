import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAthentication'

export default function RootLayout() {
  const { user } = useAuthentication()

  if (user?.email === '') {
    return <Navigate to='/' />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
