package net.egem.webService.repository.dao;

import net.egem.webService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by drsnkrt on 9/13/2018.
 */
public interface UserDao extends JpaRepository<User, Integer> {

    User findByUserName(String userName);
    User findById(int id);
    void deleteById(int id);
}
