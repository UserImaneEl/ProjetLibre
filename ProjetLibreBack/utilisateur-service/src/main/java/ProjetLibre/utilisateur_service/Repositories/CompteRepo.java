package ProjetLibre.utilisateur_service.Repositories;

import ProjetLibre.utilisateur_service.Entities.Compte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompteRepo extends JpaRepository<Compte,Long> {
    Compte findByUsername(String username);
}
