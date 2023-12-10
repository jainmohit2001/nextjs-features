export default function Slot2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 border-2 border-blue-500 p-3">
      <p className="text-2xl">This is a layout for Slot2</p>
      {children}
    </div>
  )
}
