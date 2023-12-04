'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function RoutingPage() {
  return (
    <div className="flex flex-col gap-3 border-2 border-red-500 p-3">
      <p>This is the content present in routing/page.tsx.</p>
      <Link
        href="/routing/page1"
        className={buttonVariants({ variant: 'secondary', className: 'w-fit' })}
      >
        Nested Page
      </Link>
      <p>
        When you go to a nested page, the layout will not be rendered again.
        Only the content will change.
      </p>
      <Link
        href="/"
        className={buttonVariants({ variant: 'secondary', className: 'w-fit' })}
      >
        Home Page
      </Link>
    </div>
  )
}
