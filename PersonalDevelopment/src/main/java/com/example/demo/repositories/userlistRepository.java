package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Userlist;

@Repository
public interface userlistRepository extends JpaRepository<Userlist, Integer> {


	Object findByMailaddress(String userEmail);
  
}
