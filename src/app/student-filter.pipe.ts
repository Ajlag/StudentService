import {Pipe, PipeTransform} from '@angular/core';
import {Student} from './models/Student';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {
  transform(studenti: Student[], searchTerm: string): Student[] {
    if (!studenti || !searchTerm) {
      return studenti;
    }

    return studenti.filter(function(studenti){
      return  studenti.ime.toLowerCase().includes(searchTerm.toLowerCase()) || studenti.prezime.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
