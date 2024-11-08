package ProjetLibre.utilisateur_service.Clients;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name="LABO-SERVICE")
public interface LaboratoireClient {
}
