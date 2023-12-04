import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <section>
      <Link href="/routing" className={buttonVariants({ variant: 'link' })}>
        Routing
      </Link>
    </section>
  )
}
