'use client'

import { updateEntry } from '@/utils/api'
import { JournalEntry } from '@prisma/client'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

type EditorProps = {
  entry: JournalEntry
}

const Editor = ({ entry }: EditorProps) => {
  const [value, setValue] = useState(entry.content)
  const [isSaving, setIsSaving] = useState(false)
  useAutosave({
    data: value,
    onSave: async (_value: string) => {
      setIsSaving(true)
      const updatedEntry = await updateEntry(entry.id, _value)
      setIsSaving(false)
    },
  })

  return (
    <div className="h-full w-full">
      {isSaving && <div>Saving...</div>}
      <textarea
        className="h-full w-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor
