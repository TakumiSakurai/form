package com.example.demo.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository repository;
	
	public List<? extends AdminInterface>getAll() {
		return repository.findAll();
	}

}
