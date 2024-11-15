package ProjetLibre.labo_service.Repositories;

import ProjetLibre.labo_service.Entities.Laboratoire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaboratoireRepo extends JpaRepository<Laboratoire,Long> {
    Laboratoire findByNom(String nom);
}
