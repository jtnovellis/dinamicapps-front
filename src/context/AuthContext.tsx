import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types'
import { api } from '../lib/api'

export type AuthContext = {
  user?: User
  token: string
  signup: UseMutationResult<
    {
      name: string
      email: string
      role: string
      token: string
    },
    unknown,
    User,
    unknown
  >
  login: UseMutationResult<
    {
      name: string
      email: string
      role: string
      token: string
    },
    unknown,
    {
      email: string
      password: string
    },
    unknown
  >
}

export const Context = createContext<AuthContext | null>(null)

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    role: '',
  })
  const [token, setToken] = useState<string>('token')

  const signup = useMutation({
    mutationFn: (user: User) => {
      return api.post('/auth/local/signup', user).then(
        res =>
          res.data as {
            name: string
            email: string
            role: string
            token: string
          }
      )
    },
    onSuccess(data) {
      setToken(data.token)
      setUser({
        email: data.email,
        role: data.role,
        name: data.name,
      })
      if (data.role === 'admin') {
        navigate(`/dashboard/admin/${data.email}`)
      } else {
        navigate(`/dashboard/user/${data.email}`)
      }
    },
  })

  const login = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return api.post('/auth/local/login', { email, password }).then(
        res =>
          res.data as {
            name: string
            email: string
            role: string
            token: string
          }
      )
    },
    onSuccess(data) {
      setToken(data.token)
      setUser({
        email: data.email,
        role: data.role,
        name: data.name,
      })
      if (data.role === 'admin') {
        navigate(`/dashboard/admin/${data.email}`)
      } else {
        navigate(`/dashboard/user/${data.email}`)
      }
    },
  })
  return (
    <Context.Provider value={{ user, token, signup, login }}>
      {children}
    </Context.Provider>
  )
}
