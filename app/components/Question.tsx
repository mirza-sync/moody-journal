'use client'

import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')

  const onInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    //
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          value={value}
          placeholder="Ask a question"
          onChange={onInputChange}
          className="rounded-lg border border-black/20 px-4 py-2 text-lg"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-400 px-4 py-2 text-lg"
        >
          Ask
        </button>
      </form>
    </div>
  )
}

export default Question
