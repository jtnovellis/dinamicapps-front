import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import AuthLayout from './pages/layouts/AuthLayout'
import RootLayout from './pages/layouts/RootLayout'
import AppProvider from './components/AppProvider'

export const router = createBrowserRouter([
  {
    element: <AppProvider />,
    children: [
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
    ],
  },
])
