import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Target } from '../shared/target.model';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() target: Target;
  @Output() targetRemoved = new EventEmitter<Target>();

  constructor() { }

  ngOnInit() {
  }

  onRemoveTarget() {
    this.targetRemoved.emit();
  }

}
