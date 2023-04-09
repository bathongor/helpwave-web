import { tw } from '@helpwave/common/twind'
import type { Languages } from '@helpwave/common/hooks/useLanguage'
import type { PropsWithLanguage } from '@helpwave/common/hooks/useTranslation'
import { useTranslation } from '@helpwave/common/hooks/useTranslation'
import React, { useState } from 'react'
import { ColumnTitle } from '../ColumnTitle'
import { Button } from '../Button'
import { BedInRoomIndicator } from '../BedInRoomIndicator'
import { Textarea } from '../user_input/Textarea'
import { KanbanBoard } from './KanabanBoard'
import { noop } from '../user_input/Input'

type PatientDetailTranslation = {
  patientDetails: string,
  notes: string,
  dischargePatient: string,
  saveChanges: string,
  dischargeConfirm: string
}

const defaultPatientDetailTranslations: Record<Languages, PatientDetailTranslation> = {
  en: {
    patientDetails: 'Patient Details',
    notes: 'Notes',
    dischargePatient: 'Discharge Patient',
    saveChanges: 'Save Changes',
    dischargeConfirm: 'Do you really want to discharge the patient?'
  },
  de: {
    patientDetails: 'Patienten Details',
    notes: 'Notizen',
    dischargePatient: 'Patienten entlassen',
    saveChanges: 'Speichern',
    dischargeConfirm: 'Willst du den Patienten wirklich entlassen?'
  }
}

type TaskDTO = {
  id: string,
  name: string,
  description: string,
  status: 'unscheduled' | 'inProgress' | 'done',
  progress: number
}

type PatientDTO = {
  id: string,
  note: string,
  humanReadableIdentifier: string,
  tasks: TaskDTO[]
}

export type PatientDetailProps = {
  bedPosition: number,
  bedsInRoom: number,
  patient: PatientDTO,
  onUpdate: (patientDTO: PatientDTO) => void,
  onDischarge?: (patientDTO: PatientDTO) => void
}

export const PatientDetail = ({
  language,
  bedPosition,
  bedsInRoom,
  patient,
  onUpdate,
  onDischarge = noop,
}: PropsWithLanguage<PatientDetailTranslation, PatientDetailProps>) => {
  const translation = useTranslation(language, defaultPatientDetailTranslations)
  const [newPatient, setNewPatient] = useState<PatientDTO>(patient)

  return (
    <div className={tw('flex flex-col py-4 px-6')}>
      <ColumnTitle title={translation.patientDetails}/>
      <div className={tw('flex flex-row justify-between gap-x-8 mb-8')}>
        <div className={tw('flex flex-col gap-y-4')}>
          <span className={tw('text-xl font-semibold')}>{newPatient.humanReadableIdentifier}</span>
          <BedInRoomIndicator bedsInRoom={bedsInRoom} bedPosition={bedPosition}/>
        </div>
        <div className={tw('flex-1')}>
          <Textarea
            headline={translation.notes}
            value={newPatient.note}
            onChange={text => setNewPatient({ ...newPatient, note: text })}
          />
        </div>
      </div>
      <KanbanBoard key={newPatient.id + newPatient.tasks.toString()} tasks={newPatient.tasks} onChange={tasks => setNewPatient({ ...newPatient, tasks })}/>
      <div className={tw('flex flex-row justify-end mt-8')}>
        <div>
          <Button color="positive" onClick={() => {
            if (confirm(translation.dischargeConfirm)) {
              onDischarge(patient)
            }
          }} className={tw('mr-4')}>{translation.dischargePatient}</Button>
          <Button color="accent" onClick={() => onUpdate(patient)}>{translation.saveChanges}</Button>
        </div>
      </div>
    </div>
  )
}
