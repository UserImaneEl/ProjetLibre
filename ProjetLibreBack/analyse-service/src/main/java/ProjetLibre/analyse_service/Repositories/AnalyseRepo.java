package ProjetLibre.analyse_service.Repositories;

import ProjetLibre.analyse_service.Entities.AnalyseTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnalyseRepo extends JpaRepository<AnalyseTable,Long> {
}
