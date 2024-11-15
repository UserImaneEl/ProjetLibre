package ProjetLibre.gateway_service.Client;

import ProjetLibre.gateway_service.Models.Compte;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("UTILISATEUR-SERVICE")

public interface UtilisateurClient {
    @GetMapping("/getCompteByUsername/{username}")
    Compte getCompte(@PathVariable(name="username") String username);
}
