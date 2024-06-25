import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { citationInterface } from '../shared/entities';
import { CitationsService } from '../shared/citations.service';

@Component({
  selector: 'app-citation-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './citation-list.component.html',
  styleUrl: './citation-list.component.css'
})
export class CitationListComponent implements OnInit {
  
  citations:citationInterface[] = [];
  service = inject(CitationsService);


  ngOnInit(): void {
    this.getCitation();
  }

  getCitation(){
    this.citations = this.service.fetchAll();
  }

}
