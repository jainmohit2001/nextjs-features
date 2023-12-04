'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from './ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

type NavInfo = {
  label: string
  href: string
  content: [{ label: string; href: string }]
}

const data: NavInfo[] = [
  {
    label: 'Routing',
    href: '/routing',
    content: [
      { label: 'Pages and Layouts', href: '/routing/pages-and-layouts' },
    ],
  },
]

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="sticky flex h-[calc(100vh-var(--header-height))] flex-1 flex-col px-2 py-4">
      <div className="flex h-full w-[300px] flex-1 flex-col gap-2 overflow-y-scroll">
        {data.map((item, index) => {
          const open = pathname.startsWith(item.href)
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

  return (
    <Collapsible open={open} className="px-4" key={index}>
      <CollapsibleTrigger
        onClick={() => {
          setOpen(!open)
        }}
      >
        <Link
          href={item.href}
          className={pathname == item.href ? 'active' : undefined}
        >
          {item.label}
        </Link>
      </CollapsibleTrigger>

      <CollapsibleContent>
        {item.content.map((subItem, subIndex) => {
          return (
            <Link
              key={subIndex}
              href={subItem.href}
              className={buttonVariants({
                variant: 'link',
                className:
                  'whitespace-nowrap' +
                  (pathname == subItem.href ? ' active' : ''),
              })}
            >
              {subItem.label}
            </Link>
          )
        })}
      </CollapsibleContent>
    </Collapsible>
  )
}
