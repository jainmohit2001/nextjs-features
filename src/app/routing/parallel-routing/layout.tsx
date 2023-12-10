type ParallelLayoutParams = {
  children: React.ReactNode
  slot1: React.ReactNode
  slot2: React.ReactNode
}

export default function ParallelLayout(props: ParallelLayoutParams) {
  return (
    <div className="flex flex-col gap-3 border-2 border-violet-500 p-3">
      <p className="text-xl">
        This is the layout that covers both Slot1 and Slot2 components along
        with the default page.
      </p>
      {props.children}
      <div className="flex gap-3">
        {props.slot1}
        {props.slot2}
      </div>
    </div>
  )
}
