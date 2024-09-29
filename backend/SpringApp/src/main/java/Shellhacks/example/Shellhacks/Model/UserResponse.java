package Shellhacks.example.Shellhacks.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_response")
public class UserResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_response_id")
    private int userResponseID;

    @Column(name = "user_id", nullable = false)
    private int userID;

    @Column(name = "answer")
    private boolean answer;

    public UserResponse(int userResponseID, int userID, boolean answer) {
        this.userResponseID = userResponseID;
        this.userID = userID;
        this.answer = answer;
    }

    public UserResponse(int userID, boolean answer) {
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

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
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
