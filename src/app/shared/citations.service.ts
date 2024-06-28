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
    newCitation.id = this.generateId(); // modif
    mockCitation.push(newCitation);
  }
  private generateId(): number {  // modif
    return mockCitation.length > 0 ? Math.max(...mockCitation.map(c => c.id)) + 1 : 1;
  }

  editCitation(id :any, updatedCitation: citationInterface){
    const index = mockCitation.findIndex(citation => citation.id == id);
    mockCitation[index] = updatedCitation;
  }

}
