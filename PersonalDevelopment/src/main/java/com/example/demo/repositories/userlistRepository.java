package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Userlist;

@Repository
public interface userlistRepository extends JpaRepository<Userlist, Integer> {


	Object findByMailaddress(String userEmail);

	Userlist save(int userlist);

	Optional<Userlist> findById(Userlist user1);
	
  
}
