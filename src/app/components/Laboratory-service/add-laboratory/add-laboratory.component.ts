import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Laboratoire } from '../../../models/laboratoire.model';
import { LaboratoireService } from '../../../Services/Laboratory-service';

@Component({
  selector: 'app-add-laboratory',
  templateUrl: './add-laboratory.component.html',
  styleUrls: ['./add-laboratory.component.css'],
  standalone: false, 
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
  
  // Custom Validator pour vérifier si la date est valide
  dateValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && isNaN(Date.parse(value))) {
      return { 'invalidDate': true };
    }
    return null;
  }
  

  onSubmit(): void {
    if (this.labForm.valid) {
      const laboratoireData = {
        id:null,
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
