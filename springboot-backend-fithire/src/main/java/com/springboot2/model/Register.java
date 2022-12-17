package com.springboot2.model;

import java.util.Collection;
import java.util.Date;
import java.util.Objects;
import javax.persistence.JoinColumn;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;


@Entity
@Table(name="users")
public class Register {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="name")
	private String name;
	@Column(name="password")
	private String password;
	private Boolean loggedin;
	@Column(name="role")
	private String role;
	@Column(name="email")
	private String email;
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(
			name = "user_role", 
			joinColumns = @JoinColumn(name = "user_id",
			referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(name = "role_id",
			referencedColumnName = "id"))
	private Collection<Role> roles;
	public Collection<Role> getRoles() {
		return roles;
	}

	public void setRoles(Collection<Role> roles) {
		this.roles = roles;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name="createdOn")
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdOn;
	
	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Boolean getLoggedin() {
		return loggedin;
	}

	public void setLoggedin(Boolean loggedin) {
		this.loggedin = loggedin;
	}

	public Register()
	{
		
	}
	
	
	public Register(String name, String password, String lastname, String email,String role,Date createdOn) 
	{
		super();
		this.name = name;
		this.password = password;
		this.loggedin = false;
		this.role = role;
		this.email = email;
		this.createdOn = createdOn;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	@Override
	public boolean equals(Object o)
	{
		if(this == o) return true;
		if(!(o instanceof Register)) return false;
		Register register = (Register) o;
		return Objects.equals(name,register.name) && 
			Objects.equals(password,register.password);
	}
	
	public boolean admin(Object o)
	{
		if(this == o) return true;
		if(!(o instanceof Register)) return false;
		Register register = (Register) o;
		return Objects.equals("aashish",register.name) && 
			Objects.equals("1234",register.password);
	}
	
	public boolean user(Object o)
	{
		if(this == o) return true;
		if(!(o instanceof Register)) return false;
		Register register = (Register) o;
		return Objects.equals(name,register.name) && 
			Objects.equals(password,register.password) &&
			Objects.equals("user",register.role);
	}
}
