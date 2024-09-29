package Shellhacks.example.Shellhacks.Repository;

import Shellhacks.example.Shellhacks.Model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepo extends CrudRepository<User, Integer> {

    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    //Optional<User> findByUserIDAndPassword(String userID, String password);

    //@Query(value = "SELECT * FROM department ORDER BY department_id", nativeQuery = true)  // nativeQuery lets us use familiar SQL

    //public Iterable<Department> getAllDepartmentsOrderedById(); This is the call
}
