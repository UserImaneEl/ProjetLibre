package com.ProjetLabo.ContactLabo_Service.controllers;


import com.ProjetLabo.ContactLabo_Service.Clients.LaboRestClient;
import com.ProjetLabo.ContactLabo_Service.entities.ContactLabo;
import com.ProjetLabo.ContactLabo_Service.models.Laboratoire;
import com.ProjetLabo.ContactLabo_Service.repositories.ContactLaboRepository;
import com.ProjetLabo.ContactLabo_Service.services.ContactLaboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
public class ContactLaboController {

    @Autowired
    ContactLaboService contactLaboService;
    @Autowired
    ContactLaboRepository contactLaboRepository;
    @Autowired
    LaboRestClient laboRestClient;

    ContactLabo contactLabo;
    @PostMapping("/add")
    public ResponseEntity<ContactLabo> addContact(@RequestBody ContactLabo contactLabo){
        ContactLabo newContactLabo = contactLaboService.addContact(contactLabo);
        return ResponseEntity.status(HttpStatus.CREATED).body(newContactLabo);
    }

    @GetMapping
    public List<ContactLabo> ContactLaboList(){
        return contactLaboRepository.findAll();
    }

    @GetMapping("/{id}")
    public ContactLabo findContactLaboById(@PathVariable Long id){
        ContactLabo contactLabo = contactLaboRepository.findById(id).get();
        Laboratoire labo = laboRestClient.findLaboratoireById(contactLabo.getIdLaboratoire());
        contactLabo.setLaboratoire(labo);
        return contactLabo;
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<ContactLabo> updateContact(@PathVariable Long id, @RequestBody ContactLabo updatedContactLabo) {
        ContactLabo savedContact = contactLaboService.updateContact(id, updatedContactLabo);
        return ResponseEntity.ok(savedContact);
    }

    // Method to delete a ContactLabo
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable Long id) {
        contactLaboService.deleteContact(id);
        return ResponseEntity.noContent().build();
    }

}
