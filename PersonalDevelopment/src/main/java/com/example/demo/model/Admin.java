package com.example.demo.model;

import com.example.demo.data.AdminInterface;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin implements AdminInterface{
	
	@jakarta.persistence.Id
	@jakarta.persistence.Column
	@jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
	private String id;
	
	@jakarta.persistence.Column
	private String password;

	@Override
	public String getId() {
		// TODO 自動生成されたメソッド・スタブ
		return id;
	}

	@Override
	public String getPassword() {
		// TODO 自動生成されたメソッド・スタブ
		return password;
	}

	@Override
	public void setId(String id) {
		this.id = id;
		
	}

	@Override
	public void setPassword(String password) {
		this.password = password;
		
	}

}
