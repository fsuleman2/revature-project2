package com.exam.helper;

public class UserNotFoundException extends Exception{

	public UserNotFoundException() {
		super("User with this Username not found in the DB!! try with another name");
	}
	public UserNotFoundException(String msg) {super(msg);}
	
}
