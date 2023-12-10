import { BackButton } from '@/components/back-button'

export default function Page({ params }: { params: unknown }) {
  return (
    <div className="flex flex-col gap-3">
      <p>This is a catch all segments page.</p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>
      <BackButton />
    </div>
  )
}
