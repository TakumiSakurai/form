package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	

	@PostMapping("/userlist/delete")
	@CrossOrigin
	public List<? extends UserlistInterface>delete(@RequestBody Userlist user) {
		service.delete(user);
		return service.getAll();
	}
//	@CrossOrigin
//	@GetMapping("/userlist/add")
//	public int addUser(@RequestBody Userlist newUser) {
//		return service.save(newUser);
//	}

}
