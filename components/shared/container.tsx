import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px] h-[100%] px-[15px]', className)}>
      {children}
    </div>
  )
}
