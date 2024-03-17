package com.campus.fenixgarden.services;

import com.campus.fenixgarden.exceptions.UserDuplicateException;
import com.campus.fenixgarden.exceptions.InvalidUserException;
import com.campus.fenixgarden.models.User;
import com.campus.fenixgarden.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void userValidation(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user == null || !user.getEncryptedPass().equalsIgnoreCase(password)) {
            throw new InvalidUserException("The credentials entered are wrong");
        }
    }

    public Map<Object, Object> registerUser(User user) {
        try {
            userRepository.save(user);
            return new LinkedHashMap<>() {{
                put("message", "User has been registered successfully");
            }};
        } catch (Exception e) {
            throw new UserDuplicateException("Username already exists");
        }
    }
}
