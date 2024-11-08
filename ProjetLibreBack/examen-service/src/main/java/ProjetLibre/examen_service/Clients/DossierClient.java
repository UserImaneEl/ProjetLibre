package ProjetLibre.examen_service.Clients;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "DOSSIER-SERVICE")

public class DossierClient {
}
