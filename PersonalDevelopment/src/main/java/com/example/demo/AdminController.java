package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.data.AdminInterface;
import com.example.demo.data.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService service;
@GetMapping("/admin")
@CrossOrigin
public List<? extends AdminInterface> getAll() {
	System.out.println("AdminController.getAll()");
	return service.getAll();
}





}
