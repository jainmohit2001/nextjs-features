'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function RoutingPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3 border-2 border-purple-500 p-3">
      <p>This is the content present in routing/page1/page.tsx</p>
      <p>The layout stays the same for this nested route.</p>
      <Button
        variant="secondary"
        className="w-fit"
        onClick={() => router.back()}
      >
        Go back
      </Button>
    </div>
  )
}
