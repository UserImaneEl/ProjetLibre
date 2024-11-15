package ProjetLibre.utilisateur_service.Web;

import ProjetLibre.utilisateur_service.Entities.Compte;
import ProjetLibre.utilisateur_service.Services.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class Controller {
    @Autowired
    CompteService compteService;
    @GetMapping("/getCompteByUsername/{username}")
    public Compte getCompte(@PathVariable("username") String username){
              return   compteService.getCompteByUsername(username);
    }
    @PostMapping("/addCompte")
    public void addCompte(@RequestBody Compte compte){
        compteService.addCompte(compte);
    }
}
