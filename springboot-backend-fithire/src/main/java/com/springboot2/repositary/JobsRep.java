package com.springboot2.repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springboot2.model.Jobs;



@Repository
public interface JobsRep extends JpaRepository<Jobs,Long> {
	
	Optional<Jobs> findById(Long id);

}
