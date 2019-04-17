import { Component, OnInit, Input } from '@angular/core';
import { Target } from '../shared/target.model';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() target: Target;

  constructor() { }

  ngOnInit() {
  }

}
