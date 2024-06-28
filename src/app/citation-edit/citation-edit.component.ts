import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CitationsService } from '../shared/citations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { citationInterface } from '../shared/entities';

@Component({
  selector: 'app-citation-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './citation-edit.component.html',
  styleUrl: './citation-edit.component.css'
})
export class CitationEditComponent implements OnInit {
  form!: FormGroup;
  citationId: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  service = inject(CitationsService);

  ngOnInit() {
    this.citationId = this.route.snapshot.paramMap.get('id');
    const citation = this.service.fetchById(this.citationId);

    this.form = this.fb.group({
      phrase: [citation?.phrase],
      game: [citation?.game],
      image: [citation?.image],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const updatedCitation: citationInterface = {
        id: this.citationId,
        phrase: this.form.value.phrase,
        game: this.form.value.game,
        image: this.form.value.image,
      };
      this.service.editCitation(this.citationId, updatedCitation);
      this.router.navigate(['/citation-admin']);
    }
  }
}
