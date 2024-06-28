import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CitationsService } from '../shared/citations.service';

@Component({
  selector: 'app-citation-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './citation-create.component.html',
  styleUrl: './citation-create.component.css'
})
export class CitationCreateComponent {

  public form:FormGroup = new FormGroup ({
    phrase: new FormControl(''),
    game: new FormControl(''),
    image: new FormControl('')
  });

  service = inject(CitationsService);

  constructor(private router: Router){}

  onSubmit() {
    this.service.postCitation(this.form.value);
    this.form.reset();
    this.router.navigate(['/citation-list']);
  };


}
