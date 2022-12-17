package com.springboot2.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import com.springboot2.exception.ResourceNotFound;
import com.springboot2.model.Jobs;
import com.springboot2.repositary.JobsRep;

@Component
public class JobService {
	
	@Autowired
	private JobsRep jobrep;
	
	public List<Jobs> getAllJobs()
	{
		return jobrep.findAll();
	}
	
	public Jobs add(Jobs job)
	{
		return jobrep.save(job);
	}
	
	public Jobs getJobById(long id)
	{
		Jobs job =  jobrep.findById(id)
				.orElseThrow(() -> new ResourceNotFound("User does not exist with id :" + id));
		return job;
	}
	
	public Jobs updateJob(@PathVariable Long id, @RequestBody Jobs jobDetails){
		Jobs job = jobrep.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Job not exist with id :" + id));
		
		job.setMinqual(jobDetails.getMinqual());
		job.setNum(jobDetails.getNum());
		job.setEmail(jobDetails.getEmail());
		job.setCompany(jobDetails.getCompany());
		job.setExp(jobDetails.getExp());
		job.setFulldesc(jobDetails.getFulldesc());
		job.setSmalldesc(jobDetails.getSmalldesc());
		job.setTitle(jobDetails.getTitle());
		job.setSalaryfrom(jobDetails.getSalaryfrom());
		job.setSalaryto(jobDetails.getSalaryto());
		job.setTitle(jobDetails.getTitle());
		
		Jobs updatedJob = jobrep.save(job);
		return updatedJob;
	}
	
	public Jobs applyJob(@PathVariable Long id, @RequestBody Jobs jobDetails){
		Jobs job = jobrep.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Job not exist with id :" + id));
		
		job.setAppliedcandid(jobDetails.getAppliedcandid()+1);
		
		
		Jobs updatedJob = jobrep.save(job);
		return updatedJob;
	}
	
	public void deleteJob(@PathVariable Long id)
	{
		Jobs job = jobrep.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Job not exist with id :" + id));
		jobrep.delete(job);
		Map<Long,Boolean> response = new HashMap<>();
		response.put(id, Boolean.TRUE);
		return;
	}

}
