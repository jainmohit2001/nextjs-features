export default function Slot1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 border-2 border-green-500 p-3">
      <p className="text-2xl">This is a layout for Slot1</p>
      {children}
    </div>
  )
}
