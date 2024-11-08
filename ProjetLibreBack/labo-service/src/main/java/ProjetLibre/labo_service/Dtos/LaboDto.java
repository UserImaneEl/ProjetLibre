package ProjetLibre.labo_service.Dtos;

import org.springframework.stereotype.Component;

@Component


public class LaboDto {
    private String nom; // Nom officiel du laboratoire

    private String logo; // Logo du laboratoire

    private String nrc; // Numéro de Registre de Commerce du laboratoire


    private boolean active; // Statut d'activité du laboratoire (actif ou inactif)


    private String dateActivation;

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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getDateActivation() {
        return dateActivation;
    }

    public void setDateActivation(String dateActivation) {
        this.dateActivation = dateActivation;
    }
}
