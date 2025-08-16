import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404 Error</h1>
      <p>Page is not found</p>
      <Link href="/">come back</Link>
    </div>
  )
}