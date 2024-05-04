import Column from './SectionDroppable'

export default function Kanban() {
  return (
    <main className="p-4 w-full min-h-full grid grid-cols-3 gap-8">
      <Column id="todo" title="Pending" bgColor="bg-blue-800" />
      <Column id="in-progress" title="In progress" bgColor="bg-purple-800" />
      <Column id="done" title="Completed" bgColor="bg-green-800" />
    </main>
  )
}
