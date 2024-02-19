'use client'

import { JournalEntry } from '@prisma/client'

type EditorProps = {
  entry: JournalEntry
}

const Editor = ({ entry }: EditorProps) => {
  return <div>{entry.content}</div>
}

export default Editor
