package com.example.demo.data;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Userlist;
import com.example.demo.repositories.userlistRepository;


@Service
public class UserlistDataService{
	@Autowired
	private userlistRepository repository;
	
	
	public List<? extends UserlistInterface>getAll(){
		return repository.findAll();
    }
	
	public int save(Userlist newUser) {
		repository.save(newUser);
		return newUser.getUserId();
		
	}

	public void delete(UserlistInterface user) {
		
		if (user instanceof Userlist) {
			repository.delete((Userlist) user);
		}
		
	}
	

}
