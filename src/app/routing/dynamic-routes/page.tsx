import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { BackButton } from '@/components/back-button'

export default function Page() {
  const urls = [
    '/routing/dynamic-routes/1',
    '/routing/dynamic-routes/2',
    '/routing/dynamic-routes/a',
    '/routing/dynamic-routes/1/2',
  ]
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl font-bold">Dynamic Routes</p>
      <p className="text-sm">
        When we don&apos;t know the exact segment names ahead of time, we use
        dynamic routes.
      </p>
      <p className="text-sm">
        These are generally used when we have to show content to user based on
        some <code>slug</code> or <code>id</code>.
      </p>
      {urls.map((url, index) => {
        return (
          <Link
            key={index}
            href={url}
            className={buttonVariants({
              variant: 'link',
              className: 'active w-fit',
            })}
          >
            {url}
          </Link>
        )
      })}
      <p>We have two pages defined as follows:</p>
      <p className="text-sm">
        1. <code>{'app/routing/dynamic-routes/[id]/page.tsx'}</code>: This takes
        preference over the catch-all router
      </p>
      <p className="text-sm">
        2. <code>{'app/routing/dynamic-routes/[...slug]/page.tsx'}</code>: This
        is a catch all router
      </p>
      <BackButton />
    </div>
  )
}
