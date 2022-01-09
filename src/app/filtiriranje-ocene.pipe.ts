import { Pipe, PipeTransform } from '@angular/core';
import {Ocene} from './models/Ocene';

@Pipe({
  name: 'filtiriranjeOcene'
})
export class FiltiriranjeOcenePipe implements PipeTransform {

  transform(sveOcene: Ocene[]) {
    return sveOcene.filter(ocen => ocen.ocena==10);
  }

}
