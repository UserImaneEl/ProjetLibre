package ProjetLibre.examen_service.Entities;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity

public class Examen  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long fkNumDossier;


    private Long fkIdEpreuve;


    private Long fkIdTestAnalyse;


    private String resultat;

    // Getters et setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFkNumDossier() {
        return fkNumDossier;
    }

    public void setFkNumDossier(Long fkNumDossier) {
        this.fkNumDossier = fkNumDossier;
    }

    public Long getFkIdEpreuve() {
        return fkIdEpreuve;
    }

    public void setFkIdEpreuve(Long fkIdEpreuve) {
        this.fkIdEpreuve = fkIdEpreuve;
    }

    public Long getFkIdTestAnalyse() {
        return fkIdTestAnalyse;
    }

    public void setFkIdTestAnalyse(Long fkIdTestAnalyse) {
        this.fkIdTestAnalyse = fkIdTestAnalyse;
    }

    public String getResultat() {
        return resultat;
    }

    public void setResultat(String resultat) {
        this.resultat = resultat;
    }
}
