import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Laboratoire } from '../../models/laboratoire.model';
import { LaboratoireService } from '../../Services/Laboratory-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-laboratory',
  templateUrl: './add-laboratory.component.html',
  styleUrls: ['./add-laboratory.component.css'],
  standalone: false, // Définir le composant comme standalone
})
export class AddLaboratoryComponent implements OnInit {
  labForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private laboratoireService: LaboratoireService
  ) {}

  ngOnInit(): void {
    this.labForm = this.fb.group({
      name: ['', Validators.required],
      logo: ['', Validators.required],
      nrc: ['', Validators.required],
      active: [true],
      dateActivation: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.labForm.valid) {
      const laboratoireData = {
        nom: this.labForm.value.name,
        logo: this.labForm.value.logo,
        nrc: this.labForm.value.nrc,
        active: this.labForm.value.active === true,
        dateActivation: this.labForm.value.dateActivation,
      };

      this.laboratoireService?.createLaboratoire(laboratoireData).subscribe({
        next: (response) => {
          console.log('Laboratoire créé avec succès', response);
        },
        error: (error) => {
          console.error(
            'Erreur lors de la création du laboratoire:',
            error.message || error
          );
          if (error.error && error.error.message) {
            console.error("Détails de l'erreur:", error.error.message);
          }
        },
      });
    }
  }
}
