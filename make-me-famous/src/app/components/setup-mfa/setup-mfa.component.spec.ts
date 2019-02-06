import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMfaComponent } from './setup-mfa.component';

describe('SetupMfaComponent', () => {
  let component: SetupMfaComponent;
  let fixture: ComponentFixture<SetupMfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupMfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
