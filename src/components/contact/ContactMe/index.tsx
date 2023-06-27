import axios from 'axios'
import {
  ContactForm,
  ContactMeContainer,
  FormItem,
  SendMessageButton,
} from './styles'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

interface DataProps {
  name: string
  email: string
  message: string
}

export function ContactMe() {
  const { register, handleSubmit } = useForm()

  function sendEmail(data: DataProps) {
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
      })
      .catch((error) => {
        console.error('Error sending e-mail:', error)
      })
  }

  const onSubmit: SubmitHandler<DataProps> = (data) => {
    sendEmail(data)
  }

  return (
    <ContactMeContainer>
      <h2>Contact Me</h2>
      <ContactForm
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <FormItem>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Mariana Castro"
            required
            {...register('name')}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            placeholder="email@example.com"
            required
            {...register('email')}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="">Message</label>
          <textarea
            required
            placeholder="How can I help?"
            {...register('message')}
          />
        </FormItem>
        <SendMessageButton type="submit">Send Message</SendMessageButton>
      </ContactForm>
    </ContactMeContainer>
  )
}
