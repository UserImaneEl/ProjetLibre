import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  private profileSubject: BehaviorSubject<KeycloakProfile | null> =
    new BehaviorSubject<KeycloakProfile | null>(null);

  constructor(public keycloakService: KeycloakService) {}

  public getProfil(): Observable<KeycloakProfile | null> {
    // Si l'utilisateur est connecté, on charge le profil
    if (this.keycloakService.isLoggedIn()) {
      this.keycloakService.loadUserProfile().then((profile) => {
        this.profileSubject.next(profile); // On émet le profil chargé
      });
    }
    return this.profileSubject.asObservable(); // Retourne l'Observable du profil
  }
}
