import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  console.log('Current user:', user)

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  })
  console.log('Existing user:', existingUser)

  if (!existingUser) {
    await prisma.user.create({
      data: {
        clerkId: user!.id,
        email: user!.emailAddresses[0].emailAddress,
      },
    })
  }

  redirect('/journal')
}

const NewUserPage = async () => {
  await createNewUser()
  return <div>new-user</div>
}

export default NewUserPage
