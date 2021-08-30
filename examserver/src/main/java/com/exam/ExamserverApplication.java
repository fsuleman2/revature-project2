package com.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;

@SpringBootApplication
@CrossOrigin("*")
public class ExamserverApplication /*implements CommandLineRunner*/{
//	private static final Logger logger = LogManager.getLogger(Log4j2DemoApplication.class);
//	@Autowired
//	private UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;
//	@Bean
//	public WebMvcConfigurer configurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				// TODO Auto-generated method stub
//				registry.addMapping("/*").allowedOrigins("*");
//			}
//		};
//	}


//	@Override
//	public void run(String... args) throws Exception {
//		// TODO Auto-generated method stub
//		User user=new User();
//		user.setFirstName("syed");
//		user.setLastName("suleman");
//		user.setUsername("sul123");
//		user.setPassword(this.bCryptPasswordEncoder.encode("sul@123"));
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
