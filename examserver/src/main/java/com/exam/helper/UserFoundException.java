package com.exam.helper;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("User with this Username is already there in the DB!! try with another name");
	}
	public UserFoundException(String msg) {super(msg);}
	

}
