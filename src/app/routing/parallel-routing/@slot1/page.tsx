import { sleep } from '@/lib/utils'

export default async function Slot1Page() {
  await sleep(1500)

  return <p className="text-xl">This is Slot 1 page.</p>
}
