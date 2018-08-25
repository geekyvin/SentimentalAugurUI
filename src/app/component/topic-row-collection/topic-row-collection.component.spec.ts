import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRowCollectionComponent } from './topic-row-collection.component';

describe('TopicRowCollectionComponent', () => {
  let component: TopicRowCollectionComponent;
  let fixture: ComponentFixture<TopicRowCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicRowCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRowCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
