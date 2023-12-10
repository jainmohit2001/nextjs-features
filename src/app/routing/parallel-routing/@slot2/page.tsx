import { sleep } from '@/lib/utils'

export const revalidate = 0

export default async function Slot2Page() {
  await sleep(3000)

  return <p className="text-xl">This is Slot 2 page.</p>
}
