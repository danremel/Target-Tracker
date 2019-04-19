import { EventEmitter, Injectable } from '@angular/core';

import { Contact } from './target/contact.model';
import { Target } from './shared/target.model';

import { TargetsService } from './targets.service';

@Injectable()

export class ContactsService {
    contacts: Contact[] = [];

    target: Target;

    loadedContacts = new EventEmitter<Contact[]>();
    addedContact = new EventEmitter<Contact[]>();
    getContactIndex = new EventEmitter<number>();


    constructor(private targetsService: TargetsService) {
        this.targetsService.targetSelected.subscribe(
            (target: Target) => {
                this.target = target;
                this.contacts = target.contacts;
            }
        )
    }

    addTargetContact(cData: Contact) {
        this.target.contacts.push({
            name: cData.name,
            phoneNumber: cData.phoneNumber,
            emailAddress: cData.emailAddress,
            role: cData.role
        })
        this.addedContact.emit(this.contacts);
    }

    updateContact(id: number, editData: Contact) {
        const contact = this.target.contacts[id];
        const keys = Object.keys(contact);
        for(const key of keys) {
            contact[key] = editData[key];
        }
    }

    removeContact(index: number) {
        this.contacts.splice(index, 1);
    }
}