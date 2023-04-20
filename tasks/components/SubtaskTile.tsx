import type { PropsWithLanguage } from '@helpwave/common/hooks/useTranslation'
import { useTranslation } from '@helpwave/common/hooks/useTranslation'
import { tw } from '@helpwave/common/twind/index'
import type { SubTaskDTO } from '../mutations/room_mutations'
import { TriStateCheckbox } from './user_input/TriStateCheckbox'
import { Trash } from 'lucide-react'
import { ToggleableInput } from './user_input/ToggleableInput'

type SubtaskTileTranslation = {
  subtasks: string,
  remove: string,
  addSubtask: string,
  newSubtask: string
}

const defaultSubtaskTileTranslation = {
  en: {
    remove: 'Remove'
  },
  de: {
    remove: 'Entfernen'
  }
}

type SubtaskTileProps = {
  subtask: SubTaskDTO,
  onRemoveClick: () => void,
  onChange: (subtask: SubTaskDTO) => void
}

export const SubtaskTile = ({
  language,
  subtask,
  onRemoveClick,
  onChange
}: PropsWithLanguage<SubtaskTileTranslation, SubtaskTileProps>) => {
  const translation = useTranslation(language, defaultSubtaskTileTranslation)

  return (
    <div className={tw('flex flex-row gap-x-2 items-center')}>
      <div>
        <TriStateCheckbox
          onChanged={value => onChange({ ...subtask, isDone: value ?? false })}
          checked={subtask.isDone}
        />
      </div>
      <ToggleableInput
        value={subtask.name}
        className={tw('')}
        onChange={text => onChange({ ...subtask, name: text })}
        id={subtask.name}
      />
      <button
        className={tw('text-hw-negative-400 hover:text-hw-negative-500 ml-4')}
        onClick={onRemoveClick}
        aria-label={translation.remove}
      >
        <Trash/>
      </button>
    </div>
  )
}