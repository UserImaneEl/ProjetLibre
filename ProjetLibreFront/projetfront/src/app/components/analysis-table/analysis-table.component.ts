import { Component, OnInit } from '@angular/core';
import { analyse } from '../../models/analyse';
import { AnalyseService } from '../../Services/analyse.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analysis-table',
  templateUrl: './analysis-table.component.html',
  styleUrls: ['./analysis-table.component.css'],
})
export class AnalysisTableComponent implements OnInit {
  deleteAnalyse(analyse: analyse) {
    this.analyseService.deleteAnalyse(analyse).subscribe(
      (data: any) => {
        // Initialisation de filteredAnalyses
        console.log('Analyse supprimee');
        this.analyseService.getAnalyses().subscribe(
          (data: any) => {
            this.analyses = data;
            this.filteredAnalyses = data; // Initialisation de filteredAnalyses
            console.log('Analyses récupérées:', this.analyses);
          },
          (error) => {
            console.error(
              'Erreur lors de la récupération des analyses:',
              error
            );
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la ruppression', error);
      }
    );
  }
  constructor(private analyseService: AnalyseService) {}

  ngOnInit(): void {
    this.fetchAnalyses();
  }

  // Tableau des analyses récupérées
  analyses: analyse[] = [];

  // Tableau filtré des analyses en fonction de la recherche
  filteredAnalyses: analyse[] = [];
  selectedType: string = '';
  dropdownOpen: boolean = false;
  // Texte de recherche
  searchText: string = '';
  searchTerm = new FormControl('');
  filteredOptions!: Observable<any>;

  options = ['Type1', 'Type2', 'Type3', 'Type4'];

  // Variable qui détermine si la liste est visible ou non
  isListVisible = false;

  // Méthode pour afficher/masquer la liste
  toggleList() {
    this.isListVisible = !this.isListVisible;
  }

  // Méthode pour gérer la sélection d'une option
  selectOption(option: string) {
    console.log('Option sélectionnée:', option);
    this.isListVisible = false;
    this.analyseService.getAnalysesByType(option).subscribe(
      (data: any) => {
        this.analyses = data;
        this.filteredAnalyses = data; // Initialisation de filteredAnalyses
        console.log('Analyses récupérées:', this.analyses);
      },
      (error) => {
        console.error('Erreur lors de la récupération des analyses:', error);
      }
    );
  }
  // Méthode pour récupérer les analyses depuis le service
  fetchAnalyses(): void {
    this.analyseService.getAnalyses().subscribe(
      (data: any) => {
        this.analyses = data;
        this.filteredAnalyses = data; // Initialisation de filteredAnalyses
        console.log('Analyses récupérées:', this.analyses);
      },
      (error) => {
        console.error('Erreur lors de la récupération des analyses:', error);
      }
    );
  }
  searchAnalyses(): void {
    const searchValue = this.searchTerm.value;
    if (searchValue) {
      this.analyseService.getAnalysesByNom(searchValue).subscribe(
        (data: analyse[]) => {
          this.analyses = data;
          console.log(this.filteredAnalyses);
        },
        (error) => {
          console.error('Erreur lors de la recherche des analyses:', error);
        }
      );
    } else {
      this.filteredAnalyses = this.analyses; // Affiche toutes les analyses si le champ de recherche est vide
    }
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log('hbet');
  }
  // Méthode de filtrage des analyses
  filterAnalyses() {
    if (this.selectedType) {
      this.filteredAnalyses = this.analyses.filter(
        (analysis) => analysis.type === this.selectedType
      );
    } else {
      this.filteredAnalyses = [...this.analyses]; // Réinitialise si aucun type n'est sélectionné
    }

    // Ferme le menu après sélection
    this.dropdownOpen = false;
  }

  newAnalysis = { name: '', patient: '', date: '', status: 'Pending' };
  isModalOpen = false;
  isModalEditOpen = false;
  selectedAnalysis!: analyse;
  // Méthode pour ouvrir la modal
  openAddAnalysisModal(): void {
    console.log('open');
    this.isModalOpen = true;
  }

  openeditAnalysisModal(analysis: analyse): void {
    this.selectedAnalysis = analysis; // Vérifiez que l'ID est bien assigné
    this.isModalEditOpen = true; // Ouvre la modal
  }

  // Méthode pour fermer la modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  applyFilter() {
    console.log('Filtrer par type:', this.selectedType);
    // Implémentez ici la logique pour appliquer le filtre sur vos analyses
    // Par exemple, vous pouvez filtrer la liste des analyses en fonction du type sélectionné
  }
}
