package ProjetLibre.labo_service.Services;

import ProjetLibre.labo_service.Dtos.LaboDto;
import ProjetLibre.labo_service.Entities.Laboratoire;
import ProjetLibre.labo_service.Mappers.LaboMapper;
import ProjetLibre.labo_service.Repositories.LaboratoireRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class LaboratoireService {
    @Autowired
    LaboratoireRepo laboratoireRepo;
    @Autowired LaboMapper laboMapper;
    public void saveLabo(LaboDto laboDto){
        Laboratoire labo=laboMapper.fromDtoToLabo(laboDto);
        laboratoireRepo.save(labo);
    }
    public List<LaboDto> listLabos(){
        List<Laboratoire> list= laboratoireRepo.findAll();
        List<LaboDto> listDtos = list.stream()
                .map(r -> laboMapper.fromLaboToDto(r))
                .collect(Collectors.toList());
       return listDtos;
    }
    public void update(LaboDto dto,Long id){
        Laboratoire l=laboratoireRepo.findById(id).get();
        l.setNom(dto.getNom());
        l.setLogo(dto.getLogo());
        l.setNrc(dto.getNrc());
        l.setActive(dto.isActive());
        l.setDateActivation(LocalDate.parse(dto.getDateActivation()));
        laboratoireRepo.save(l);
    }
    public Laboratoire getLaboByNom(String nom){
       return laboratoireRepo.findByNom(nom);
    }



}
