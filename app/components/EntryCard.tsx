type EntryCardProps = {
  entry: any
}

const EntryCard = ({ entry }: EntryCardProps) => {
  const date = new Date(entry.createdAt).toDateString()

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">Analysis</div>
      <div className="px-4 py-5">Mood</div>
    </div>
  )
}

export default EntryCard
