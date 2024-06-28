import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CitationsService } from '../shared/citations.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-citation-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './citation-create.component.html',
  styleUrl: './citation-create.component.css'
})
export class CitationCreateComponent {

  public form:FormGroup = new FormGroup ({
    phrase: new FormControl('', [Validators.required]),
    game: new FormControl('', {validators: [Validators.required]}),
    image: new FormControl('', {validators:[Validators.required, Validators.minLength(4)]}),
  });

  service = inject(CitationsService);

  public isSubmitted = false;

  constructor(private router: Router){}

  onSubmit() {
    this.isSubmitted = true;
    if(this.form.valid){
      const newCitation = this.form.value;
      this.service.postCitation(newCitation);
      this.router.navigate(['/citation-list']);
      // this.form.reset();
    }
  };
  
    // Méthode pour vérifier si le champ image a une erreur spécifique
    public hasError(controlName: string, errorName: string) {
      return this.form.controls[controlName].hasError(errorName);
    }


}
