package ProjetLibre.dossier_service.Clients;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name="PATIENT-SERVICE")
public interface PatientClient {
}
