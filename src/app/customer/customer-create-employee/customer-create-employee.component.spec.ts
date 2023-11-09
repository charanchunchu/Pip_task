import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateEmployeeComponent } from './customer-create-employee.component';

describe('CustomerCreateEmployeeComponent', () => {
  let component: CustomerCreateEmployeeComponent;
  let fixture: ComponentFixture<CustomerCreateEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCreateEmployeeComponent]
    });
    fixture = TestBed.createComponent(CustomerCreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
