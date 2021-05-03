import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCharactersLayoutComponent } from './email-characters-layout.component';

describe('EmailCharactersLayoutComponent', () => {
  let component: EmailCharactersLayoutComponent;
  let fixture: ComponentFixture<EmailCharactersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCharactersLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCharactersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
