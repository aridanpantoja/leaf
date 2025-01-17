import { badgeVariants } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-prose text-balance text-center">
        <WidthWrapper>
          <Link
            href="https://payloadcms.com/docs/getting-started/what-is-payload"
            className={badgeVariants({
              className: 'mb-4',
              variant: 'secondary',
            })}
          >
            What is Payload? 📗
          </Link>
          <h1 className="leading-tight">
            Your <span className="text-blue-600">Payload Boilerplate</span> for
            Modern Web Development
          </h1>
          <p className="text-muted-foreground">
            Streamline your workflow with a robust boilerplate featuring
            Node.js, TypeScript, Next.js 15, React 19, Payload CMS 3, Tailwind
            CSS, Shadcn UI, ESLint and Prettier.
          </p>
          <Link
            href={siteConfig.links.github}
            className={buttonVariants({ className: 'mt-6 w-full max-w-sm' })}
          >
            Star on Github ⭐
          </Link>
        </WidthWrapper>
      </section>
    </>
  )
}
