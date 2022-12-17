package com.springboot2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.springboot2.model.Register;
import com.springboot2.service.RegisterService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1")
public class RegisterController {
	
	@Autowired
	private RegisterService registerservice;
		
	@GetMapping("/register")
	public List<Register> getAllUsers(){
		return registerservice.getAllUsers();
	}	
		
	//create user creds rest api
	@PostMapping("/register")
	public Register createUser(@RequestBody Register register) {
		return registerservice.add(register);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Register register)
	{
		List<Register> users = registerservice.getAllUsers();
		
		for(Register other : users)
		{
			if (other.equals(register)) {
				register.setLoggedin(false);
				return ResponseEntity.ok(register);
			}
			
		else
			if (other.user(register)) {
				register.setLoggedin(false);
				return ResponseEntity.ok(register);
			}
		}
		return ResponseEntity.badRequest().body("User not Found");
	}
	
	@PostMapping("/adminlogin")
	public ResponseEntity<?> loginAdminUser(@RequestBody Register register)
	{
		List<Register> users = registerservice.getAllUsers();
		
		for(Register other : users)
		{
			if (other.admin(register)) {
				register.setLoggedin(false);
				return ResponseEntity.ok(register);
			}
		}
		return ResponseEntity.badRequest().body("User not Found");
	}
	

	@GetMapping("/register/{id}")
	public Register getUserById(@PathVariable Long id)
	{
		return registerservice.UserById(id);
	}
	  
	@DeleteMapping("/register/delete/{id}")
	public void delete(@PathVariable Long id)
	{
		registerservice.delete(id);
	}

	

}
