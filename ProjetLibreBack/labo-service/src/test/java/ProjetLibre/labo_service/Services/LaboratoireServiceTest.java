package ProjetLibre.labo_service.Services;

import ProjetLibre.labo_service.Dtos.LaboDto;
import ProjetLibre.labo_service.Entities.Laboratoire;
import ProjetLibre.labo_service.Mappers.LaboMapper;
import ProjetLibre.labo_service.Repositories.LaboratoireRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class LaboratoireServiceTest {

    @Mock
    private LaboratoireRepo laboratoireRepo;

    @Mock
    private LaboMapper laboMapper;

    @InjectMocks
    private LaboratoireService laboratoireService;

    private LaboDto laboDto;
    private Laboratoire laboratoire;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this); // Initialisation des mocks

        laboDto = new LaboDto();
        laboDto.setNom("Labo1");
        laboDto.setLogo("logo.png");
        laboDto.setNrc("1234");
        laboDto.setActive(true);
        laboDto.setDateActivation("2024-11-13");

        laboratoire = new Laboratoire();
        laboratoire.setNom("Labo1");
        laboratoire.setLogo("logo.png");
        laboratoire.setNrc("1234");
        laboratoire.setActive(true);
        laboratoire.setDateActivation(LocalDate.parse("2024-11-13"));
    }

    @Test
    public void testSaveLabo() {
        // Arrange
        when(laboMapper.fromDtoToLabo(laboDto)).thenReturn(laboratoire);
       when(laboratoireRepo.save(laboratoire)).thenReturn(laboratoire);

        // Act
        laboratoireService.saveLabo(laboDto);

        // Assert
        verify(laboMapper, times(1)).fromDtoToLabo(laboDto);
        verify(laboratoireRepo, times(1)).save(laboratoire);
    }

    @Test
    public void testListLabos() {
        // Arrange
        Laboratoire labo1 = new Laboratoire();
        labo1.setNom("Labo1");
        labo1.setLogo("logo1.png");
        labo1.setNrc("1234");
        labo1.setActive(true);
        labo1.setDateActivation(LocalDate.parse("2024-11-13"));

        Laboratoire labo2 = new Laboratoire();
        labo2.setNom("Labo2");
        labo2.setLogo("logo2.png");
        labo2.setNrc("5678");
        labo2.setActive(false);
        labo2.setDateActivation(LocalDate.parse("2024-10-10"));

        List<Laboratoire> laboratoires = Arrays.asList(labo1, labo2);
        when(laboratoireRepo.findAll()).thenReturn(laboratoires);
        when(laboMapper.fromLaboToDto(labo1)).thenReturn(new LaboDto());
        when(laboMapper.fromLaboToDto(labo2)).thenReturn(new LaboDto());

        // Act
        List<LaboDto> result = laboratoireService.listLabos();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        verify(laboratoireRepo, times(1)).findAll();
        verify(laboMapper, times(2)).fromLaboToDto(any(Laboratoire.class));
    }

    @Test
    public void testUpdate() {
        // Arrange
        Long laboId = 1L;
        when(laboratoireRepo.findById(laboId)).thenReturn(java.util.Optional.of(laboratoire));
        when(laboMapper.fromDtoToLabo(laboDto)).thenReturn(laboratoire);
        laboDto.setNom("Updated Labo");
        laboDto.setLogo("updated_logo.png");
        laboDto.setNrc("9999");
        laboDto.setActive(false);
        laboDto.setDateActivation("2024-12-01");

        // Act
        laboratoireService.update(laboDto, laboId);

        // Assert
        verify(laboratoireRepo, times(1)).findById(laboId);
        verify(laboratoireRepo, times(1)).save(laboratoire);

        assertEquals("Updated Labo", laboratoire.getNom());
        assertEquals("updated_logo.png", laboratoire.getLogo());
        assertEquals("9999", laboratoire.getNrc());
        assertFalse(laboratoire.isActive());
        assertEquals(LocalDate.parse("2024-12-01"), laboratoire.getDateActivation());
    }

    // Ajoutez d'autres tests pour d'autres méthodes si nécessaire.
}
