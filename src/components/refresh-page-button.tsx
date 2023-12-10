'use client'

import { Button } from './ui/button'

export function RefreshPageButton() {
  const onClick = () => {
    location.reload()
  }

  return (
    <Button variant="secondary" className="w-fit" onClick={onClick}>
      Refresh
    </Button>
  )
}
