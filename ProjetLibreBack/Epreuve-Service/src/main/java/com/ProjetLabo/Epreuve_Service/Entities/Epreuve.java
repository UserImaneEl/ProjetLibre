package com.ProjetLabo.Epreuve_Service.Entities;


import com.ProjetLabo.Epreuve_Service.models.AnalyseTable;
import jakarta.persistence.*;

@Entity
public class Epreuve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    private String nom ;
    @Transient
    private AnalyseTable analyse;

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
}
