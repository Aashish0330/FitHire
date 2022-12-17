package com.springboot2.service;

import com.springboot2.repositary.RegisterRep;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.springboot2.exception.ResourceNotFound;
import com.springboot2.model.Register;

@Component
public class RegisterService {
	
	@Autowired
	private RegisterRep registerrep;
	
	public List<Register> getAllUsers()
	{
		return registerrep.findAll();
	}
	
	public Register add(Register user)
	{
		return registerrep.save(user);
	}
	
	public Register UserById(long id)
	{
		Register register =  registerrep.findById(id)
				.orElseThrow(() -> new ResourceNotFound("User does not exist with id :" + id));
		return register;
	}
	
	public void delete(long id)
	{
		Register register = registerrep.findById(id)
				.orElseThrow(() -> new ResourceNotFound("User not exist with id :" + id));
		registerrep.delete(register);
		Map<Long,Boolean> response = new HashMap<>();
		response.put(id, Boolean.TRUE);
		return;
	}
	

}
