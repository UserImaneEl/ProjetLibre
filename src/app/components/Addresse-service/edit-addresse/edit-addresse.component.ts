import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdresseService } from '../../../Services/Adresse-service';

@Component({
  selector: 'app-edit-addresse',
  templateUrl: './edit-addresse.component.html',
  styleUrl: './edit-addresse.component.css'
})
export class EditAddresseComponent {

  adresse: any = { nomVoie: '', numVoie: '', codeP: '', ville:'', commune:'' };
  addresseId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private adresseService: AdresseService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID récupéré:', id);
    
    if (id) {
      this.addresseId = Number(id);  
      if (!isNaN(this.addresseId)) {
        this.getAdresseDetails(this.addresseId);
      } else {
        console.error('ID invalide');
      }
    } else {
      console.error('ID manquant');
    }
  }
  
  
  getAdresseDetails(id: number) {
    if (id) {
      this.adresseService.getAdresseById(id).subscribe(
        data => {
          if (data) {
            this.adresse = data;
          } else {
            console.error('Laboratoire introuvable');
          }
        },
        error => {
          console.error('Erreur lors de la récupération des données du laboratoire', error);
        }
      );
    } else {
      console.error('ID manquant pour récupérer les données');
    }
  }

  onSubmit() {
  console.log('Données envoyées:', this.adresse);
  if (this.addresseId !== undefined) {
    this.adresseService.updateAdresse(this.addresseId, this.adresse).subscribe(
      data => {
        console.log('Laboratoire modifié avec succès');
        this.router.navigate(['/labos']);
      },
      error => {
        console.error('Erreur lors de la mise à jour de l\'adresse', error);
        alert('Erreur lors de la mise à jour : Vérifiez vos données ou réessayez.');
      }
    );
  } else {
    console.error('Impossible de mettre à jour, ID de l\'adresse non défini');
  }
}
}
