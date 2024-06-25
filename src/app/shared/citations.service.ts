import { Injectable } from '@angular/core';
import { mockCitation } from './mockCitation';
import { citationInterface } from './entities';

@Injectable({
  providedIn: 'root'
})
export class CitationsService {

  constructor() { }
  
  fetchAll(){
    return mockCitation;
  };

  fetchById(id :number) :citationInterface | undefined{
    return mockCitation.find(citation => citation.id === id);
  }

}
