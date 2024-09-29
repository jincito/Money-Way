package Shellhacks.example.Shellhacks.Service;

import Shellhacks.example.Shellhacks.Model.User;
import Shellhacks.example.Shellhacks.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.HashMap;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public ResponseEntity<User> createUser(String username,
                                           String email,
                                           String password,
                                           int age,
                                           String stateOfResidence,
                                           String status) {
        User user = new User(username, email, password, age, stateOfResidence, status);
        Optional<User> emailExists = userRepo.findByEmail(email);

        if (emailExists.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).header("Error", "Email already exists").body(user);
        }
        userRepo.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).header("Success", "User has been created").body(user);
    }

    public ResponseEntity<User> updateUser(int userID,
                                           String username,
                                           String email,
                                           String password,
                                           int age,
                                           String stateOfResidence,
                                           String status) {
        User user = new User(userID, username, email, password, age, stateOfResidence, status);
        if (!userRepo.existsById(userID))
            return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Error", "Id not found").body(user);
        userRepo.save(user);
        return ResponseEntity.status(HttpStatus.OK).header("Success", "User has been updated").body(user);
    }

    public ResponseEntity<User> deleteUser(int userID) {
        Optional<User> user = userRepo.findById(userID);
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Error", "Id not found").build();
        }
        userRepo.deleteById(userID);
        return ResponseEntity.status(HttpStatus.OK).header("Success", "User has been deleted").body(user.get());
    }

    public ResponseEntity<Map<String, Object>> validateUser(String username, String password) {
        Map<String, Object> response = new HashMap<>();

        Optional<User> foundUser = userRepo.findByUsername(username);

        if (foundUser.isEmpty()) {
            response.put("status", "error");
            response.put("message", "username not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        User user = foundUser.get();
        if (!user.getPassword().equals(password)) {
            response.put("status", "error");
            response.put("message", "Invalid password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        response.put("status", "success");
        response.put("message", "User has been validated");
        response.put("user", user);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
