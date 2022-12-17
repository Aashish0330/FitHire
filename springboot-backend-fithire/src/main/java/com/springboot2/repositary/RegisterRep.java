package com.springboot2.repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import com.springboot2.model.Jobs;
import com.springboot2.model.Register;


@Repository
public interface RegisterRep extends JpaRepository<Register,Long> {
	
	Optional<Register> findById(Long id);
	
	Optional<Register> findByNameOrEmail(String name,String email);
	
	Boolean existsByName(String name);
	
	Boolean existsByEmail(String email);

}
