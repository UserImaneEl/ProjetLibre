package ProjetLibre.examen_service.Repositories;

import ProjetLibre.examen_service.Entities.Examen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamenRepo extends JpaRepository<Examen,Long> {
}
