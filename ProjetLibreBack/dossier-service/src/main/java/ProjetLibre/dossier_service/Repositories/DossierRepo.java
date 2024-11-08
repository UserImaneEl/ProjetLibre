package ProjetLibre.dossier_service.Repositories;

import ProjetLibre.dossier_service.Entities.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DossierRepo extends JpaRepository<Dossier,Long> {
}
