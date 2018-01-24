import { Hero } from './../classes/Hero';

let axe = new Hero;
axe.nome = "axe";
axe.atributos = [{"nome": "attr 1", "valor": "13"}];
axe.habilidades = [{"nome": "habilidade 1", "valor": "45"}];

let sniper = new Hero;
sniper.nome = "Sniper";
sniper.atributos = [{"nome": "attr 1", "valor": "13"}];
sniper.habilidades = [{"nome": "habilidade 1", "valor": "45"}];

let phantonLancer = new Hero;
phantonLancer.nome = "Phanton Lancer";
phantonLancer.atributos = [{"nome": "attr 1", "valor": "13"}];
phantonLancer.habilidades = [{"nome": "habilidade 1", "valor": "45"}];

let silencer = new Hero;
silencer.nome = "Silencer";
silencer.atributos = [{"nome": "attr 1", "valor": "13"}];
silencer.habilidades = [{"nome": "habilidade 1", "valor": "45"}];

export const heroList =  [axe, sniper, phantonLancer, silencer];

