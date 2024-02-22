import Editor from '@/app/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id: string) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      // To find entry that belongs to the authenticated user
      userId_id: {
        userId: user.id,
        id,
      },
    },
  })
  return entry
}

const EntryPage = async ({ params }: any) => {
  const entry = await getEntry(params.id)
  return (
    <div className="grid h-full w-full grid-cols-3">
      <div className="col-span-2">
        {entry ? <Editor entry={entry} /> : <span>Entry not found!</span>}
      </div>
      <div className="border-l border-black/10 bg-white">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <ul className="text-lg">
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Summary</span>
            <span>Summary value</span>
          </li>
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Subject</span>
            <span>Subject value</span>
          </li>
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Mood</span>
            <span>Mood value</span>
          </li>
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Negative</span>
            <span>False</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EntryPage
