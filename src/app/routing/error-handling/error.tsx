'use client'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col gap-3 border-2 border-red-500 p-3">
      <p className="text-lg">Something went wrong!</p>
      <p className="text-sm">
        Error: <span className="font-medium text-red-600">{error.message}</span>
      </p>
      <Button variant="destructive" className="w-fit" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
