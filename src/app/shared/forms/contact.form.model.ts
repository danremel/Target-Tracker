import { Validators } from '@angular/forms';

export const contactFormModel = {
    name: ['', Validators.required],
    phoneNumber: '',
    emailAddress: ['', Validators.email],
    role: ''
}