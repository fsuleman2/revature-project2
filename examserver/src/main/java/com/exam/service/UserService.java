package com.exam.service;

import java.util.Set;

import com.exam.model.User;
import com.exam.model.UserRole;

public interface UserService {
	//for creating or registering the user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//for getting user details by User Name
	public User getUser(String username);
	
	//for deleting the user;
	public void deleteUser(Long userId);
	
	//for updating user
	public User updateUser(User user);

}
