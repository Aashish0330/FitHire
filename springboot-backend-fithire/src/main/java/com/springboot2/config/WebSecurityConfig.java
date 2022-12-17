package com.springboot2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
	
	// Roles for users
	private static final String ROLE_ADMIN = "ADMIN";
	private static final String ROLE_USER = "USER";
	private static final String ROLE_TRAINER = "TRAINER";
	
	@Bean
	public AuthenticationManager authenticationManager(
	        AuthenticationConfiguration authConfig) throws Exception {
	    return authConfig.getAuthenticationManager();
	}
	
	
	// In-memory users with roles
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {		
		auth.inMemoryAuthentication()
				.withUser("admin")
				.password(passwordEncoder().encode("admin@123"))
				.roles(ROLE_ADMIN)
				.and()
				.withUser("user")
				.password(passwordEncoder().encode("user@123"))
				.roles(ROLE_TRAINER,ROLE_USER);
	}
	
	// Password encoding
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	// Authorized the request based on role
	 @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests()
				.antMatchers("/adminlogin").hasRole(ROLE_ADMIN)
				.antMatchers("/login").hasAnyRole(ROLE_USER,ROLE_TRAINER)
				.antMatchers("/register").permitAll()
				.and().formLogin();
		return http.build();
	}
}