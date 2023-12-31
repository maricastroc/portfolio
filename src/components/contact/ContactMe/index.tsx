import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import {
  ContactForm,
  ContactMeContainer,
  FormItem,
  SendMessageButton,
} from './styles'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { SuccessModal } from '../SuccessModal'
import { useState } from 'react'

interface DataProps {
  name: string
  email: string
  message: string
}

export function ContactMe() {
  const { register, handleSubmit, reset, watch } = useForm()
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const watchedFields = watch(['name', 'email', 'message'])
  const isButtonDisabled = Object.values(watchedFields).some((field) => !field)

  function sendEmail(data: DataProps) {
    setIsSubmitting(true)

    const emailData = {
      service_id: 'service_maricastroc',
      template_id: 'template_82cc2cm',
      user_id: '3JeviHZNohrDeY6yh',
      template_params: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    }

    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', emailData)
      .then((response) => {
        console.log('E-mail sent successfully!', response.data)
        setIsDialogOpen(true)
        reset()
      })
      .catch((error) => {
        console.error('Error sending e-mail:', error)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const onSubmit: SubmitHandler<DataProps> = (data) => {
    sendEmail(data)
  }

  return (
    <ContactMeContainer>
      <h2>{t('contact')}</h2>
      <ContactForm
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <FormItem>
          <label htmlFor="">{t('name')}</label>
          <input
            type="text"
            placeholder="Mariana Castro"
            required
            {...register('name')}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="">{t('email')}</label>
          <input
            type="email"
            placeholder="email@example.com"
            required
            {...register('email')}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="">{t('message')}</label>
          <textarea
            required
            placeholder={t('message_placeholder')}
            {...register('message')}
          />
        </FormItem>
        <SendMessageButton
          type="submit"
          className={isButtonDisabled || isSubmitting ? 'disabled' : ''}
          disabled={isButtonDisabled || isSubmitting}
        >
          {t('send_message')}
        </SendMessageButton>
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <SuccessModal />
        </Dialog.Root>
      </ContactForm>
    </ContactMeContainer>
  )
}
