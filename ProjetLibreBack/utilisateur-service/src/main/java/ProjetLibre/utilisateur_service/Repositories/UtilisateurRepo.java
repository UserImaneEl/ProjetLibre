package ProjetLibre.utilisateur_service.Repositories;

import ProjetLibre.utilisateur_service.Entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepo extends JpaRepository<Utilisateur,String> {
}
