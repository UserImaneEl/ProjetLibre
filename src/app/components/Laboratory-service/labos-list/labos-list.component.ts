import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Laboratoire } from '../../../models/laboratoire.model';
import { LaboratoireService } from '../../../Services/Laboratory-service';

@Component({
  selector: 'app-labos-list',
  templateUrl: './labos-list.component.html',
  styleUrls: ['./labos-list.component.css'],
  standalone:false
})
export class LabosListComponent implements OnInit {
  
  labos: Laboratoire[] = [];  
  loading: boolean = true;    
  error: string = '';
  laboId: number | undefined;

  constructor(private laboService: LaboratoireService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // S'abonner au BehaviorSubject pour écouter les changements
    this.laboService.labos$.subscribe({
      next: (data) => {
        this.labos = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des laboratoires';
        this.loading = false;
      },
    });

    // Charger les laboratoires dès le démarrage
    this.laboService.listLabos().subscribe();
  }

  deleteLaboratoire(id: number | null): void {
    if (id === null) {
      console.error('ID du laboratoire est null. Suppression impossible.');
      return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer ce laboratoire ?')) {
      this.laboService.deleteLabo(id).subscribe({
        next: () => {
          console.log('Laboratoire supprimé avec succès');
          // Mise à jour locale de la liste sans nouvel appel HTTP
          this.labos = this.labos.filter((labo) => labo.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        },
      });
    }
  }
  
}
