import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGridComponent } from './history-grid.component';

describe('HistoryGridComponent', () => {
  let component: HistoryGridComponent;
  let fixture: ComponentFixture<HistoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
