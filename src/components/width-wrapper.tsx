import { cn } from '@/lib/utils'

type WidthWrapperProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function WidthWrapper({
  children,
  className,
  ...props
}: WidthWrapperProps) {
  return (
    <div className={cn('w-full px-6 md:px-3', className)} {...props}>
      {children}
    </div>
  )
}
