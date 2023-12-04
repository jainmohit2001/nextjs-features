'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function RoutingPage() {
  const code = '<Link />'

  return (
    <div className="flex flex-col gap-3 border-2 border-red-500 p-3">
      <p>This is the content present in routing/page.tsx.</p>

      <div className="flex flex-wrap items-center gap-3">
        <p>
          {'The adjacent link is created using the '}
          <code>{code}</code>
          {' component.'}
        </p>
        <Link
          href="/routing/pages-and-layouts/page1"
          className={buttonVariants({
            variant: 'secondary',
            className: 'w-fit',
          })}
        >
          Nested Page
        </Link>
      </div>

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
