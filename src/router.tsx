import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/dashboard'
import HomePage from './pages/HomePage'
import AuthLayout from './pages/layouts/AuthLayout'
import RootLayout from './pages/layouts/RootLayout'
import AppProvider from './components/AppProvider'
import Admin from './pages/dashboard/Admin'
import User from './pages/dashboard/User'
import ErrorPage from './pages/ErrorPage'

export const router = createBrowserRouter([
  {
    element: <AppProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              {
                path: 'admin/:adminId',
                element: <Admin />,
              },
              {
                path: 'user/:userId',
                element: <User />,
              },
            ],
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <SignUp />,
          },
        ],
      },
    ],
  },
])
