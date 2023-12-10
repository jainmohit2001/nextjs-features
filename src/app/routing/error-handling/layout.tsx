export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 border-2 border-blue-500 p-3">
      <p>This is a layout for Error Handling.</p>
      {children}
    </div>
  )
}
