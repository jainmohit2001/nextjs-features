'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from './ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

type LinkInfo = {
  label: string
  href: string
  refresh?: boolean
}

type NavInfo = {
  trigger: LinkInfo
  content: LinkInfo[]
}

const data: NavInfo[] = [
  {
    trigger: {
      label: 'Routing',
      href: '/routing',
    },
    content: [
      { label: 'Pages and Layouts', href: '/routing/pages-and-layouts' },
      { label: 'Dynamic routes', href: '/routing/dynamic-routes' },
      { label: 'Loading', href: '/routing/loading' },
      { label: 'Error handling', href: '/routing/error-handling' },
      {
        label: 'Parallel routing',
        href: '/routing/parallel-routing',
        refresh: true,
      },
    ],
  },
]

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="sticky flex h-[calc(100vh-var(--header-height))] flex-1 flex-col px-2 py-4">
      <div className="flex h-full w-[300px] flex-1 flex-col gap-2 overflow-y-scroll">
        {data.map((item, index) => {
          const open = pathname.startsWith(item.trigger.href)
          return Collapse(item, index, open, pathname)
        })}
      </div>
    </div>
  )
}

function Collapse(
  item: NavInfo,
  index: number,
  initialOpen: boolean,
  pathname: string,
) {
  const [open, setOpen] = useState(initialOpen)
  const router = useRouter()

  const navigate = (item: LinkInfo) => {
    router.push(item.href)
    if (item.refresh === true) {
      router.refresh()
    }
  }

  return (
    <Collapsible open={open} className="px-4" key={index}>
      <CollapsibleTrigger
        onClick={() => {
          setOpen(!open)
        }}
      >
        <a
          onClick={() => navigate(item.trigger)}
          className={pathname == item.trigger.href ? 'active' : undefined}
        >
          {item.trigger.label}
        </a>
      </CollapsibleTrigger>

      <CollapsibleContent>
        {item.content.map((subItem, subIndex) => {
          return (
            <Button
              variant="link"
              onClick={() => navigate(subItem)}
              key={subIndex}
              className={
                'whitespace-nowrap' +
                (pathname.startsWith(subItem.href) ? ' active' : '')
              }
            >
              {subItem.label}
            </Button>
          )
        })}
      </CollapsibleContent>
    </Collapsible>
  )
}
