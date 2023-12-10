import { BackButton } from '@/components/back-button'

type PageParams = {
  params: {
    id: string
  }
}

export default function Page({ params }: PageParams) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl">This is a dynamic page</p>
      <p>
        <code>params: {JSON.stringify(params)}</code>
      </p>
      <BackButton />
    </div>
  )
}
