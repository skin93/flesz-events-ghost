import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
    </div>
  )
}
