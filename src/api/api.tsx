import { MailType } from '../types/types'

export const api = {
    sendMail: async (mailerState: MailType) => {
        const response: any = await fetch('http://localhost:3001/send', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ mailerState }),
        })
        console.log(
            '🚀 ~ file: api.tsx ~ line 12 ~ sendMail: ~ response',
            response
        )
        return response
    },
}
