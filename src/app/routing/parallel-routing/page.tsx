export default function ParallelRoutingPage() {
  return (
    <div className="flex flex-col gap-3 border-2 border-pink-500 p-2 text-sm">
      <p>
        This is the content of the default and implicit <code>@children</code>
        &nbsp;prop
      </p>
      <p>
        Here we load two different server components with different loading
        states and times.
      </p>
    </div>
  )
}
