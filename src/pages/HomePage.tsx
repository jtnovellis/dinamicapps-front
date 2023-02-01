import { Link } from 'react-router-dom'
import hero from '../assets/agenda.png'
import { useAuthentication } from '../hooks/useAthentication'

export default function HomePage() {
  const { user } = useAuthentication()
  const pathToGetStarted =
    user?.email !== '' ? `/dashboard/${user?.role}/${user?.email}` : '/login'
  return (
    <div className='mt-10 flex flex-col gap-12 items-center md:flex-row justify-center'>
      <div className='flex flex-col gap-4 max-w-[600px]'>
        <h1 className='bg-gradient-to-r text-[60px] font-extrabold from-indigo-600 via-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
          Schedule your appoinments
        </h1>
        <p className='text-gray-500 mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam ex
          id enim vel impedit accusamus consequuntur eligendi cupiditate
          distinctio?
        </p>
        <Link
          to={pathToGetStarted}
          className='rounded-full bg-indigo-600 text-white px-5 py-3 mt-8 justify-self-center text-center font-bold'
        >
          Get Started
        </Link>
      </div>
      <div className='mt-10 justify-self-center'>
        <img src={hero} alt='Hero image' className='object-fit max-w-[500px]' />
      </div>
    </div>
  )
}
