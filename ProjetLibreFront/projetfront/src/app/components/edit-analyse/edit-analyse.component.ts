import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LaboratoireService } from '../../Services/Laboratory-service';
import { AnalyseService } from '../../Services/analyse.service';
import { catchError, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laboratoire } from '../../models/laboratoire.model';
import { analyse } from '../../models/analyse';

@Component({
  selector: 'app-edit-analyse',
  templateUrl: './edit-analyse.component.html',
  styleUrls: ['./edit-analyse.component.css'], // Corrected styleUrl to styleUrls
})
export class EditAnalyseComponent implements OnInit {
  @Input() analysis!: analyse; // Recevoir l'ID de l'analyse
  @Output() close = new EventEmitter<void>(); // Close event to handle modal close
  @Output() refresh = new EventEmitter<void>(); // Event to refresh the list of analyses
  analysisToEdit: any;
  editForm!: FormGroup; // FormGroup for editing the analysis
  laboratoires: Laboratoire[] = [];
  errorMessage!: string;

  constructor(
    private analyseService: AnalyseService,
    private fb: FormBuilder,
    private laboratoireService: LaboratoireService
  ) {}

  ngOnInit(): void {
    console.log(this.analysis); // Ajoutez un console.log pour vérifier la valeur
    if (this.analysis !== null) {
      // Vérifiez si les données sont bien assignées

      // Initialiser le formulaire après la récupération des données
      this.editForm = this.fb.group({
        nom: [this.analysis.nom, Validators.required],
        type: [this.analysis.type, Validators.required],
        description: [this.analysis.description, Validators.required],
        laboratoire: [this.analysis.laboratoire, Validators.required],
      });
    }

    // Charger la liste des laboratoires
    this.laboratoireService.listLabos().subscribe(
      (data: Laboratoire[]) => {
        this.laboratoires = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des laboratoires.';
      }
    );
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      // Logique pour mettre à jour l'analyse
      const updatedAnalysis = {
        ...this.analysis,
        ...this.editForm.value,
      };
      this.analyseService.updateAnalyse(updatedAnalysis).subscribe(
        (response) => {
          this.refresh.emit(); // Émettre l'événement pour rafraîchir la liste des analyses
          this.close.emit(); // Fermer la modale
        },
        (error) => {
          console.error("Erreur lors de la mise à jour de l'analyse:", error);
        }
      );
    }
  }

  // Méthode pour fermer la modale
  onClose(): void {
    this.close.emit(); // Émettre l'événement pour fermer la modale
  }
}
