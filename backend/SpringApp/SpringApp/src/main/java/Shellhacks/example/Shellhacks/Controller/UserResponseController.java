package Shellhacks.example.Shellhacks.Controller;

import Shellhacks.example.Shellhacks.Model.UserResponse;
import Shellhacks.example.Shellhacks.Service.UserResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userResponse")
public class UserResponseController {

    @Autowired
    private UserResponseService service;

    @PostMapping("/createUserResponse")
    public ResponseEntity<UserResponse> createUserResponse(@RequestBody UserResponse userResponse) {
        return service.createUserResponse(userResponse.getUserID(), userResponse.isAnswer());
    }

    @GetMapping("/getUserResponse")
    public ResponseEntity<UserResponse> getUserResponse(@RequestBody UserResponse userResponse) {
        return service.getUserResponse(userResponse.getUserResponseID());
    }
}