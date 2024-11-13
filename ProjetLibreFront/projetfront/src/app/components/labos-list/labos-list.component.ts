import { Component, OnInit } from '@angular/core';
import { Laboratoire } from '../../models/laboratoire.model';
import { LaboratoireService } from '../../Services/Laboratory-service';

@Component({
  selector: 'app-labos-list',
  templateUrl: './labos-list.component.html',
  styleUrls: ['./labos-list.component.css'],
})
export class LabosListComponent implements OnInit {
  labos: Laboratoire[] = [];

  constructor(private laboratoireService: LaboratoireService) {}

  ngOnInit(): void {
    this.fetchLaboratoires();
  }

  fetchLaboratoires(): void {
    this.laboratoireService.listLabos().subscribe({
      next: (response) => {
        this.labos = response;
      },
      error: (error) => {
        console.error(
          'Erreur lors de la récuperation des laboratoires:',
          error.message || error
        );
      },
    });
  }
}
