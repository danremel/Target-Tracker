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

  constructor(private targetsService: TargetsService) {
    this.targetsService.targetSelected.subscribe(
      (target: Target) => this.target = target
    );
  }

  ngOnInit() {
  }

}
