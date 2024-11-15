package com.ProjetLabo.ContactLabo_Service.services;


import com.ProjetLabo.ContactLabo_Service.entities.ContactLabo;
import com.ProjetLabo.ContactLabo_Service.repositories.ContactLaboRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactLaboService {

    @Autowired
    private ContactLaboRepository contactLaboRepository;

    public ContactLabo addContact(ContactLabo contactLabo){
        return contactLaboRepository.save(contactLabo);
    }
    public List<ContactLabo> getAllContacts() {
        return contactLaboRepository.findAll();
    }
    public ContactLabo findContactById(Long id) {
        return contactLaboRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
    }

    // Method to update a ContactLabo
    public ContactLabo updateContact(Long id, ContactLabo updatedContactLabo) {
        ContactLabo existingContact = contactLaboRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        existingContact.setEmail(updatedContactLabo.getEmail());
        existingContact.setNumTel(updatedContactLabo.getNumTel());
        existingContact.setFax(updatedContactLabo.getFax());
        existingContact.setIdLaboratoire(updatedContactLabo.getIdLaboratoire());
        return contactLaboRepository.save(existingContact);
    }

    // Method to delete a ContactLabo
    public void deleteContact(Long id) {
        ContactLabo contactLabo = contactLaboRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        contactLaboRepository.delete(contactLabo);
    }
}
