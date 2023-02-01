import { Link } from 'react-router-dom'

export default function AuthHeader() {
  return (
    <header className='bg-indigo-600 w-full py-6 px-3 shadow-lg'>
      <nav className='max-w-screen-2xl mx-auto px-2'>
        <Link to='/' className='font-extrabold text-white uppercase text-3xl'>
          Caldoit
        </Link>
      </nav>
    </header>
  )
}
