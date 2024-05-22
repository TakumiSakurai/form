package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.data.UserlistDataService;
import com.example.demo.data.UserlistInterface;
import com.example.demo.model.Userlist;


@RestController
public class UserListController {
	
	@Autowired
	private UserlistDataService service;
	@CrossOrigin
	@GetMapping("/userlist")
	public List<? extends UserlistInterface> getAll() {
		System.out.println("UserListController.getAll()");
		return service.getAll();
	}
	


	@PostMapping("/userlist/add")
	@CrossOrigin
	public Userlist add(@RequestBody Userlist userlist) {
		System.out.println("UserListController.add()");
		return service.add(userlist);
	}
	
//	@PostMapping("/userlist/login")
//	@CrossOrigin
//	public String Login(@RequestParam String userEmail) {
//		System.out.println("UserListController.login()");
//		return service.login(userEmail);
//	}
//	
	
	
	
	@DeleteMapping("/userlist/delete/{id}")
	@CrossOrigin
	public void delete(@PathVariable("id") int user) {
		System.out.println("id"+ user);
		service.delete(user);
	}


}
