import { sleep } from '@/lib/utils'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Slot2Page() {
  await sleep(3000)

  return (
    <div>
      <p className="text-xl">This is Slot 2 page.</p>
      <p>{Math.random().toString()}</p>
    </div>
  )
}
