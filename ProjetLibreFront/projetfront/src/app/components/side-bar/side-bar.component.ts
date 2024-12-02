import { Component, OnInit } from '@angular/core';
import {
  faTachometerAlt,
  faDollarSign,
  faChartLine,
  faTools,
  faBell,
  faUsers,
  faCog,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'; // Import faTimes
import { KeycloakService } from 'keycloak-angular';
import { ProfilService } from '../../Services/profil.service';
import { KeycloakProfile } from 'keycloak-js';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(public profilService: ProfilService) {}
  profil: KeycloakProfile | null = null; // Initialize profil as null

  isOpen = true; // To toggle sidebar visibility
  logo = 'path/to/logo.png'; // Replace with actual logo path
  faTimes = faTimes; // Set faTimes icon for close button
  userInfo = { nom: '', prenom: '' }; // Replace with actual user info

  // Define the sidebar menu items
  menuItems = [{ icon: faTachometerAlt, text: 'Analyses', route: 'analyses' }]; // Ajoutez une propriété `route` ici
  ngOnInit(): void {
    this.profilService.getProfil().subscribe((profile) => {
      this.profil = profile;
      console.log('hana');
      console.log(this.profil);
      if (this.profil) {
        this.userInfo.nom = this.profil.lastName || '';
        this.userInfo.prenom = this.profil.firstName || '';
        console.log(this.userInfo);
      }
    });
  }
  // Toggle sidebar visibility
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  openSidebar(): void {
    // Implement additional logic if needed
  }
}
