package Shellhacks.example.Shellhacks.Repository;

import Shellhacks.example.Shellhacks.Model.UserResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


public interface UserResponseRepo extends CrudRepository<UserResponse, Integer> {
    Optional<UserResponse> findByUserResponseID(int userResponseID);
    List<UserResponse> findByUserID(int userID);
}

