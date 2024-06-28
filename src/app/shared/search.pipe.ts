import { Pipe, PipeTransform } from '@angular/core';
import { citationInterface } from './entities';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(citations: citationInterface[], terms: string): citationInterface[] {
    return citations.filter(citation => citation.game.toLowerCase().includes(terms.toLowerCase()));
  }

}
