package ProjetLibre.labo_service.Mappers;

import ProjetLibre.labo_service.Dtos.LaboDto;
import ProjetLibre.labo_service.Entities.Laboratoire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

@Component
public class LaboMapper {

    //@Autowired
    //Laboratoire labo;

    //@Autowired
    //LaboDto laboDto;

    public Laboratoire fromDtoToLabo(LaboDto laboDto){
        Laboratoire labo=new Laboratoire();
        if (laboDto == null) {
            return null;
        }

        LocalDate localDate = null;
        try {
            if (laboDto.getDateActivation() != null) {
                localDate = LocalDate.parse(laboDto.getDateActivation());
            }
        } catch (DateTimeParseException e) {
            // Log or handle parsing error if needed
        }

        labo.setNom(laboDto.getNom() != null ? laboDto.getNom() : labo.getNom());
        labo.setLogo(laboDto.getLogo() != null ? laboDto.getLogo() : labo.getLogo());
        labo.setNrc(laboDto.getNrc() != null ? laboDto.getNrc() : labo.getNrc());
        labo.setActive(laboDto.isActive());
        labo.setDateActivation(localDate != null ? localDate : labo.getDateActivation());

        return labo;
    }

    public LaboDto fromLaboToDto(Laboratoire l) {
        LaboDto laboDto=new LaboDto();
        if (l == null) {
            return null;
        }

        laboDto.setNom(l.getNom() != null ? l.getNom() : "");
        laboDto.setLogo(l.getLogo() != null ? l.getLogo() : "");
        laboDto.setNrc(l.getNrc() != null ? l.getNrc() : "");
        laboDto.setActive(l.isActive());
        laboDto.setDateActivation(
                l.getDateActivation() != null ? l.getDateActivation().toString() : null
        );

        return laboDto;
    }
}
