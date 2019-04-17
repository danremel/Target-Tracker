import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Target } from '../shared/target.model';

@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrls: ['./target-form.component.css']
})
export class TargetFormComponent implements OnInit {
  @Output() targetAdded = new EventEmitter<Target>();

  @ViewChild('compNameInput') compNameInput: ElementRef;
  @ViewChild('compAddressInput') compAddressInput: ElementRef; 
  @ViewChild('industryInput') industryInput: ElementRef; 
  @ViewChild('revenueInput') revenueInput: ElementRef; 
  @ViewChild('statusInput') statusInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddTarget() {
    this.targetAdded.emit({
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
    })
  }
  
}
