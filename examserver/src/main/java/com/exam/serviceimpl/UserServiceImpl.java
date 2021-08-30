package com.exam.serviceimpl;

import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.helper.UserFoundException;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repository.RoleRepository;
import com.exam.repository.UserRepository;
import com.exam.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	 private static final Logger log = LogManager.getLogger(RoleRepository.class);
	//creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		// checking user already there or not

		User local = this.userRepository.findByUsername(user.getUsername());
		if (local != null) {
			log.info("User Already Exist");
			throw new UserFoundException();
		} else {
			// create user
			for (UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}

	//getting username
	@Override
	public User getUser(String username) {
		
		return this.userRepository.findByUsername(username);
	}
	//for deleting the user
	@Override
	public void deleteUser(Long userId) {
		
		this.userRepository.deleteById(userId);
	}

	@Override
	public User updateUser(User user) {
		
		return this.userRepository.save(user);
	}


	

}
