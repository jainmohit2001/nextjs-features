import { sleep } from '@/lib/utils'
import { BackButton } from '@/components/back-button'
import { RefreshPageButton } from '@/components/refresh-page-button'

export const revalidate = 0

export default async function Page() {
  await sleep(2000)
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl">Loading completed.</p>
      <p className="text-sm">
        As you can see, the loading state first appeared for some time and
        afterwards the actual rendered page is shown to the user.
      </p>
      <RefreshPageButton />
      <BackButton />
    </div>
  )
}
