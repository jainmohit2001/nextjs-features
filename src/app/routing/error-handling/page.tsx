import { sleep } from '@/lib/utils'

async function networkError(): Promise<string> {
  await sleep(1000)
  throw new Error('value of rand is false')
}

export default async function ErrorHandlingPage() {
  const error = await networkError()

  return (
    <div className="flex flex-col gap-3 border-2 border-green-500 p-3">
      <p className="text-2xl">Error handling page {error}</p>
    </div>
  )
}
