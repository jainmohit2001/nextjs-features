import { sleep } from '@/lib/utils'
import { BackButton } from '@/components/back-button'
import { RefreshPageButton } from '@/components/refresh-page-button'

export async function SuspenseContent() {
  await sleep(2000)
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl">Loading completed</p>
      <p className="text-sm">This is the suspense content.</p>
      <p className="text-sm">
        Here we have created a new component that takes involves some
        computation and pre-processing. After the rendering is done the
        component is Streamed back to the user.
      </p>
      <RefreshPageButton />
      <BackButton />
    </div>
  )
}
