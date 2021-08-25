package com.exam.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.ToString;
@ToString
@Data
@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue
//	@Column(name = "userId",nullable = false)
	private Long id;
	private String username;
	private String password;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private boolean enabled = true;
	private String profile;
	public User() {
		// TODO Auto-generated constructor stub
	}
	
	
	//user can have many users so for storing that we use SET DS
		@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER, mappedBy = "user")
		@JsonIgnore //to avoid circular dependency
		private Set<UserRole> userRoles = new HashSet<>();
		
		
	
	//getter and setter for userole
	public Set<UserRole> getUserRoles() {
		return userRoles;
	}
	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}

}
