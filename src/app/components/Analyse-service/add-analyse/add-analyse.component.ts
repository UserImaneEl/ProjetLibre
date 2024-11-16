import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LaboratoireService } from '../../../Services/Laboratory-service';
import { Laboratoire } from '../../../models/laboratoire.model';
import { AnalyseService } from '../../../Services/analyse.service';

@Component({
  selector: 'app-add-analyse',
  templateUrl: './add-analyse.component.html',
  styleUrls: ['./add-analyse.component.css'],
})
export class AddAnalyseComponent implements OnInit {
  analyseForm!: FormGroup;
  laboratoires: Laboratoire[] = [];
  errorMessage: string | null = null; // Variable pour stocker les messages d'erreur

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
      console.log(analyseData);
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
            this.errorMessage = null; // Réinitialise le message d'erreur
          }
        });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
    }
  }
}
