import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TargetsService } from '../targets.service';

@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrls: ['./target-form.component.css']
})
export class TargetFormComponent implements OnInit {
  statuses: string[] = [];
  formShowing = false;

  @ViewChild('compNameInput') compNameInput: ElementRef;
  @ViewChild('compAddressInput') compAddressInput: ElementRef; 
  @ViewChild('industryInput') industryInput: ElementRef; 
  @ViewChild('statusInput') statusInput: ElementRef;

  constructor(private targetsService : TargetsService) { }

  ngOnInit() {
    // fill the status options from the service
    this.statuses = this.targetsService.statuses;

  }

  onAddTarget() {
    this.targetsService.addTarget({
      compName: this.compNameInput.nativeElement.value,
      compAddress: this.compAddressInput.nativeElement.value,
      industry: this.industryInput.nativeElement.value,
      status: this.statusInput.nativeElement.value,
      revenue: '',
      dateFirstContact: '',
      daysSinceFirstContact: null,
      website: '',
      type: '',
      contacts: []
    });
  }

}
