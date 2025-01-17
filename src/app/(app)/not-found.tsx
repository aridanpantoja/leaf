import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-prose">
      <WidthWrapper>
        <div className="flex flex-col items-center">
          <h1>404</h1>
          <p>The page that you looking for is unavailable or dont exist</p>
          <Link className={buttonVariants({ className: 'mt-4' })} href="/">
            Go home
          </Link>
        </div>
      </WidthWrapper>
    </section>
  )
}
