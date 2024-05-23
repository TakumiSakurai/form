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
	
	public Userlist add(Userlist userlist) {
		if (repository.findByMailaddress(userlist.getUserEmail()) != null) {
			System.out.println("メールアドレスが重複しています");
			return null;
		}
		return repository.save(userlist);
		
		
		
	}

	public void delete(int user) {
			repository.deleteById(user);
		
		
	}

	public Userlist login(String userEmail, String userPassword) {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}

	public Userlist update(int user, Userlist userlist ) {
		Userlist newUser  = repository.findById(user).orElse(null);
		if (newUser  != null) {
			newUser .setUserName(userlist.getUserName());
			newUser .setUserEmail(userlist.getUserEmail());
			newUser .setUserPassword(userlist.getUserPassword());
			newUser.setUserAge(userlist.getUserAge());
			newUser .setUserGender(userlist.getUserGender());

			return repository.save(newUser);
		}
		return null;
	}
	

}
