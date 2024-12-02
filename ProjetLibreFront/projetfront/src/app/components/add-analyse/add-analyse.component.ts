import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laboratoire } from '../../models/laboratoire.model';
import { LaboratoireService } from '../../Services/Laboratory-service';
import { AnalyseService } from '../../Services/analyse.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-analyse',
  templateUrl: './add-analyse.component.html',
  styleUrls: ['./add-analyse.component.css'],
})
export class AddAnalyseComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() refresh = new EventEmitter<void>();
  analyseForm!: FormGroup;
  laboratoires: Laboratoire[] = [];
  errorMessage: string | null = null; // Variable pour stocker les messages d'erreur
  isModalOpen = false;
  successMessage!: string;
  constructor(
    private fb: FormBuilder,
    private laboratoireService: LaboratoireService,
    private analyseService: AnalyseService
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.analyseForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      laboratoire: ['', Validators.required],
    });

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
    if (this.analyseForm.valid) {
      const analyseData = this.analyseForm.value;
      this.successMessage = 'Analyse créée avec succès';
      this.close.emit();
      this.refresh.emit();
      this.analyseService
        .createAnalyse(analyseData)
        .pipe(
          catchError((error) => {
            this.errorMessage = "Erreur lors de la création de l'analyse.";
            console.error(error);
            return of(null); // Retourne une observable vide pour stopper le flux
          })
        )
        .subscribe((response) => {
          if (response) {
            console.log('Analyse créée avec succès:', response);
            this.errorMessage = ''; // Réinitialise le message d'erreur
            this.successMessage = 'Analyse créée avec succès !'; // Ajoute un message de succès

            // Fermer la modale après un court délai pour afficher le message de succès
            setTimeout(() => {
              this.successMessage = ''; // Efface le message de succès
              this.onClose(); // Appelle la méthode de fermeture de la modale
            }, 2000); // Délai de 2 secondes
          }
        });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
    }
  }

  // Méthode pour fermer la modale
  onClose(): void {
    this.close.emit(); // Émet un événement pour le parent
  }
}
