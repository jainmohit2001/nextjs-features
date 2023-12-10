import { BackButton } from '@/components/back-button'

export default function RoutingPage() {
  return (
    <div className="flex flex-col gap-3 border-2 border-purple-500 p-3">
      <p>This is the content present in routing/page1/page.tsx</p>
      <p>The layout stays the same for this nested route.</p>
      <BackButton />
      <p>
        We are using the <code>useRouter</code> Hook to navigate back.
      </p>
    </div>
  )
}
