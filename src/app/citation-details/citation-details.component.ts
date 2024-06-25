import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockCitation } from '../shared/mockCitation';

@Component({
  selector: 'app-citation-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './citation-details.component.html',
  styleUrl: './citation-details.component.css'
})
export class CitationDetailsComponent implements OnInit{

  citation: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCitationById(id);
  }

  getCitationById(id :number): void{
    this.citation = mockCitation.find(citation => citation.id === id)
  }

}
