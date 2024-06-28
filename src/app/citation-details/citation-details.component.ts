import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CitationsService } from '../shared/citations.service';
import { citationInterface } from '../shared/entities';

@Component({
  selector: 'app-citation-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './citation-details.component.html',
  styleUrl: './citation-details.component.css'
})
export class CitationDetailsComponent implements OnInit{

  citation: citationInterface | undefined;
  service = inject(CitationsService);

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getCitationById();
  }
  
  getCitationById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.citation = this.service.fetchById(id);
  }

}
