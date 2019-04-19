import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Target } from '../../shared/target.model';
import { Contact } from '../contact.model';

import { TargetsService } from '../../targets.service';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.css']
})
export class TargetDetailsComponent implements OnInit {
  @Input() target: Target;

  @ViewChild('contactName') contactName: ElementRef;
  @ViewChild('contactPhone') contactPhone: ElementRef;
  @ViewChild('contactEmail') contactEmail: ElementRef;
  @ViewChild('contactRole') contactRole: ElementRef;
  
  id: number;
  editing = false;
  addingContact = false;

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
              private contactsService: ContactsService) {
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
    this.editCompName = this.target.compName;
    this.editCompAddress = this.target.compAddress;
    this.editDateFirstContact = this.target.dateFirstContact;
    this.editDaysSinceFirstContact = this.target.daysSinceFirstContact;
    this.editIndustry = this.target.industry;
    this.editWebsite = this.target.website;
    this.editType = this.target.type;
    this.editRevenue = this.target.revenue;
    this.editStatus = this.target.status;
    this.statuses = this.targetsService.statuses;
    this.editing = true;
  };

  onSaveTarget() {
    this.targetsService.updateTarget(this.id, 
    {
        compName: this.editCompName,
        compAddress: this.editCompAddress,
        dateFirstContact: this.editDateFirstContact,
        daysSinceFirstContact: this.editDaysSinceFirstContact,
        industry: this.editIndustry,
        website: this.editWebsite,
        type: this.editType,
        revenue: this.editRevenue,
        status: this.editStatus,
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
  };

  onAddContact(){
    this.contactsService.addTargetContact({
      name: this.contactName.nativeElement.value,
      phoneNumber: this.contactPhone.nativeElement.value,
      emailAddress: this.contactEmail.nativeElement.value,
      role: this.contactRole.nativeElement.value
    })
    this.addingContact = false;
  }

  /* -- End Contacts -- */

  onCancelEdit() {
    this.editing = false;
  }

}
