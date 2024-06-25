import { Injectable } from '@angular/core';
import { mockCitation } from './mockCitation';

@Injectable({
  providedIn: 'root'
})
export class CitationsService {

  constructor() { }
  
  fetchAll(){
    return mockCitation;
  };

  

}
