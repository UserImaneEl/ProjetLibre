package ProjetLibre.analyse_service.Clients;

import ProjetLibre.analyse_service.Classes.Laboratoire;
import ProjetLibre.analyse_service.Entities.AnalyseTable;

import ProjetLibre.analyse_service.Repositories.AnalyseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name= "LABO-SERVICE")
public interface LaboratoireClient {

   @GetMapping("/getLaboById/{id}")
   Laboratoire getLaboById(@PathVariable("id") Long id);
}
