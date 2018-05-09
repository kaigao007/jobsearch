import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescPageComponent } from './job-desc-page.component';

describe('JobDescPageComponent', () => {
  let component: JobDescPageComponent;
  let fixture: ComponentFixture<JobDescPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDescPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
