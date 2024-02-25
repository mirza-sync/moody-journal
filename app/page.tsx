import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const { userId } = auth()

  const href = userId ? '/journal' : '/new-user'

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="mx-auto max-w-[600px]">
        <h1 className="mb-4 text-6xl">
          Daily journal, with AI-powered mood analyzer
        </h1>
        <p className="mb-5 text-2xl text-white/60">
          The best journaling app to track your mood throughout your life. All
          you have to do is be honest
        </p>
        <div>
          <Link href={href}>
            <button className="rounded-lg bg-blue-800 px-4 py-2 text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
