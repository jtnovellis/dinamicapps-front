import { useParams } from 'react-router-dom'

export default function Admin() {
  const { adminId } = useParams()
  return <div>Admin {adminId}</div>
}
