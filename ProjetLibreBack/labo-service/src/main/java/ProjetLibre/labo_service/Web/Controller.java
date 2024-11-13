package ProjetLibre.labo_service.Web;

import ProjetLibre.labo_service.Dtos.LaboDto;
import ProjetLibre.labo_service.Entities.Laboratoire;
import ProjetLibre.labo_service.Repositories.LaboratoireRepo;
import ProjetLibre.labo_service.Services.LaboratoireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/labos")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
     @Autowired LaboratoireRepo laboratoireRepo;

     @Autowired
    LaboratoireService laboratoireService;

    @PostMapping("/addLabo")
    public ResponseEntity<String> addLabo(@RequestBody LaboDto laboDto) {
        try {

            laboratoireService.saveLabo(laboDto);

            return new ResponseEntity<>("Laboratoire ajouté avec succès", HttpStatus.CREATED);
        } catch (Exception e) {
            // Capture l'exception et renvoie un message d'erreur détaillé
            return new ResponseEntity<>("Erreur lors de l'ajout du laboratoire: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  @PutMapping("/updateLabo/{id}")
  public void update(@PathVariable(name="id")Long id,@RequestBody LaboDto laboDto){
      laboratoireService.update(laboDto,id);
  }

    @GetMapping("/labos")
    public ResponseEntity<List<LaboDto>> getLabos() {
        try {
            List<LaboDto> list = laboratoireService.listLabos();
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            // Log de l'erreur pour le suivi des problèmes
            System.err.println("Erreur lors de la récupération des laboratoires : " + e.getMessage());
            // Retourne une réponse d'erreur avec un code 500 et un message d'erreur
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getLaboById/{id}")
    public Laboratoire getLaboById(@PathVariable(name="id") Long id){
        return  laboratoireRepo.findById(id).get();
     }






     @GetMapping("/{id}")
     public Laboratoire getLaboratoireById(@PathVariable("id") Long id){
         return laboratoireRepo.findById(id).get();
     }


}
