import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-indigo-600 w-full py-6 px-3 shadow-lg'>
      <nav className='max-w-screen-2xl mx-auto px-2 flex items-center justify-between'>
        <Link to='/' className='font-extrabold text-white uppercase text-3xl'>
          Caldoit
        </Link>
        <Link
          to='/login'
          className='bg-indigo-900 text-white font-bold px-5 py-3 rounded-xl hover:bg-indigo-500'
        >
          Log In
        </Link>
      </nav>
    </header>
  )
}
