import { Component } from '@angular/core';
import { Target } from './shared/target.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  targets: Target[] = [{
    compName: 'Test Co.', 
    compAddress: '123 Easy Street', 
    dateFirstContact: '2019-04-15', 
    daysSinceFirstContact: 3, 
    industry: 'Testing', 
    website: 'example.com', 
    type: 'Company - Private',
    revenue: '$500K per year',
    status: 'Approved',
    contacts: []
  }]
  
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

  onTargetRemoved(index) {
    this.targets.splice(index, 1);
  }
}
