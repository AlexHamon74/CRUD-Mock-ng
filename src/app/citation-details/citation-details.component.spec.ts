import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationDetailsComponent } from './citation-details.component';

describe('CitationDetailsComponent', () => {
  let component: CitationDetailsComponent;
  let fixture: ComponentFixture<CitationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
