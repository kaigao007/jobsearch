import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyPageComponent } from './job-apply-page.component';

describe('JobApplyPageComponent', () => {
  let component: JobApplyPageComponent;
  let fixture: ComponentFixture<JobApplyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
