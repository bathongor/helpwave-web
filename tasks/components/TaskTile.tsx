import { tw } from '@helpwave/common/twind/index'
import type { CardProps } from './Card'
import { Card } from './Card'
import { ProgressIndicator } from './ProgressIndicator'

type TaskDTO = {
  name: string,
  description: string
}

export type TaskTileProps = CardProps & {
  progress: number,
  task: TaskDTO
}

export const TaskTile = ({
  progress,
  task,
  isSelected = false,
  onTileClick = () => undefined
}: TaskTileProps) => {
  return (
    <Card onTileClick={onTileClick} isSelected={isSelected}>
      <div className={tw('flex flex-row justify-between w-full')}>
        <div className={tw('flex flex-col overflow-hidden')}>
          <span className={tw('font-bold')}>{task.name}</span>
          <span className={tw('overflow-hidden w-full block text-gray-500 text-ellipsis whitespace-nowrap')}>{task.description}</span>
        </div>
        <div className={tw('w-fit mt-1 ml-2')}>
          <ProgressIndicator progress={progress}/>
        </div>
      </div>
    </Card>
  )
}
