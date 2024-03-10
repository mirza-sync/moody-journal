'use client'

import { updateEntry } from '@/utils/api'
import { Analysis, JournalEntry } from '@prisma/client'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

type EditorProps = {
  entry: JournalEntry & {
    analysis: Analysis | null
  }
}

const Editor = ({ entry }: EditorProps) => {
  const [value, setValue] = useState(entry.content)
  const [isSaving, setIsSaving] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)
  const { mood, subject, summary, negative, color } = analysis as Analysis

  useAutosave({
    data: value,
    onSave: async (_value: string) => {
      setIsSaving(true)
      const updatedEntry = await updateEntry(entry.id, _value)
      setAnalysis(updatedEntry.analysis)
      setIsSaving(false)
    },
  })

  return (
    <div className="grid h-full w-full grid-cols-3">
      <div className="col-span-2">
        {isSaving && <div>Saving...</div>}
        <textarea
          className="h-full w-full p-8 text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-black/10 bg-white">
        <div
          className="px-6 py-10"
          style={{
            backgroundColor: color,
          }}
        >
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <ul className="text-lg">
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Summary</span>
            <span>{summary}</span>
          </li>
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Subject</span>
            <span>{subject}</span>
          </li>
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Mood</span>
            <span>{mood}</span>
          </li>
          <li className="flex items-center justify-between border-b px-2 py-4">
            <span className="font-semibold">Negative</span>
            <span>{negative ? 'True' : 'False'}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Editor
