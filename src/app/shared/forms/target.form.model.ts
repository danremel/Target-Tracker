import { Validators } from '@angular/forms';

export const targetFormModel = {
    compName: ['', Validators.required],
    compAddress: '',
    industry: '',
    status: '',
    revenue: '',
    dateFirstContact: '',
    daysSinceFirstContact: null,
    website: '',
    type: '',
    contacts: []
}