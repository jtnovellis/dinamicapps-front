import { Outlet, useLocation, Link } from 'react-router-dom'
import AuthHeader from '../../components/AuthHeader'
import AuthCard from '../../components/AuthCard'

export default function AuthLayout() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'
  return (
    <>
      <AuthHeader />
      <AuthCard>
        <AuthCard.Body>
          <Outlet />
        </AuthCard.Body>
        <AuthCard.SubCard>
          <Link
            to={isLoginPage ? '/signup' : '/login'}
            className='text-gray-600 text-sm hover:underline'
          >
            {isLoginPage ? 'Create account' : 'Go to log in'}
          </Link>
        </AuthCard.SubCard>
      </AuthCard>
    </>
  )
}
