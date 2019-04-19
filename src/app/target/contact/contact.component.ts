import { Component, OnInit, Input } from '@angular/core';

import { Contact } from '../contact.model';
import { ContactsService } from 'src/app/contacts.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() id: number;

  editing = false;

  editName: string;
  editPhone: string;
  editEmail: string;
  editRole: string;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  onEditContact() {
    this.editName = this.contact.name;
    this.editPhone = this.contact.phoneNumber;
    this.editEmail = this.contact.emailAddress;
    this.editRole = this.contact.role;

    this.editing = true;
  }

  onSaveContact() {
    this.contactsService.updateContact(this.id, 
      {
        name: this.editName,
        phoneNumber: this.editPhone,
        emailAddress: this.editEmail,
        role: this.editRole
      }
    )
    this.editing = false;
  }

  onRemoveContact() {
    this.contactsService.removeContact(this.id);
  }

}
