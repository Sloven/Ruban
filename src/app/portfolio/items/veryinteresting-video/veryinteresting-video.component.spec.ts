import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryinterestingVideoComponent } from './veryinteresting-video.component';

describe('VeryinterestingVideoComponent', () => {
  let component: VeryinterestingVideoComponent;
  let fixture: ComponentFixture<VeryinterestingVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryinterestingVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryinterestingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
