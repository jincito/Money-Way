package Shellhacks.example.Shellhacks.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_response")
public class UserResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_response_id")
    private int userResponseID;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userID;

    @Column(name = "answer")
    private boolean answer;

    public UserResponse(int userResponseID, User userID, boolean answer) {
        this.userResponseID = userResponseID;
        this.userID = userID;
        this.answer = answer;
    }

    public UserResponse(User userID, boolean answer) {
        this.userID = userID;
        this.answer = answer;
    }

    public UserResponse() {

    }

    public int getUserResponseID() {
        return userResponseID;
    }

    public void setUserResponseID(int userResponseID) {
        this.userResponseID = userResponseID;
    }

    public User getUserID() {
        return userID;
    }

    public void setUserID(User userID) {
        this.userID = userID;
    }

    public boolean isAnswer() {
        return answer;
    }

    public void setAnswer(boolean answer) {
        this.answer = answer;
    }

    public String toString() {
        return "UserResponse{" +
                "userResponseID=" + userResponseID +
                ", userID=" + userID +
                ", answer=" + answer +
                '}';
    }
}
