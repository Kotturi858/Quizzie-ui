import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCardComponent } from './q-card.component';

describe('QCardComponent', () => {
  let component: QCardComponent;
  let fixture: ComponentFixture<QCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
