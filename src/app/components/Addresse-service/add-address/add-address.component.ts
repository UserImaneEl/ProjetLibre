import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdresseService } from '../../../Services/Adresse-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent implements OnInit{

  labForm!: FormGroup;
  isSuccess: boolean = false;
  showMessage: boolean = false;
  message: string = '';


  constructor(
    private fb: FormBuilder,
    private adresseService: AdresseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.labForm = this.fb.group({
      nomVoie: ['', Validators.required],
      numVoie: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      commune: ['', Validators.required],
    });
  }
  

  onSubmit(): void {
    if (this.labForm.valid) {
      const adresseData = {
        id: null,
        nomVoie: this.labForm.value.nomVoie,
        numVoie: this.labForm.value.numVoie,
        codePostal: this.labForm.value.codePostal,
        ville: this.labForm.value.ville,
        commune: this.labForm.value.commune,
      };

      this.adresseService.createAdresse(adresseData).subscribe({
        next: (response) => {
          this.message = 'Adresse créée avec succès !';
          this.isSuccess = true;
          this.showMessage = true;
          console.log('Adresse créée avec succès', response);

          // Masquer le message après 5 secondes
          setTimeout(() => {
            this.showMessage = false;
            this.router.navigate(['/list-adress']);
          }, 5000);
        },
        error: (error) => {
          this.message = `Erreur lors de la création de l'adresse : ${error.error?.message || error.message}`;
          this.isSuccess = false;
          this.showMessage = true;
          console.error('Erreur:', error);

          // Masquer le message après 5 secondes
          setTimeout(() => {
            this.showMessage = false;
          }, 5000);
        },
      });
    }
  }
  
}
