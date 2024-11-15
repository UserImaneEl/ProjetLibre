package ProjetLibre.gateway_service.Models;



import java.beans.Transient;
import java.io.Serializable;



public class Utilisateur implements Serializable {


    private String email;


    private Long fkIdLaboratoire;


    private String nomComplet;


    private String profession;


    private String numTel;


    private String signature;


    private String role;

    private Compte compte;

    // Getters et setters

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getFkIdLaboratoire() {
        return fkIdLaboratoire;
    }

    public void setFkIdLaboratoire(Long fkIdLaboratoire) {
        this.fkIdLaboratoire = fkIdLaboratoire;
    }

    public String getNomComplet() {
        return nomComplet;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getNumTel() {
        return numTel;
    }

    public void setNumTel(String numTel) {
        this.numTel = numTel;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
