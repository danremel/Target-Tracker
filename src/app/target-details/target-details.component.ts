import { Component, OnInit, Input } from '@angular/core';
import { Target } from '../shared/target.model';
import { TargetsService } from '../targets.service';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.css']
})
export class TargetDetailsComponent implements OnInit {
  @Input() target: Target;
  
  id: number;
  editing = false;


  editCompName: string;
  editCompAddress: string;
  editDateFirstContact: string;
  editDaysSinceFirstContact: number;
  editIndustry: string;
  editWebsite: string;
  editType: string;
  editRevenue: string;
  editStatus: string;

  constructor(private targetsService: TargetsService) {
    this.targetsService.getTargetIndex.subscribe(
      (id: number) => this.id = id
    )
    this.targetsService.targetSelected.subscribe(
      (target: Target) => this.target = target
    );
    this.targetsService.targetUpdated.subscribe(
      (updatedTarget: Target) => this.target = updatedTarget
    )
  }
    
  ngOnInit() {
  }
    
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
    this.editing = true;
  }

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
        contacts: []
      }
    );
    this.targetsService.targetUpdated.emit(this.target)
    this.editing = false;
  }

  onCancelEdit() {
    this.editing = false;
  }

}
