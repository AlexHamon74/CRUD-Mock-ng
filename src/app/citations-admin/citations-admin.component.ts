import { Component } from '@angular/core';
import { citationInterface } from '../shared/entities';
import { mockCitation } from '../shared/mockCitation';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-citations-admin',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './citations-admin.component.html',
  styleUrl: './citations-admin.component.css'
})
export class CitationsAdminComponent {

  citations:citationInterface[] = mockCitation;

    delete(citation: any){
    const index = this.citations.indexOf(citation);
    if (index > -1) {
      this.citations.splice(index, 1);
    }
  }
}
