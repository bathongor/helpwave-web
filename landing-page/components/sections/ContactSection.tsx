import { forwardRef, useState } from 'react'
import type { FormEvent } from 'react'
import toast from 'react-hot-toast'
import { tw } from '@twind/core'
import { TitleSection } from '../Section'
import { Input } from '../Input'
import { Toast } from '../Toast'
import Send from '../../icons/Send'
import AlertCircle from '../../icons/AlertCircle'
import { hubspotSubmitForm } from '../../utils/hubspot'

const ContactSection = forwardRef<HTMLDivElement>(function ContactSection(_, ref) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: this ain't it chief, validate the values more properly
    if (email !== '' && firstName !== '' && lastName !== '' && message !== '') {
      hubspotSubmitForm({
        email,
        firstName,
        lastName,
        message,
      })
        .then((json) => { // TODO: this may still be an errornous response, check the actual response for errors
          setEmail('')
          setFirstName('')
          setLastName('')
          setMessage('')

          toast.custom(<Toast message="Message sent!" theme="dark" variant="primary" icon={<Send width={20} height={24} />} />, { position: 'bottom-left', duration: 1000 })
        })
        .catch((error) => {
          console.error(error)
          toast.custom(<Toast message="Something went wrong" theme="dark" variant="negative" icon={<AlertCircle />} />, { position: 'bottom-left', duration: 5000 })
        })
    }
  }

  return (
    <TitleSection id="contact" ref={ref} title="Contact">
      <form onSubmit={handleSubmit}>
        <span className={tw('block font-medium text-white')}>Your Information</span>

        <div className={tw('flex w-96')}>
          <Input id="contact-us-email" group={['bottom']} label="Email" placeholder="Email" type="email" value={email} onChange={setEmail} />
        </div>
        <div className={tw('flex w-96')}>
          <Input id="contact-us-first-name" group={['top', 'right']} label="First name" placeholder="First name" type="text" value={firstName} onChange={setFirstName} />
          <Input id="contact-us-last-name" group={['top', 'left']} label="Last name" placeholder="Last name" type="text" value={lastName} onChange={setLastName} />
        </div>

        <br />

        <span className={tw('block font-medium text-white')}>Message</span>
        <div className={tw('flex w-96')}>
          <textarea className={tw('mt-1 block w-full h-48 bg-hw-dark-gray-800 placeholder:text-[#8E8E93] border-2 border-hw-primary-700 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500')} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button type="submit" className={tw('mt-2 py-1 px-4 flex border-2 border-hw-primary-700 rounded-md space-x-2')}>
          <span>Send</span>
          <Send width={20} height={24} />
        </button>
      </form>
    </TitleSection>
  )
})

export default ContactSection
