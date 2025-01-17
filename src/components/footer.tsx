import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'

export function Footer() {
  return (
    <footer className="w-full border-t border-border/25">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            {siteConfig.name} © 2025
          </p>
        </div>
      </WidthWrapper>
    </footer>
  )
}
