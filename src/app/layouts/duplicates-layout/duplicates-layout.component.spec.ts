import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatesLayoutComponent } from './duplicates-layout.component';

describe('DuplicatesLayoutComponent', () => {
  let component: DuplicatesLayoutComponent;
  let fixture: ComponentFixture<DuplicatesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicatesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
