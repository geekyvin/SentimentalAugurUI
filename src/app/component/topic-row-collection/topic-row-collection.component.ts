import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic';

@Component({
  selector: 'topic-row-collection',
  templateUrl: './topic-row-collection.component.html',
  styleUrls: ['./topic-row-collection.component.css']
})
export class TopicRowCollectionComponent implements OnInit {

  public topics: Array<Topic> = new Array<Topic>();

  constructor() {

    const topic1: Topic = new Topic();

    topic1.title = 'Title1';

    const topic2: Topic = new Topic();

    topic2.title = 'Title2';

    this.topics.push(topic1);
    this.topics.push(topic2);
  }

  ngOnInit() {


  }

}
