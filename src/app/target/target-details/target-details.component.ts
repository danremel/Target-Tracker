import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Target } from '../../shared/target.model';
import { Contact } from '../contact.model';

import { TargetsService } from '../../targets.service';
import { ContactsService } from '../../contacts.service';
import { contactFormModel } from 'src/app/shared/forms/contact.form.model';
import { targetFormModel } from 'src/app/shared/forms/target.form.model';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.css']
})
export class TargetDetailsComponent implements OnInit {
  @Input() target: Target;
  
  id: number;
  editing = false;
  addingContact = false;

  editTargetForm: FormGroup;
  newContactForm: FormGroup;

  contacts: Contact[] = [];
  statuses: string[] = [];

  editCompName: string;
  editCompAddress: string;
  editDateFirstContact: string;
  editDaysSinceFirstContact: number;
  editIndustry: string;
  editWebsite: string;
  editType: string;
  editRevenue: string;
  editStatus: string;

  constructor(private targetsService: TargetsService,
              private contactsService: ContactsService,
              private formBuilder: FormBuilder) {
    this.targetsService.getTargetIndex.subscribe(
      (id: number) => this.id = id
    )
    this.targetsService.targetSelected.subscribe(
      (target: Target) => {
        this.target = target
        this.contacts = this.contactsService.contacts;
      }
    );
    this.targetsService.targetUpdated.subscribe(
      (updatedTarget: Target) => this.target = updatedTarget
    );
    this.contactsService.addedContact.subscribe(
      (contacts: Contact[]) => this.contacts = contacts
    )
  }
    
  ngOnInit() {
    if(this.target !== undefined){
      this.target.contacts = this.contacts;
    }
  }
   
  /* -- Target -- */
  onEditTarget() {
    this.editTargetForm = this.formBuilder.group(targetFormModel);
    this.editTargetForm.setValue({
      compName: this.target.compName,
      compAddress: this.target.compAddress,
      industry: this.target.industry,
      status: this.target.status,
      revenue: this.target.revenue,
      dateFirstContact: this.target.dateFirstContact,
      daysSinceFirstContact: this.target.daysSinceFirstContact,
      website: this.target.website,
      type: this.target.type,
      contacts: this.target.contacts
    })
    this.statuses = this.targetsService.statuses;
    this.editing = true;
  };

  onSaveTarget() {
    this.targetsService.updateTarget(this.id, 
    {
        compName: this.editTargetForm.value.compName,
        compAddress: this.editTargetForm.value.compAddress,
        dateFirstContact: this.editTargetForm.value.dateFirstContact,
        daysSinceFirstContact: this.editTargetForm.value.daysSinceFirstContact,
        industry: this.editTargetForm.value.industry,
        website: this.editTargetForm.value.website,
        type: this.editTargetForm.value.type,
        revenue: this.editTargetForm.value.revenue,
        status: this.editTargetForm.value.status,
        contacts: this.target.contacts
      }
    );
    this.targetsService.targetUpdated.emit(this.target)
    this.editing = false;
  };

  /* -- End Target -- */

  /* -- Contacts -- */
  onSelectContact(index) {
    this.contactsService.getContactIndex.emit(index);
  };

  onToggleContactForm() {
    this.addingContact = !this.addingContact;
    this.newContactForm = this.formBuilder.group(contactFormModel);
  };

  onAddContact(){
    this.contactsService.addTargetContact({
      name: this.newContactForm.value.name,
      phoneNumber: this.newContactForm.value.phoneNumber,
      emailAddress: this.newContactForm.value.emailAddress,
      role: this.newContactForm.value.role
    })
    this.addingContact = false;
  }

  /* -- End Contacts -- */

  onCancelEdit() {
    this.editing = false;
  }

}
