import { Suspense } from 'react'

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
        <div className="flex flex-1 flex-col gap-3 border-2 border-green-500 p-3">
          <p className="text-2xl">This is a layout for Slot1</p>
          <Suspense
            key={'slot1'}
            fallback={
              <p className="flex flex-1 text-xl text-green-500">
                Loading Slot 1...
              </p>
            }
          >
            {props.slot1}
          </Suspense>
        </div>

        <div className="flex flex-1 flex-col gap-3 border-2 border-blue-500 p-3">
          <p className="text-2xl">This is a layout for Slot2</p>
          <Suspense
            key={'slot2'}
            fallback={
              <p className="flex flex-1 text-xl text-blue-500">
                Loading Slot 2...
              </p>
            }
          >
            {props.slot2}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
