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

  fetchById(id :any) :citationInterface | undefined{
    return mockCitation.find(citation => citation.id == id);
  }

  postCitation(newCitation:citationInterface){
    mockCitation.push(newCitation);
  }

  editCitation(id :any, updatedCitation: citationInterface){
    const index = mockCitation.findIndex(citation => citation.id == id);
    mockCitation[index] = updatedCitation;
  }

}
