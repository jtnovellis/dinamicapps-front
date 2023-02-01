import { createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import AuthLayout from './pages/layouts/AuthLayout'
import RootLayout from './pages/layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
])
