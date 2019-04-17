import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Target } from '../shared/target.model';
import { TargetsService } from '../targets.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() target: Target;
  @Input() id: number;
  
  @Output() targetRemoved = new EventEmitter<Target>();
  
  constructor(private targetsService: TargetsService) { }

  ngOnInit() {
  }

  onRemoveTarget() {
    this.targetRemoved.emit();
  }

}
