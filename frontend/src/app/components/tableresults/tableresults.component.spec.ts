import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableresultsComponent } from './tableresults.component';

describe('TableresultsComponent', () => {
  let component: TableresultsComponent;
  let fixture: ComponentFixture<TableresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
