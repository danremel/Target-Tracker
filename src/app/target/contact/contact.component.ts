import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Contact } from '../contact.model';
import { ContactsService } from 'src/app/contacts.service';
import { contactFormModel } from 'src/app/shared/forms/contact.form.model';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() id: number;

  editing = false;

  editContactForm: FormGroup;

  constructor(private contactsService: ContactsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  
  onEditContact() {
    this.editContactForm = this.formBuilder.group(contactFormModel);
    this.editContactForm.setValue({
      name: this.contact.name,
      phoneNumber: this.contact.phoneNumber,
      emailAddress: this.contact.emailAddress,
      role: this.contact.role
    })    
    this.editing = true;
  }

  onSaveContact() {
    if(this.editContactForm.invalid) {
      return;
    } else {
      this.contactsService.updateContact(this.id, 
        {
          name: this.editContactForm.value.name,
          phoneNumber: this.editContactForm.value.phoneNumber,
          emailAddress: this.editContactForm.value.emailAddress,
          role: this.editContactForm.value.role
        }
      )
      this.editing = false;
    }
  }

  onRemoveContact() {
    this.contactsService.removeContact(this.id);
  }

}
