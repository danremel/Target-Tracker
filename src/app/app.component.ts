import { Component, OnInit } from '@angular/core';
import { Target } from './shared/target.model';
import { TargetsService } from './targets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedTarget: Target;

  targets: Target[] = [];

  constructor(private targetsService: TargetsService) {}
  
  ngOnInit() {
    this.targets = this.targetsService.targets;
  }
  
  onTargetAdded(targetData: Target) {
    this.targets.push({
      compName: targetData.compName,
      compAddress: targetData.compAddress,
      industry: targetData.industry,
      revenue: targetData.revenue,
      status: targetData.status,
      dateFirstContact: '',
      daysSinceFirstContact: null,
      website: '',
      type: '',
      contacts: []
    });
  }

  onSelectTarget(index) {
    this.targetsService.getTargetIndex.emit(index);
    this.targetsService.targetSelected.emit(this.targets[index]);
    console.log(this.targets[index]);
  }

  onTargetRemoved(index) {
    this.targets.splice(index, 1);
  }
}
