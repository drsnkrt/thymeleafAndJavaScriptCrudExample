package net.egem.webService.controller;

import net.egem.webService.entity.User;
import net.egem.webService.repository.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by drsnkrt on 25-Sep-18.
 */
@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/getallusers")
    public Iterable<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "login/{userName}&{password}")
    public String getUserByUserName(@PathVariable("userName") final String userName, @PathVariable(value = "password") String password) {
        return userService.findByUserName(userName, password);
    }
    @GetMapping(value = "/{userName}")
    public User getByUserName(@PathVariable("userName") final String userName) {
        return userService.getByUN(userName);
    }

    @PostMapping(value = "saveuser")
    public User save(@RequestBody final User user) {
        return userService.saveUser(user);
    }

    @PutMapping(value = "updateuser/{userName}")
    public User update(@PathVariable("userName") int id, @RequestBody User user) {
        User u = userService.getByUserName(id);
        u.setPassword(user.getPassword());
        u.setUserName(user.getUserName());
        u.setRole(user.getRole());
        return userService.saveUser(u);
    }

    @DeleteMapping(value = "/{id}")
    public void delById(@PathVariable("id") final int id) {
        userService.deleteByUserId(id);
    }

}
