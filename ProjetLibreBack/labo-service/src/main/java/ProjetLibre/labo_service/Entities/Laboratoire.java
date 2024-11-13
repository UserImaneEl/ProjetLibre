package ProjetLibre.labo_service.Entities;

import jakarta.persistence.*;
import lombok.Builder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Entity
@Component
//@Builder
public class Laboratoire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id; // Identifiant unique du laboratoire

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    private String nom; // Nom officiel du laboratoire

    private String logo; // Logo du laboratoire

    private String nrc; // Numéro de Registre de Commerce du laboratoire


    private boolean active; // Statut d'activité du laboratoire (actif ou inactif)


    private LocalDate dateActivation; // Date d’activation officielle du laboratoire

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getNrc() {
        return nrc;
    }

    public void setNrc(String nrc) {
        this.nrc = nrc;
    }

    public boolean getIsActive() {
        return active;
    }

    public void setIsActive(boolean active) {
        this.active = active;
    }

    public LocalDate getDateActivation() {
        return dateActivation;
    }

    public void setDateActivation(LocalDate dateActivation) {
        this.dateActivation = dateActivation;
    }

}
