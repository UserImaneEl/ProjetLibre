package ProjetLibre.analyse_service.Services;

import ProjetLibre.analyse_service.Classes.Laboratoire;
import ProjetLibre.analyse_service.Clients.LaboratoireClient;
import ProjetLibre.analyse_service.Daos.AnalyseDto;
import ProjetLibre.analyse_service.Entities.AnalyseTable;
import ProjetLibre.analyse_service.Mappers.AnalyseMapper;
import ProjetLibre.analyse_service.Repositories.AnalyseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class AnalyseService {
    @Autowired
    AnalyseMapper analyseMapper;
    @Autowired
    AnalyseRepo analyseRepo;
    @Autowired
    LaboratoireClient laboratoireClient;
    public void save(AnalyseDto dto){
       AnalyseTable analyseTable= analyseMapper.fromDtoToAnalyse(dto);
       Laboratoire l=laboratoireClient.getLaboByNom(dto.getLaboratoire());
       analyseTable.setIdLaboratoire(l.getId());
       analyseRepo.save(analyseTable);
    }
    public List<AnalyseDto> findAll(){
         List<AnalyseTable> analyseTables=analyseRepo.findAll();
        List<AnalyseDto> listDtos = analyseTables.stream()
                .map(r -> analyseMapper.fromAnalyseToDto(r))
                .collect(Collectors.toList());

        return listDtos;
    }


    public List<AnalyseDto> findAllByNom(String nom) {
        List<AnalyseTable> analyseTables=analyseRepo.findAllByNom(nom);
        List<AnalyseDto> listDtos = analyseTables.stream()
                .map(r -> analyseMapper.fromAnalyseToDto(r))
                .collect(Collectors.toList());

        return listDtos;
    }

    public void deletAnalyse(Long id) {
        analyseRepo.deleteById(id);
    }

    public List<AnalyseDto> findAllByType(String type) {
        List<AnalyseTable> analyseTables=analyseRepo.findAllByType(type);
        List<AnalyseDto> listDtos = analyseTables.stream()
                .map(r -> analyseMapper.fromAnalyseToDto(r))
                .collect(Collectors.toList());

        return listDtos;
    }

    public void updateAnalyse(AnalyseDto analyse) {
        AnalyseTable a=analyseRepo.findById(analyse.getId()).get();
        a.setType(analyse.getType());
        a.setDescription(analyse.getDescription());
        Laboratoire l=laboratoireClient.getLaboByNom(analyse.getLaboratoire());
        a.setLabo(l);
        analyseRepo.save(a);

    }
}
