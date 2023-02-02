import { FormEvent, useRef } from 'react'
import { useAuthentication } from '../hooks/useAthentication'

export default function SignUp() {
  const { signup } = useAuthentication()

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (signup.isLoading) return

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (name === '' || email === '' || password === '') return

    signup.mutate({ name, email, password })
  }

  return (
    <form className='flex flex-col gap-y-5' onSubmit={handleSubmit}>
      <h1 className='text-gray-600 font-bold text-2xl'>Sign Up</h1>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name' className='text-gray-600 text-sm'>
          Name:
        </label>
        <input
          required
          ref={nameRef}
          autoFocus
          id='name'
          type='text'
          className='focus:outline-none border border-gray-300 rounded-md p-3 text-gray-600'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-gray-600 text-sm'>
          Email:
        </label>
        <input
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
        Sign Up
      </button>
    </form>
  )
}
