import { auth } from '@clerk/nextjs'
import { prisma } from './db'

export const getUserByClerkID = async (select = null, include = null) => {
  const { userId } = auth()

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
    select,
    include,
  })

  return user
}
