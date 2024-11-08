package com.ProjetLibre.Adresse_Service.Controllers;


import com.ProjetLibre.Adresse_Service.Entities.Adresse;
import com.ProjetLibre.Adresse_Service.Repositories.AdressseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/adresses")
public class AdresseController {

    @Autowired
    private AdressseRepository adressseRepository;


    @PostMapping
    public void addAdresse(@RequestBody Adresse adresse){
         adressseRepository.save(adresse);
    }

    @GetMapping
    public List<Adresse> adresseList(){
        return adressseRepository.findAll();
    }

    @GetMapping("/{id}")
    public Adresse findAdresseById(@PathVariable("id") Long id){
        return adressseRepository.findById(id).get();
    }
}
