import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sroub',
  templateUrl: './sroub.component.html',
  styleUrls: ['./sroub.component.scss']
})
export class SroubComponent implements OnInit {

  @Input()
  jmeno: string;

  @Output()
  clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
