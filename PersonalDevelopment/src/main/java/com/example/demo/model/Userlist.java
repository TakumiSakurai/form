package com.example.demo.model;

import com.example.demo.data.UserlistInterface;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "userlist")

public class Userlist implements UserlistInterface {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String mailaddress;
	
	@Column
	private String password;
	
	@Column
	private int age;
	
	@Column
	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Override
	public int getUserId() {
		// TODO 自動生成されたメソッド・スタブ
		return id;
	}

	@Override
	public String getUserName() {
		// TODO 自動生成されたメソッド・スタブ
		return name;
	}

	@Override
	public String getUserEmail() {
		// TODO 自動生成されたメソッド・スタブ
		return mailaddress;
	}

	@Override
	public String getUserPassword() {
		// TODO 自動生成されたメソッド・スタブ
		return password;
	}

	@Override
	public int getUserAge() {
		// TODO 自動生成されたメソッド・スタブ
		return age;
	}

	@Override
	public Gender getUserGender() {
		// TODO 自動生成されたメソッド・スタブ
		return 	gender;
	}

	@Override
	public void setUserId(int userId) {
		this.id = userId;
		
	}

	@Override
	public void setUserName(String userName) {
		this.name = userName;
	}

	@Override
	public void setUserEmail(String userEmail) {
		this.mailaddress = userEmail;
	}
		
	

	@Override
	public void setUserPassword(String userPassword) {
		this.password = userPassword;

	
		
	}

	@Override
	public void setUserAge(int UserAge) {
		this.age = UserAge;
		
	}

	@Override
	public void setUserGender(Gender UserGender) {
		this.gender = UserGender;
		
	}


	

}

