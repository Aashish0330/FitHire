package com.springboot2.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="jobs")
public class Jobs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "title")
	private String title;
	@Column(name = "smalldesc")
	private String smalldesc;
	@Column(name = "fulldesc")
	private String fulldesc;
	@Column(name = "exp")
	private int exp;
	@Column(name = "salaryfrom")
	private int salaryfrom;
	@Column(name = "salaryto")
	private int salaryto;
	@Column(name = "email")
	private String email;
	@Column(name = "company")
	private String company;
	@Column(name = "minqual")
	private String minqual;
	@Column(name = "num")
	private double num;
	@Column(name="appliedcandid")
	private int appliedcandid;
	
	public int getAppliedcandid() {
		return appliedcandid;
	}
	public void setAppliedcandid(int appliedcandid) {
		this.appliedcandid = appliedcandid;
	}
	public String getMinqual() {
		return minqual;
	}
	public void setMinqual(String minqual) {
		this.minqual = minqual;
	}
	public double getNum() {
		return num;
	}
	public void setNum(double num) {
		this.num = num;
	}
	public Jobs()
	{
		
	}
	public Jobs(String title, String smalldesc, String fulldesc, int exp, int salaryfrom, int salaryto, String email,
			String company,String minqual,Double num,int appliedcandid) {
		super();
		this.title = title;
		this.smalldesc = smalldesc;
		this.fulldesc = fulldesc;
		this.exp = exp;
		this.salaryfrom = salaryfrom;
		this.salaryto = salaryto;
		this.email = email;
		this.company = company;
		this.minqual = minqual;
		this.num = num;
		this.appliedcandid=appliedcandid;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSmalldesc() {
		return smalldesc;
	}
	public void setSmalldesc(String smalldesc) {
		this.smalldesc = smalldesc;
	}
	public String getFulldesc() {
		return fulldesc;
	}
	public void setFulldesc(String fulldesc) {
		this.fulldesc = fulldesc;
	}
	public int getExp() {
		return exp;
	}
	public void setExp(int exp) {
		this.exp = exp;
	}
	public int getSalaryfrom() {
		return salaryfrom;
	}
	public void setSalaryfrom(int salaryfrom) {
		this.salaryfrom = salaryfrom;
	}
	public int getSalaryto() {
		return salaryto;
	}
	public void setSalaryto(int salaryto) {
		this.salaryto = salaryto;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	} 
	
	
}
