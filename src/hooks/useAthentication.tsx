import { useContext } from 'react'
import { Context, AuthContext } from '../context/AuthContext'

export function useAuthentication() {
  return useContext(Context) as AuthContext
}
