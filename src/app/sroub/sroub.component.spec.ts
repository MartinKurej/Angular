import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SroubComponent } from './sroub.component';

describe('SroubComponent', () => {
  let component: SroubComponent;
  let fixture: ComponentFixture<SroubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SroubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SroubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
