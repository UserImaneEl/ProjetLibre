import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddAddressComponent } from './add-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdresseService } from '../../../Services/Adresse-service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// Mock du service AdresseService
const mockAdresseService = {
  createAdresse: jest.fn(),
};

// Mock du service Router
const mockRouter = {
  navigate: jest.fn(),
};

describe('AddAddressComponent', () => {
  let component: AddAddressComponent;
  let fixture: ComponentFixture<AddAddressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddAddressComponent],
      imports: [ReactiveFormsModule, HttpClientModule], // Ajout de HttpClientModule pour les appels HTTP
      providers: [
        { provide: AdresseService, useValue: mockAdresseService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait initialiser le formulaire avec des champs vides', () => {
    const formValue = component.labForm.value;
    expect(formValue.nomVoie).toBe('');
    expect(formValue.numVoie).toBe('');
    expect(formValue.codePostal).toBe('');
    expect(formValue.ville).toBe('');
    expect(formValue.commune).toBe('');
  });

  it('devrait afficher un message de succès après la création d\'une adresse', () => {
    const mockResponse = { id: 1, nomVoie: 'Rue Test', numVoie: '123', codePostal: '75000', ville: 'Paris', commune: 'Paris' };
    mockAdresseService.createAdresse.mockReturnValue(of(mockResponse));

    component.labForm.setValue({
      nomVoie: 'Rue Test',
      numVoie: '123',
      codePostal: '75000',
      ville: 'Paris',
      commune: 'Paris',
    });

    component.onSubmit();

    expect(mockAdresseService.createAdresse).toHaveBeenCalledWith({
      id: null,
      nomVoie: 'Rue Test',
      numVoie: '123',
      codePostal: '75000',
      ville: 'Paris',
      commune: 'Paris',
    });
    expect(component.isSuccess).toBeTruthy();
    expect(component.message).toBe('Adresse créée avec succès !');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/list-adress']);
  });

  it('devrait afficher un message d\'erreur en cas d\'échec lors de la création d\'une adresse', () => {
    const mockError = { error: { message: 'Erreur de serveur' } };
    mockAdresseService.createAdresse.mockReturnValue(throwError(() => mockError));

    component.labForm.setValue({
      nomVoie: 'Rue Test',
      numVoie: '123',
      codePostal: '75000',
      ville: 'Paris',
      commune: 'Paris',
    });

    component.onSubmit();

    expect(component.isSuccess).toBeFalsy();
    expect(component.message).toBe('Erreur lors de la création de l\'adresse : Erreur de serveur');
  });

  it('devrait désactiver le bouton de soumission si le formulaire est invalide', () => {
    component.labForm.setValue({
      nomVoie: '',
      numVoie: '',
      codePostal: '',
      ville: '',
      commune: '',
    });

    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();
  });
});
