import { Link } from 'react-router-dom'

export default function AuthHeader() {
  return (
    <header className='bg-indigo-600 w-full py-6 px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 shadow-lg'>
      <Link to='/' className='font-extrabold text-white uppercase text-3xl'>
        Caldoit
      </Link>
    </header>
  )
}
