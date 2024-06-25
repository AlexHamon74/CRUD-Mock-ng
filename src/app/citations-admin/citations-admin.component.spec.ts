import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsAdminComponent } from './citations-admin.component';

describe('CitationsAdminComponent', () => {
  let component: CitationsAdminComponent;
  let fixture: ComponentFixture<CitationsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
