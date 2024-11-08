package ProjetLibre.patient_service.Repositories;

import ProjetLibre.patient_service.Entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepo extends JpaRepository<Patient,Long> {
}
