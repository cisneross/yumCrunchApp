import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevListComponent } from './rev-list.component';

describe('RevListComponent', () => {
  let component: RevListComponent;
  let fixture: ComponentFixture<RevListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
