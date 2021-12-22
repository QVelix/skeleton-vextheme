import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseAccountingButtonsComponent } from './choise-accounting-buttons.component';

describe('ChoiseAccountingButtonsComponent', () => {
  let component: ChoiseAccountingButtonsComponent;
  let fixture: ComponentFixture<ChoiseAccountingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiseAccountingButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiseAccountingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
