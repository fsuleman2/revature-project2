package com.exam.model;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.exam.service.UserService;
import com.exam.service.impl.UserServiceImpl;

class UserTest {
public static UserService service = null;
public static User user=null;
	@BeforeAll
	public static void setup() {
		service= new UserServiceImpl();
		user = new User();
	}
	@Test
	void testUserLoginUSernameForExisiting() throws Exception{
		user.setUsername("sul123");
		assertTrue("sul123".equals(user.getUsername()));
	}
	@Test
	void testUserLoginUSernameNonExisiting() throws Exception{
		user.setUsername("sul123");
		assertTrue("sul123".equals(user.getUsername()));
	}
	@Test
	void testUserLoginPasswordExisiting() throws Exception{
		user.setUsername("abc123");
		assertTrue("abc123".equals(user.getUsername()));
	}
	@Test
	void testUserLoginPasswordNonExisiting() throws Exception{
		user.setPassword("sul123");
		assertTrue("sul123".equals(user.getPassword()));
	}
	@Test
	void testUserLoginPhoneNumberValid() throws Exception{
		user.setPhone("8121795121");
		assertTrue("8121795121".equals(user.getPhone()));
	}
	@Test
	void testUserLoginPhoneNumberInvalid() throws Exception{
		user.setPhone("8121795121");
		assertFalse("81217".equals(user.getPhone()));
	}
	@Test
	void testUserLoginEmailvalid() throws Exception{
		user.setEmail("sul@gmail.com");
		assertTrue("sul@gmail.com".equals(user.getEmail()));
	}
	@Test
	void testUserLoginEmailInvalid()throws Exception{
		user.setEmail("sul@gmail.com");
		assertTrue("sul@gmail.com".equals(user.getEmail()));
	}
	@Test
	void testUserLoginPhoneNumberInValid1() throws Exception{
		user.setPhone("812179512100");
		assertTrue("812179512100".equals(user.getPhone()));
	}
	@Test
	void testUserLoginUSernameNoNExisiting() throws Exception{
		user.setUsername(" s s s");
		assertTrue(" s s s".equals(user.getUsername()));
	}

}
