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
    <div>
      {entry ? <Editor entry={entry} /> : <span>Entry not found!</span>}
    </div>
  )
}

export default EntryPage
