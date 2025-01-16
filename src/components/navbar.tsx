import { ModeToggle } from '@/components/theme/mode-toggle'
import { WidthWrapper } from '@/components/width-wrapper'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <WidthWrapper>
        <div>
          <nav className="flex h-16 items-center justify-between">
            <Link href="/" className="flex h-full w-fit items-center gap-2">
              <span className="font-bold">LOGO</span>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </WidthWrapper>
    </header>
  )
}
