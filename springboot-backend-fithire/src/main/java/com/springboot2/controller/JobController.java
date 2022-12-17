package com.springboot2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.springboot2.model.Jobs;
import com.springboot2.service.JobService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2")
public class JobController {
	
	@Autowired
	private JobService jobservice;
	
	
	@GetMapping("/postjob")
	public List<Jobs> getAllUsers(){
		return jobservice.getAllJobs();
	}	
	
	@PostMapping("/postjob")
	public Jobs createUser(@RequestBody Jobs job) {
		return jobservice.add(job);
	}
	
	@GetMapping("/postjob/applyjob/{id}")
	public Jobs JobById(@PathVariable Long id)
	{
		return jobservice.getJobById(id);
	}
	

	@GetMapping("/postjob/jobs/{id}")
	public Jobs getJobById(@PathVariable Long id)
	{
		return jobservice.getJobById(id);
	}
	

	@PutMapping("/postjob/editjobs/{id}")
	public Jobs UpdateJobs(@PathVariable Long id,@RequestBody Jobs jobDetails)
	{
		return jobservice.updateJob(id, jobDetails);
	}
	
	
	@PutMapping("/postjob/jobs/{id}")
	public Jobs ApplyJob(@PathVariable Long id,@RequestBody Jobs jobDetails)
	{
		return jobservice.applyJob(id, jobDetails);
	}
	
	
	@DeleteMapping("/postjob/jobs/{id}")
	public void delete(@PathVariable Long id)
	{
		jobservice.deleteJob(id);
	}
	

}
