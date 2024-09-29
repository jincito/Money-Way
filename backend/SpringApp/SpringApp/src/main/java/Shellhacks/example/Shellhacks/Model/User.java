package Shellhacks.example.Shellhacks.Model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userID;
    @Column(name = "user_name")
    private String username;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "age")
    private int age;
    @Column(name = "state_of_residence")
    private String stateOfResidence;
    @Column(name = "status")
    private String status;

    @JsonCreator
    public User(@JsonProperty("userID") int userID)
     {
        this.userID = userID;
    }

    public User(int userID, String username, String email, String password, int age, String stateOfResidence, String status) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
        this.stateOfResidence = stateOfResidence;
        this.status = status;
    }

    public User() {

    }

    public User(String username, String email, String password, int age, String stateOfResidence, String status) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
        this.stateOfResidence = stateOfResidence;
        this.status = status;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public String getStateOfResidence() {
        return stateOfResidence;
    }

    public void setStateOfResidence(String stateOfResidence) {
        this.stateOfResidence = stateOfResidence;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", age=" + age +
                ", stateOfResidence='" + stateOfResidence + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
