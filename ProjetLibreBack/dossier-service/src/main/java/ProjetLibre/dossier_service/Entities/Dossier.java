package ProjetLibre.dossier_service.Entities;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Dossier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numDossier;

    @Column(nullable = false)
    private String fkEmailUtilisateur;

    @Column(nullable = false)
    private Long fkIdPatient;

    private LocalDate date;

    // Getters et Setters

    public Long getNumDossier() {
        return numDossier;
    }

    public void setNumDossier(Long numDossier) {
        this.numDossier = numDossier;
    }

    public String getFkEmailUtilisateur() {
        return fkEmailUtilisateur;
    }

    public void setFkEmailUtilisateur(String fkEmailUtilisateur) {
        this.fkEmailUtilisateur = fkEmailUtilisateur;
    }

    public Long getFkIdPatient() {
        return fkIdPatient;
    }

    public void setFkIdPatient(Long fkIdPatient) {
        this.fkIdPatient = fkIdPatient;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
