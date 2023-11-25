import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <Link href={'/show'}>
        <h1 className='text-6xl text-emerald-700 text-center mt-10'>Le commencement</h1>
      </Link>
    </div>
  )
}
