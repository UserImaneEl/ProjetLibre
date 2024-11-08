package ProjetLibre.testAnalyse_service.Entities;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity

public class TestAnalyse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Long fkIdAnalyse;


    private String nomTest;


    private String sousEpreuve;


    private Double intervalMinDeReference;


    private Double intervalMaxDeReference;


    private String uniteDeReference;


    private String details;

    // Getters et setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFkIdAnalyse() {
        return fkIdAnalyse;
    }

    public void setFkIdAnalyse(Long fkIdAnalyse) {
        this.fkIdAnalyse = fkIdAnalyse;
    }

    public String getNomTest() {
        return nomTest;
    }

    public void setNomTest(String nomTest) {
        this.nomTest = nomTest;
    }

    public String getSousEpreuve() {
        return sousEpreuve;
    }

    public void setSousEpreuve(String sousEpreuve) {
        this.sousEpreuve = sousEpreuve;
    }

    public Double getIntervalMinDeReference() {
        return intervalMinDeReference;
    }

    public void setIntervalMinDeReference(Double intervalMinDeReference) {
        this.intervalMinDeReference = intervalMinDeReference;
    }

    public Double getIntervalMaxDeReference() {
        return intervalMaxDeReference;
    }

    public void setIntervalMaxDeReference(Double intervalMaxDeReference) {
        this.intervalMaxDeReference = intervalMaxDeReference;
    }

    public String getUniteDeReference() {
        return uniteDeReference;
    }

    public void setUniteDeReference(String uniteDeReference) {
        this.uniteDeReference = uniteDeReference;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
