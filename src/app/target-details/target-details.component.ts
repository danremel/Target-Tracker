import { Component, OnInit, Input } from '@angular/core';
import { Target } from '../shared/target.model';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.css']
})
export class TargetDetailsComponent implements OnInit {
  @Input() target: Target;

  constructor() { }

  ngOnInit() {
  }

}
