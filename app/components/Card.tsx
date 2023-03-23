import { tx } from '@helpwave/common/twind/index'
import type { PropsWithChildren } from 'react'

export type CardProps = {
  isSelected?: boolean,
  onTileClick?: () => void,
  classes?: string
}

export const Card = ({
  children,
  isSelected = false,
  onTileClick = () => undefined,
  classes = '',
}: PropsWithChildren<CardProps>) => {
  return (
    <div onClick={onTileClick}
         className={tx('cursor-pointer rounded-md py-2 px-4 border border-2 hover:border-hw-primary-700 w-full', { 'border-hw-primary-700': isSelected }, classes)}>
      {children}
    </div>
  )
}
