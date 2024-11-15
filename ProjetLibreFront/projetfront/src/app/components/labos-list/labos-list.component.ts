import { Component, OnInit } from '@angular/core';
import { LaboratoireService } from '../../Services/Laboratory-service';
import { Laboratoire } from '../../models/laboratoire.model';

@Component({
  selector: 'app-labos-list',
  templateUrl: './labos-list.component.html',
  styleUrls: ['./labos-list.component.css'],
  standalone: false,
})
export class LabosListComponent implements OnInit {
  labos: Laboratoire[] = [];
  loading: boolean = true;
  error: string = '';
  laboId: number | undefined;

  constructor(private laboService: LaboratoireService) {}

  ngOnInit(): void {
    this.laboService.listLabos().subscribe({
      next: (data) => {
        this.labos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des laboratoires';
        this.loading = false;
      },
    });
  }
}
