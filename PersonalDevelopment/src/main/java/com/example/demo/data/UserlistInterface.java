package com.example.demo.data;

import com.example.demo.model.Gender;

public interface UserlistInterface {
	public int getUserId ();
	public String getUserName ();
	public String getUserEmail ();
	public String getUserPassword ();
	public int getUserAge ();
	public Gender getUserGender ();
	
	public void setUserId (int userId);
	public void setUserName (String userName);
	public void setUserEmail (String userEmail);
	public void setUserPassword (String userPassword);
	public void setUserAge (int UserAge);
	public void setUserGender (Gender UserGender);
	
	

}
