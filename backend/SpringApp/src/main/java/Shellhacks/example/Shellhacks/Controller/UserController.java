package Shellhacks.example.Shellhacks.Controller;

import Shellhacks.example.Shellhacks.Model.User;
import Shellhacks.example.Shellhacks.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user)
    {
        return service.createUser(user.getUsername(), user.getEmail(), user.getPassword(),  user.getAge(), user.getStateOfResidence(), user.getStatus());

    }

    @PutMapping("/updateUser")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return service.updateUser(user.getUserID(), user.getUsername(), user.getEmail(), user.getPassword(), user.getAge(), user.getStateOfResidence(), user.getStatus());
        }


    @DeleteMapping("/deleteUser")
    public ResponseEntity<User> deleteUser(@RequestBody User user){
        return service.deleteUser(user.getUserID());
    }
}

////    @PostMapping("/login")
////    public ResponseEntity<String> login(@RequestParam String userID, @RequestParam String password) {
////        Optional<User> user = userService.findUserByUserIDAndPassword(userID, password);
////
////        if (user.isPresent()) {
////            return ResponseEntity.ok("Login successful!"); // Or return user details if needed
////        } else {
////            return ResponseEntity.status(401).body("Invalid userID or password."); // 401 Unauthorized
////        }
//    }


