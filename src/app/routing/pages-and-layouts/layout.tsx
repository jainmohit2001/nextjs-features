export default function RoutingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3 border-2 border-blue-100 p-3">
      <p>This is the content present in routing/layout.tsx.</p>
      {children}
    </section>
  )
}
