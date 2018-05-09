import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescBgPartComponent } from './desc-bg-part.component';

describe('DescBgPartComponent', () => {
  let component: DescBgPartComponent;
  let fixture: ComponentFixture<DescBgPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescBgPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescBgPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
