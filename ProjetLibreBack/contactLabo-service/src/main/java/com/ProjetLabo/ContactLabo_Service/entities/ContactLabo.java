package com.ProjetLabo.ContactLabo_Service.entities;


import com.ProjetLabo.ContactLabo_Service.models.Laboratoire;
import jakarta.persistence.*;

@Entity
public class ContactLabo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String numTel;
    private String fax;
    private Long IdLaboratoire;
    @Transient
    private Laboratoire laboratoire;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Laboratoire getLaboratoire() {
        return laboratoire;
    }

    public void setLaboratoire(Laboratoire laboratoire) {
        this.laboratoire = laboratoire;
    }

    public Long getIdLaboratoire() {
        return IdLaboratoire;
    }

    public void setIdLaboratoire(Long idLaboratoire) {
        IdLaboratoire = idLaboratoire;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumTel() {
        return numTel;
    }

    public void setNumTel(String numTel) {
        this.numTel = numTel;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }
}
