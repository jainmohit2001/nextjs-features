import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl">Loading states</p>
      <Link
        href="/routing/loading/using-loading"
        className={buttonVariants({
          variant: 'link',
          className: 'active w-fit',
        })}
        prefetch={false}
      >
        Using&nbsp;<code>loading.tsx</code>
      </Link>
      <Link
        href="/routing/loading/using-suspense"
        className={buttonVariants({
          variant: 'link',
          className: 'active w-fit',
        })}
        prefetch={false}
      >
        Using&nbsp;<code>{'<Suspense>'}</code>
      </Link>
      <p className="text-sm">
        <b>Note:</b> We have to explicitly set&nbsp;
        <code>export const revalidate = 0</code>&nbsp; to prevent caching in the
        route segments.
      </p>
      <p className="text-sm">
        This is required to simulate a loading state where the data should
        always be fetched from the data source.
      </p>
    </div>
  )
}
