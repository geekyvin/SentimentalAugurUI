import {Component, Input, OnInit} from '@angular/core';
import {Topic} from '../../model/topic';

@Component({
  selector: 'topic-row',
  templateUrl: './topic-row.component.html',
  styleUrls: ['./topic-row.component.css']
})
export class TopicRowComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
