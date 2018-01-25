import { Hero } from './../classes/Hero';

const axe = new Hero('axe', [{'nome': 'attr 1', 'valor': '13'}], [{'nome': 'habilidade 1', 'valor': '45'}]);
const sniper = new Hero('Sniper', [{'nome': 'attr 1', 'valor': '13'}], [{'nome': 'habilidade 1', 'valor': '45'}]);
const phantonLancer = new Hero('Phanton Lancer', [{'nome': 'attr 1', 'valor': '13'}], [{'nome': 'habilidade 1', 'valor': '45'}]);
const silencer = new Hero('Silencer', [{'nome': 'attr 1', 'valor': '13'}], [{'nome': 'habilidade 1', 'valor': '45'}]);

export const heroList =  [axe, sniper, phantonLancer, silencer];

