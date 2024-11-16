import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoireService } from '../../../Services/Laboratory-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
imports: [FormsModule, CommonModule] 


@Component({
  selector: 'app-edit-labo',
  templateUrl: './edit-labo.component.html',
  styleUrl: './edit-labo.component.css',
  standalone: false, 
})
export class EditLaboComponent {
  labo: any = { nom: '', logo: '', nrc: '', active: false, dateActivation: new Date() };
  laboId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private laboService: LaboratoireService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID récupéré:', id);
    
    if (id) {
      this.laboId = Number(id);  
      if (!isNaN(this.laboId)) {
        this.getLaboDetails(this.laboId);
      } else {
        console.error('ID invalide');
      }
    } else {
      console.error('ID manquant');
    }
  }
  
  
  getLaboDetails(id: number) {
    if (id) {
      this.laboService.getLaboById(id).subscribe(
        data => {
          if (data) {
            this.labo = data;
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
  console.log('Données envoyées:', this.labo);
  if (this.laboId !== undefined) {
    this.laboService.updateLabo(this.laboId, this.labo).subscribe(
      data => {
        console.log('Laboratoire modifié avec succès');
        this.router.navigate(['/labos']);
      },
      error => {
        console.error('Erreur lors de la mise à jour du laboratoire', error);
        alert('Erreur lors de la mise à jour : Vérifiez vos données ou réessayez.');
      }
    );
  } else {
    console.error('Impossible de mettre à jour, ID du labo non défini');
  }
}

  
}
