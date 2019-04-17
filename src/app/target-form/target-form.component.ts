import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TargetsService } from '../targets.service';

@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrls: ['./target-form.component.css']
})
export class TargetFormComponent implements OnInit {

  @ViewChild('compNameInput') compNameInput: ElementRef;
  @ViewChild('compAddressInput') compAddressInput: ElementRef; 
  @ViewChild('industryInput') industryInput: ElementRef; 
  @ViewChild('revenueInput') revenueInput: ElementRef; 
  @ViewChild('statusInput') statusInput: ElementRef;

  constructor(private targetsService : TargetsService) { }

  ngOnInit() {
  }

  onAddTarget() {
    this.targetsService.addTarget({
      compName: this.compNameInput.nativeElement.value,
      compAddress: this.compAddressInput.nativeElement.value,
      industry: this.industryInput.nativeElement.value,
      revenue: this.revenueInput.nativeElement.value,
      status: this.statusInput.nativeElement.value,
      dateFirstContact: '',
      daysSinceFirstContact: null,
      website: '',
      type: '',
      contacts: []
    });
  }

}
