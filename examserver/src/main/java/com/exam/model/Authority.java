package com.exam.model;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Data
@AllArgsConstructor
public class Authority implements GrantedAuthority {
	
	private String authority;
	
	

	@Override
	public String getAuthority() {
		return this.authority;
	}

}
