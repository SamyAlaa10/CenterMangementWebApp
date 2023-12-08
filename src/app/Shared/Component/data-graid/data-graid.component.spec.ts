import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGraidComponent } from './data-graid.component';

describe('DataGraidComponent', () => {
  let component: DataGraidComponent;
  let fixture: ComponentFixture<DataGraidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGraidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataGraidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
