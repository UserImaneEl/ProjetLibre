import { Component, OnInit } from '@angular/core';
import { analyse } from '../../../models/analyse';
import { AnalyseService } from '../../../Services/analyse.service';
//import { Router } from '@angular/router'; // Pour la navigation lors de la modification

@Component({
  selector: 'app-list-analyse',
  templateUrl: './list-analyse.component.html',
  styleUrls: ['./list-analyse.component.css'],
})
export class ListAnalyseComponent implements OnInit {
  analyses: analyse[] = [

  {
    nom: 'Analyse de sang',
    type: 'Test médical',
    description: 'Test pour vérifier les niveaux de sucre dans le sang.',
    laboratoire: 'Laboratoire d\'analyse médicale et clinique ',
  },
  {
    nom: 'Analyse d\'urine',
    type: 'Test médical',
    description: 'Analyse pour détecter les infections urinaires.',
    laboratoire: 'Laboratoire de recherche en génétique',
  },
  {
    nom: 'Test génétique',
    type: 'Test avancé',
    description: 'Test pour détecter des anomalies génétiques.',
    laboratoire: 'Laboratoire d\'analyse médicale et clinique',
  },
];

  constructor(
    private analyseService: AnalyseService
  ) //private router: Router // Injection du service de routage pour la navigation
  {}

  ngOnInit(): void {
    this.fetchAnalyses();
  }

  fetchAnalyses(): void {
    this.analyseService.getAnalyses().subscribe(
      (data: any) => {
        this.analyses = data;
        console.log('Analyses récupérées:', this.analyses);
      },
      (error) => {
        console.error('Erreur lors de la récupération des analyses:', error);
      }
    );
  }

  // Méthode pour modifier une analyse
  editAnalyse(analyse: analyse): void {
    // Vous pouvez rediriger vers une page de modification, en passant l'id de l'analyse
    // this.router.navigate(['/edit-analyse', analyse.id]); // Modifier selon le chemin de votre route de modification
  }

  // Méthode pour supprimer une analyse
  deleteAnalyse(/*id: number*/): void {
    /* if (confirm('Êtes-vous sûr de vouloir supprimer cette analyse ?')) {
      this.analyseService.deleteAnalyse(id).subscribe(
        () => {
          this.analyses = this.analyses.filter((a) => a.id !== id);
          console.log('Analyse supprimée');
        },
        (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      );
    }
  }*/
  }
}
