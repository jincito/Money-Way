package Shellhacks.example.Shellhacks.Service;

import Shellhacks.example.Shellhacks.Model.User;
import Shellhacks.example.Shellhacks.Model.UserResponse;
import Shellhacks.example.Shellhacks.Repository.UserResponseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserResponseService {

    @Autowired
    UserResponseRepo repo;

    public ResponseEntity<UserResponse> createUserResponse(int userID, boolean answer){
        UserResponse userResponse = new UserResponse(userID, answer);
        // repo method
        repo.save(userResponse);


        return ResponseEntity.status(201).header("Success", "The user response has been created").body(userResponse);
    }

    public ResponseEntity<UserResponse> updateUser(int userResponseID, int userID, boolean answer){
        UserResponse userResponse = new UserResponse(userResponseID, userID, answer);
        // repo method

        return ResponseEntity.status(200).header("Success", "The user response has been updated").body(userResponse);
    }

    public ResponseEntity<UserResponse> getUserResponse(int userResponseId) {
        Optional<UserResponse> userResponse = repo.findByUserResponseID(userResponseId);
        if (userResponse.isPresent()) {
            return ResponseEntity.status(200)
                    .header("Success", "The user response has been retrieved")
                    .body(userResponse.get());
        } else {
            return ResponseEntity.status(404)
                    .header("Error", "User response not found")
                    .body(null);
        }
    }

}
