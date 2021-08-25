package com.exam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamserverApplication{

//	@Autowired
//	private UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		// TODO Auto-generated method stub
//		User user=new User();
//		user.setFirstName("syed");
//		user.setLastName("suleman");
//		user.setUsername("sul123");
//		user.setPassword("sul@123");
//		user.setEmail("sul@gmail.com");
//		user.setPhone("8121795121");
//		user.setProfile("admin");
//	
//		Role role1 = new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet = new HashSet<>();
//		
//		UserRole userRole =  new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRoleSet.add(userRole);
//		User user1=this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());
//		
//		
//		
//		
//	}
}
