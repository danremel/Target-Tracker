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

    constructor(private targetsService: TargetsService) {
        this.targetsService.targetSelected.subscribe(
            (target: Target) => {
                this.target = target;
                this.contacts = target.contacts;
                console.log(this.target.contacts);
            }
        )
    }

    // getTargetContacts() {
    //     this.target.contacts = this.contacts;
    // }

    addTargetContact(cData: Contact) {
        this.target.contacts.push({
            name: cData.name,
            phoneNumber: cData.phoneNumber,
            emailAddress: cData.emailAddress,
            role: cData.role
        })
        // this.getTargetContacts();
        this.addedContact.emit(this.contacts);
        console.log(this.contacts);
    }
}