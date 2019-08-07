package net.egem.webService.repository.service;

import net.egem.webService.entity.User;
import net.egem.webService.repository.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@Service
public class UserService {

    @Autowired
    UserDao dao;

    public Iterable<User> getAllUsers() {
        return dao.findAll();
    }

    public User saveUser(User user) {
        return dao.save(user);
    }

    public User getByUserName(int id) {
        return dao.findById(id);
    }

    public String findByUserName(String username, String password) {
        User user = dao.findByUserName(username);
        if (user != null) {
            String un = user.getUserName();
            String pw = user.getPassword();
            String role = user.getRole();
            if (un.contains(username) && pw.contains(password)) {
                if (role.equals("Admin")) {
                    return "Admin";
                } else {
                    return "User";
                }
            } else {
                return "false";
            }
        } else {
            return "false";
        }
    }

    public void deleteByUserId(int id) {
        dao.deleteById(id);
    }

    public User getByUN(String un){
        User user=dao.findByUserName(un);
        return user;
    }

}