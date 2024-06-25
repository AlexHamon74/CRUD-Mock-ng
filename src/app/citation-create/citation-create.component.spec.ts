import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationCreateComponent } from './citation-create.component';

describe('CitationCreateComponent', () => {
  let component: CitationCreateComponent;
  let fixture: ComponentFixture<CitationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
