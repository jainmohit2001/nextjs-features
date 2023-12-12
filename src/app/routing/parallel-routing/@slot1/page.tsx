import { sleep } from '@/lib/utils'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Slot1Page() {
  await sleep(1500)

  return (
    <div>
      <p className="text-xl">This is Slot 1 page.</p>
      <p>{Math.random().toString()}</p>
    </div>
  )
}
