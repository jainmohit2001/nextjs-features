'use client'

import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

export function BackButton() {
  const router = useRouter()

  return (
    <Button variant="secondary" className="w-fit" onClick={() => router.back()}>
      Go back
    </Button>
  )
}
