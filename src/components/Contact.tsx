import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { api } from '../api/api'
import { MailType } from '../types/types'
import {
    FormInputContainer,
    StyledInput,
    StyledTextarea,
    ContactForm,
    FormButton,
} from '../styles/Contact.style'

const Contact: React.FC = (): JSX.Element => {
    const [mailerState, setMailerState] = useState<MailType>({
        name: '',
        mail: '',
        phone: '',
        message: '',
    })

    const [disableButton, setDisableButton] = useState(false)
    const [mailStatus, setMailStatus] = useState<
        'neverSended' | 'sended' | 'notSended'
    >('neverSended')

    const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setDisableButton(true)

        const response = await api.sendMail(mailerState)

        if (response.ok) {
            setDisableButton((prev) => (prev = false))
            setMailStatus('sended')
        } else {
            setDisableButton((prev) => (prev = false))
            setMailStatus('notSended')
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setMailerState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section id="contact">
            <Title id="title5" text="CONTACT" />
            <ContactForm onSubmit={sendMail}>
                <FormInputContainer>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </div>
                        <StyledInput
                            name="name"
                            type="text"
                            placeholder="What's your name?"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </FormInputContainer>
                <FormInputContainer>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} color="white" />
                        </div>
                        <StyledInput
                            name="mail"
                            type="email"
                            placeholder="Your email?"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </FormInputContainer>
                <FormInputContainer>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} color="white" />
                        </div>
                        <StyledInput
                            name="phone"
                            type="text"
                            placeholder="Your phone number?"
                            onChange={handleChange}
                        />
                    </div>
                </FormInputContainer>
                <FormInputContainer>
                    <div>
                        <StyledTextarea
                            name="message"
                            placeholder="And How can I help you?"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </FormInputContainer>
                <FormButton type="submit" disableButton={disableButton}>
                    Let's talk
                </FormButton>
            </ContactForm>
        </section>
    )
}

export default Contact
