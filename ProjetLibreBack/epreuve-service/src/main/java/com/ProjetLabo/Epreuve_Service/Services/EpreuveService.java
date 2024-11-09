package com.ProjetLabo.Epreuve_Service.Services;


import com.ProjetLabo.Epreuve_Service.Entities.Epreuve;
import com.ProjetLabo.Epreuve_Service.Repositories.EpreuveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EpreuveService {

    @Autowired
    EpreuveRepository epreuveRepository ;

    public Epreuve addEpreuve(Epreuve epreuve){
        return epreuveRepository.save(epreuve);
    }
}
