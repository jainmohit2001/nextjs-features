'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 flex flex-1 z-10 border-b-2 px-5 py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        className="ml-auto"
        variant="outline"
        size="icon"
        title="Toggle Theme"
        onClick={() => {
          setTheme(theme == 'light' ? 'dark' : 'light')
        }}
      >
        {theme == 'light' ? <Sun /> : <Moon />}
      </Button>
    </header>
  )
}
