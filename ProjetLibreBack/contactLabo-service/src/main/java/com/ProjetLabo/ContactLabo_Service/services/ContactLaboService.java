package com.ProjetLabo.ContactLabo_Service.services;


import com.ProjetLabo.ContactLabo_Service.entities.ContactLabo;
import com.ProjetLabo.ContactLabo_Service.repositories.ContactLaboRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactLaboService {

    @Autowired
    private ContactLaboRepository contactLaboRepository;

    public ContactLabo addContact(ContactLabo contactLabo){

        return contactLaboRepository.save(contactLabo);
    }


}
