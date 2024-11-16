package ProjetLibre.utilisateur_service.Services;

import ProjetLibre.utilisateur_service.Entities.Compte;
import ProjetLibre.utilisateur_service.Repositories.CompteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CompteService {
    @Autowired
    CompteRepo compteRepo;
   public Compte getCompteByUsername(String username){

       return compteRepo.findByUsername(username);
   }
   public void addCompte(Compte compte){
       compteRepo.save(compte);
   }
}
