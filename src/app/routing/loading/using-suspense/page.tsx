import { Suspense } from 'react'

import { SuspenseContent } from './suspense-content'

export const revalidate = 0

export default function Page() {
  return (
    <div>
      <Suspense fallback={<p className="text-2xl">Loading...</p>}>
        <SuspenseContent />
      </Suspense>
    </div>
  )
}
