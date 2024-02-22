'use client'

import { JournalEntry } from '@prisma/client'
import { useState } from 'react'

type EditorProps = {
  entry: JournalEntry
}

const Editor = ({ entry }: EditorProps) => {
  const [value, setValue] = useState(entry.content)
  return (
    <div className="h-full w-full">
      <textarea
        className="h-full w-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor