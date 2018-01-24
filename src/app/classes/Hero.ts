import { IHero } from './IHero';

export class Hero implements IHero {
    nome: String;
    atributos: Iterable<object>;
    habilidades: Iterable<Object>;
}