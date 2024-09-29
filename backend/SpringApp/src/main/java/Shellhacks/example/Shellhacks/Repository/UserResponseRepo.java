package Shellhacks.example.Shellhacks.Repository;

import Shellhacks.example.Shellhacks.Model.UserResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface UserResponseRepo extends CrudRepository<UserResponse, Integer> {
    Optional<UserResponse> findByUserResponseID(int userResponseID);

    //@Query(value = "SELECT * FROM department ORDER BY department_id", nativeQuery = true)

    //public Iterable<Department> getAllDepartmentsOrderedById(); This is the call
}

