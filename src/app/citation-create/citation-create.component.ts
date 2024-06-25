import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mockCitation } from '../shared/mockCitation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-citation-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './citation-create.component.html',
  styleUrl: './citation-create.component.css'
})
export class CitationCreateComponent {
citation = {
  phrase:'',
  game:'',
  image:''
};

constructor(private router: Router){}

onSubmit() {
  const newCitation = {
    id: mockCitation.length + 1,
    phrase: this.citation.phrase,
    game: this.citation.game,
    image: this.citation.image,
  };

  mockCitation.push(newCitation);
  this.router.navigate(['/citation-list']);
}

}
