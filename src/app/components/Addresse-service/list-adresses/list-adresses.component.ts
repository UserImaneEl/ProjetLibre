import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Adresse } from '../../../models/adresse.model';
import { AdresseService } from '../../../Services/Adresse-service';

@Component({
  selector: 'app-list-adresses',
  templateUrl: './list-adresses.component.html',
  styleUrl: './list-adresses.component.css'
})
export class ListAdressesComponent  implements OnInit{

  adresses: Adresse[] = [];  
  loading: boolean = true;    
  error: string = '';

  constructor(private adresseService: AdresseService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchAdresses();
  }

  fetchAdresses(): void {
    this.adresseService.listAdresses().subscribe({
      next: (response) => {
        this.adresses = response;
      },
      error: (error) => {
        console.error(
          'Erreur lors de la récuperation des laboratoires:',
          error.message || error
        );
      },
    });
  }

  deleteAdresse(id: number | null): void {
    if (id === null) {
      console.error('ID de l\'adresse est null. Suppression impossible.');
      return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer ce laboratoire ?')) {
      this.adresseService.deleteAdresse(id).subscribe({
        next: () => {
          console.log('Laboratoire supprimé avec succès');
          // Mise à jour locale de la liste sans nouvel appel HTTP
          this.adresses = this.adresses.filter((address) => address.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        },
      });
    }
  }
  
  
}
