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
	
	public Userlist add(Userlist newUser) {
		return repository.save(newUser);
		
		
		
	}

	public void delete(int user) {
			repository.deleteById(user);
		
		
	}
	

//	public String login(String userEmail ,Userlist userlist) {
//		if(userEmail Instanceof Userlist) {
//            return repository.findByUserPassword(userEmail);
//        }
//		// TODO 自動生成されたメソッド・スタブ
//		 return null;
//	}

}
