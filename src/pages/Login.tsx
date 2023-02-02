import { FormEvent, useRef } from 'react'
import { useAuthentication } from '../hooks/useAthentication'

export default function Login() {
  const { login } = useAuthentication()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (login.isLoading) return

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (email === '' || password === '') return

    login.mutate({ email, password })
  }

  return (
    <form className='flex flex-col gap-y-5' onSubmit={handleSubmit}>
      <h1 className='text-gray-600 font-bold text-2xl'>Log In</h1>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-gray-600 text-sm'>
          Email:
        </label>
        <input
          autoFocus
          required
          ref={emailRef}
          type='email'
          className='focus:outline-none border border-gray-300 rounded-md p-3 text-gray-600'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='password' className='text-gray-600 text-sm'>
          Password:
        </label>
        <input
          required
          title='Must contain at least 4 or more characters'
          pattern='.{4,}'
          ref={passwordRef}
          type='password'
          className='focus:outline-none border border-gray-300 rounded-md p-3 text-gray-600'
        />
      </div>
      <button
        type='submit'
        className='bg-indigo-600 rounded-md p-3 text-white font-bold'
      >
        Log In
      </button>
    </form>
  )
}
