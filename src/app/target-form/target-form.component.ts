import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TargetsService } from '../targets.service';

@Component({
  selector: 'app-target-form',
  templateUrl: './target-form.component.html',
  styleUrls: ['./target-form.component.css']
})
export class TargetFormComponent implements OnInit {
  statuses: string[] = [];
  formShowing: boolean = false;

  newTargetForm: FormGroup;

  constructor(private targetsService : TargetsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    // fill the status options from the service
    this.statuses = this.targetsService.statuses;
  }
  
  toggleTargetForm() {
    this.formShowing = !this.formShowing;
    this.blankForm();
  }
  
  blankForm() {
    this.newTargetForm = this.formBuilder.group({
      compName: ['', Validators.required],
      compAddress: '',
      industry: '',
      status: ''
    });
  }

  onAddTarget() {
    if(this.newTargetForm.invalid) {
      return;
    } else {
      this.targetsService.addTarget({
        compName: this.newTargetForm.value.compName,
        compAddress: this.newTargetForm.value.compAddress,
        industry: this.newTargetForm.value.industry,
        status: this.newTargetForm.value.status,
        revenue: '',
        dateFirstContact: '',
        daysSinceFirstContact: null,
        website: '',
        type: '',
        contacts: []
      });
    }
    this.toggleTargetForm();
  }

}
