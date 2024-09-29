package Shellhacks.example.Shellhacks.Model;

import jakarta.persistence.*;

@Entity
@Table (name="questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private int questionID;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = false)
    private Topic topicID;
    @Column(name = "question_text", nullable = false)
    private String questionText;

    public Question(int questionID, Topic topicID, String questionText) {
        this.questionID = questionID;
        this.topicID = topicID;
        this.questionText = questionText;
    }

    public Question(Topic topicID, String questionText) {
        this.topicID = topicID;
        this.questionText = questionText;
    }

    public Question() {

    }

    public int getQuestionID() {
        return questionID;
    }

    public void setQuestionID(int questionID) {
        this.questionID = questionID;
    }

    public Topic getTopicID() {
        return topicID;
    }

    public void setTopicID(Topic topicID) {
        this.topicID = topicID;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String toString() {
        return "Question{" +
                "questionID=" + questionID +
                ", topicID=" + topicID +
                ", questionText='" + questionText + '\'' +
                '}';
    }
}
