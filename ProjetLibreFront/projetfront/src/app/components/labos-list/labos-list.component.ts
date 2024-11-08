import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labos-list',
  templateUrl: './labos-list.component.html',
  styleUrls: ['./labos-list.component.css'],
})
export class LabosListComponent implements OnInit {
  // Liste des laboratoires à afficher
  labos = [
    {
      id: 1,
      name: 'Labo A',
      description: 'Laboratoire spécialisé en biologie moléculaire.',
    },
    {
      id: 2,
      name: 'Labo B',
      description: "Laboratoire d'analyses médicales et cliniques.",
    },
    {
      id: 3,
      name: 'Labo C',
      description: 'Laboratoire de recherche en génétique.',
    },
    {
      id: 4,
      name: 'Labo D',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 5,
      name: 'Labo E',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 6,
      name: 'Labo F',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 7,
      name: 'Labo G',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 8,
      name: 'Labo H',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 9,
      name: 'Labo I',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 10,
      name: 'Labo J',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 11,
      name: 'Labo K',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
    {
      id: 12,
      name: 'Labo L',
      description: 'Laboratoire de microbiologie et de virologie.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
