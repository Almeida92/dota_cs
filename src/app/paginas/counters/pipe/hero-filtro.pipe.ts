import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../../../classes/IHero';

@Pipe({
  name: 'heroFiltro'
})
export class HeroFiltroPipe implements PipeTransform {

  transform(heroes: IHero[], input: string): IHero[] {
    return heroes.filter(curso => curso.nome.toLowerCase().includes(input.toLocaleLowerCase()));
  }
}
