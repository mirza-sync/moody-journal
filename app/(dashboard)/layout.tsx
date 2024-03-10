import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ReactNode } from 'react'

type DashboardLayoutProps = {
  children: ReactNode
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
]

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <aside className="h-100 w-[200px] border-r border-black/10">
        <div className="pt-4 text-center text-xl font-bold">Mood Logo</div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="px-2 py-6 text-lg">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex w-full flex-col">
        <header className="h-[60px] border-b border-black/10">
          <div className="flex h-full w-full items-center justify-end px-6">
            <UserButton />
          </div>
        </header>
        <main className="h-full overflow-y-auto bg-zinc-400/10 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
