import { UserButton } from '@clerk/nextjs'

function DashboardLayout({ children }: any) {
  return (
    <div className="flex h-screen w-screen">
      <aside className="h-100 w-[200px] border-r border-black/10">Mood</aside>
      <div className="flex w-full flex-col">
        <header className="h-[60px] border-b border-black/10">
          <div className="flex h-full w-full items-center justify-end px-6">
            <UserButton />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
