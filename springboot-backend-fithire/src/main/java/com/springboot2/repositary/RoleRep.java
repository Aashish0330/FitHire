package com.springboot2.repositary;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springboot2.model.Role;
import com.springboot2.model.RoleName;


@Repository
public interface RoleRep extends JpaRepository<Role,Long> {
	
	Optional<Role> findByName(RoleName roleName);
	

}
