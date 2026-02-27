import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUs1 } from './contact-us-1';

describe('ContactUs1', () => {
  let component: ContactUs1;
  let fixture: ComponentFixture<ContactUs1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs1],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUs1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
