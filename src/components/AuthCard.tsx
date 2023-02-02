interface AuthCardProps {
  children: React.ReactNode
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className='flex justify-center items-center mt-32'>
      <div className='max-w-md w-full'>{children}</div>
    </div>
  )
}

AuthCard.Body = function ({ children }: AuthCardProps) {
  return <div className='shadow-lg bg-white p-6 rounded-lg'>{children}</div>
}

AuthCard.SubCard = function ({ children }: AuthCardProps) {
  return <div className='mt-2 justify-center flex gap-3'>{children}</div>
}
