package ProjetLibre.analyse_service.Web;

import ProjetLibre.analyse_service.Classes.Laboratoire;
import ProjetLibre.analyse_service.Clients.LaboratoireClient;

import ProjetLibre.analyse_service.Entities.AnalyseTable;
import ProjetLibre.analyse_service.Repositories.AnalyseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



/*
public class Controller {
    @Autowired
    AnalyseRepo analyseRepo;
    @Autowired
    LaboratoireClient laboratoireClient;
    @GetMapping("/getAnalyseById/{id}")
    public AnalyseTable getAnalyseById(@PathVariable(name="id") Long id){
        AnalyseTable analyse=analyseRepo.findById(id).get();
        Laboratoire l=laboratoireClient.getLaboById(analyse.getIdLaboratoire());
        analyse.setLabo(l);
        return analyse;
    }
    @PostMapping("/addAnalyse")
    public void addAnalyse(@RequestBody AnalyseTable analyseTable){
        analyseRepo.save(analyseTable);
    }

*/

@RestController
@RequestMapping("/api/analyses")
public class Controller {

    @Autowired
    private AnalyseRepo analyseRepo;
    @Autowired
    LaboratoireClient laboratoireClient;

    @PostMapping("/addLabo")
    public void addLabo(@RequestBody AnalyseTable analyseTable){
        analyseRepo.save(analyseTable);
    }

    @GetMapping("/listAnalyses")
    public List<AnalyseTable> listAnalyses(){
        return analyseRepo.findAll();
    }

    @GetMapping("/{id}")

    public AnalyseTable getAnalyseById(@PathVariable(name="id") Long id){
        AnalyseTable analyse=analyseRepo.findById(id).get();
        Laboratoire l=laboratoireClient.getLaboById(analyse.getIdLaboratoire());
        analyse.setLabo(l);
        return analyse;
    }

}
