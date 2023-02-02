import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className='max-w-screen-2xl mx-auto px-2'>
        <Outlet />
      </main>
    </>
  )
}
